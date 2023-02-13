import React from "react"

//Components
import { useStaticQuery, Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


//Styles
import * as styles from "./recent_shows.module.css"

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
                      eq: "show"
                    }
                  }
                },
                limit: 1,
                sort:
                {
                  frontmatter:
                  {
                    date: DESC
                  }
                }
              )
              {
                nodes
                {
                  frontmatter
                  {
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
        <li className={styles.container}>
              {
                data.allMarkdownRemark.nodes.map
                (
                  show =>
                  {
                    const image = getImage(show.frontmatter.featuredImage);
                    return (
                      <div key={show.id} className={styles.room_container}>
                        <Link to={show.fields.slug} state={{previousPage: location.pathname}}>

                            <div className={styles.image_container}>
                                <GatsbyImage
                                  image={image}
                                  alt={show.frontmatter.title}
                                  className={styles.featuredImage}
                                />
                            </div>

                            <div className={styles.room_link_container}>
                                <div className={styles.room_link_background}>
                                    <p className={styles.room_link}>
                                        Recent Shows
                                    </p>
                                </div>
                            </div>

                            <div className={styles.left_brick_hole}></div>
                            <div className={styles.right_brick_hole}></div>
                            
                        </Link>
                      </div>
                    );
                  }
                )
              }
            {children}
        </li>
    )
}