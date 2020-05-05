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
                allMarkdownRemark(filter: {frontmatter: {posttype: {nin: ["show","cv","about"]}}},
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
            <ul className={recWorkStyles.billboard_container}>
              {data.allMarkdownRemark.nodes.map(work => {
                return (
                    <li key={work.id}>
                        <Link to={work.fields.slug} state={{previousPage: location.pathname}}>
                            <div className={recWorkStyles.ad}>
                                <div className={recWorkStyles.ad_link_container}>
                                    <p className={recWorkStyles.ad_link}>
                                        {work.frontmatter.title}
                                    </p>
                                </div>
                                <Img fluid={work.frontmatter.featuredImage.childImageSharp.fluid}
                                        className={recWorkStyles.featuredImage}/>
                            </div>
                        </Link>
                    </li>
                )
              }
              )}
            </ul>
            <div className={recWorkStyles.billboard_title_container}>
                <h3 className={recWorkStyles.billboard_title}>
                    RECENT WORKS
                </h3>
            </div>
            {children}
        </div>
    )
}