import React from "react"

//Components
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

//Styles
import recWorkStyles from "./recent_works.module.css"

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(filter: {frontmatter: {categories: {nin: ["design","creative-coding","teaching"]},
                                                         posttype: {nin: ["show","cv","about","bio","resume"]}}},
                                  limit: 3,
                                  sort: {fields: frontmatter___date, order: DESC})
                {
                    nodes {
                        frontmatter {
                            date
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
                        id
                    }
                }
            }
        `
    )
    return (
        <div className={recWorkStyles.container}>

            <div className={recWorkStyles.billboard_container}>
                <ul className={recWorkStyles.billboard}>
                {data.allMarkdownRemark.nodes.map(work => {
                    return (
                        <li key={work.id}>
                            <Link to={work.fields.slug}
                                state={{previousPage: location.pathname}}
                                className={recWorkStyles.ad}>

                                    <Img fluid={work.frontmatter.featuredImage.childImageSharp.fluid}
                                            className={recWorkStyles.featuredImage}/>

                                    <p className={recWorkStyles.ad_link}>
                                            {work.frontmatter.title}
                                    </p>

                            </Link>
                        </li>
                    )
                }
                )}
                </ul>
            </div>

            <div className={recWorkStyles.billboard_title_container}>
                <h3 className={recWorkStyles.billboard_title}>
                    RECENT WORKS
                </h3>
            </div>
            {children}
        </div>
    )
}