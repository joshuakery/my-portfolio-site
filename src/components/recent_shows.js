import React from "react"

//Components
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"


//Styles
import recShowStyles from "./recent_shows.module.css"

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query {
              allMarkdownRemark(filter: {frontmatter: {categories: {eq: "show"}}}, limit: 1, sort: {order: DESC, fields: frontmatter___date}) {
                    nodes {
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
                      id
                    }
                }
            }
        `
    )
    // console.log(location);
    return (
        <div className={recShowStyles.container}>
              {data.allMarkdownRemark.nodes.map(show => (
                  <div key={show.id} className={recShowStyles.room_container}>
                    <Link to={show.fields.slug} state={{previousPage: location.pathname}}>

                        <div className={recShowStyles.image_container}>
                            <Img fluid={show.frontmatter.featuredImage.childImageSharp.fluid}
                                        className={recShowStyles.featuredImage}/>
                        </div>

                        <div className={recShowStyles.room_link_container}>
                            <div className={recShowStyles.room_link_background}>
                                <p className={recShowStyles.room_link}>
                                    Recent Shows
                                </p>
                            </div>
                        </div>

                        <div className={recShowStyles.left_brick_hole}></div>
                        <div className={recShowStyles.right_brick_hole}></div>
                        
                    </Link>
                  </div>
              ))}
            {children}
        </div>
    )
}