import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
//Styles
import styles from "./design_projects.module.css"

// Utilities
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const getProjects = (edges) => {
  let projects = [];
  console.log(edges);
  for (let i=0; i < edges.length; i++) {
      let {node} = edges[i];
      const { slug } = node.fields;
      const { title, subtitle, featuredImage } = node.frontmatter;
      console.log(title);
      projects.push(
        <li key={slug} className={styles.project}>
            <Link to={slug}>
                {/* <h3 className={styles.projectTitle}>{title}</h3> */}
                <Img fluid={featuredImage.childImageSharp.fluid}
                            className={styles.featuredImage}/>
            </Link>
        </li>
      )
  }
  return projects
}

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                  sort: {order: DESC, fields: frontmatter___date},
                  filter: {frontmatter: {categories: {eq: "uxui"}}}
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
            {/* <h1 className={styles.title}>Portfolio</h1> */}
            {/* <div className={styles.project1_container}>
              <h2>Kidspool</h2>
              <h3>Responsive Web App Study</h3>
                <div className={styles.project1_img}>
                </div>
            </div> */}
            <ul className={styles.projectsContainer}>
              {getProjects(data.allMarkdownRemark.edges)}
            </ul>
            {children}
        </div>
    )
}