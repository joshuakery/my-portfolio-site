import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
//Styles
import styles from "./design_projects.module.css"

// Utilities
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    filter: {frontmatter: {categories: {eq: "design"}}}
                ) {
                    edges {
                      node {
                        frontmatter {
                          title
                          featuredImage {
                            childImageSharp {
                              fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                        fields {
                          slug
                        }
                      }
                    }
                    totalCount
                }
            }
        `
    )
    return (
        <div>
            <h1 className={styles.title}>Portfolio</h1>
            <ul className={styles.projectsContainer}>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                const { slug } = node.fields
                const { title, subtitle, featuredImage } = node.frontmatter
                return (
                    <li key={slug} className={styles.project}>
                        <Link to={slug}>
                            <h3 className={styles.projectTitle}>{title}</h3>
                            <Img fluid={featuredImage.childImageSharp.fluid}
                                        className={styles.featuredImage}/>
                        </Link>
                    </li>
                )
                })}
            </ul>
            {children}
        </div>
    )
}