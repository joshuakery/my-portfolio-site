import React from "react"

//Components
import { useStaticQuery, Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//Styles
import * as styles from "./recent_works.module.css"

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query
            {
                allMarkdownRemark
                (
                    filter:
                    {
                        frontmatter:
                        {
                            categories:
                            {
                                nin: ["design","creative-coding","teaching"]
                            },
                            posttype:
                            {
                                nin: ["show","cv","about","bio","resume"]
                            }
                        }
                    },
                    limit: 3,
                    sort:
                    [
                        {
                            frontmatter:
                            {
                                date: DESC
                            }
                        }
                    ]
                )
                {
                    nodes
                    {
                        frontmatter
                        {
                            date
                            title
                            featuredImage
                            {
                                childImageSharp
                                {
                                  gatsbyImageData
                                }
                            }
                        }
                        fields
                        {
                            slug
                        }
                        id
                    }
                }
            }
        `
    );
    return (
        <div className={styles.container}>

            <div className={styles.billboard_container}>
                <ul className={styles.billboard}>
                {data.allMarkdownRemark.nodes.map(work => {
                    return (
                        <li key={work.id}>
                            <Link to={work.fields.slug}
                                state={{previousPage: location.pathname}}
                                className={styles.ad}>
                                    <GatsbyImage
                                        image={getImage(work.frontmatter.featuredImage)}
                                        alt={work.frontmatter.title}
                                        className={styles.featuredImage}
                                    />

                                    <p className={styles.ad_link}>
                                            {work.frontmatter.title}
                                    </p>

                            </Link>
                        </li>
                    )
                }
                )}
                </ul>
            </div>

            <div className={styles.billboard_title_container}>
                <h3 className={styles.billboard_title}>
                    RECENT WORKS
                </h3>
            </div>
            {children}
        </div>
    )
}