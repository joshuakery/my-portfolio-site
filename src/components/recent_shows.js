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
                allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "show"}}}, limit: 1) {
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

                        <div className={recShowStyles.brick_hole}>
                            <div className={recShowStyles.left_brick_hole}></div>
                        </div>
                        <div className={recShowStyles.brick_hole}>
                            <div className={recShowStyles.right_brick_hole}></div>
                        </div>

                        <div className={recShowStyles.room_link_container}>
                            <p className={recShowStyles.room_link}>
                                Recent Show: {show.frontmatter.title}
                            </p>
                        </div>

                        <div className={recShowStyles.image_container}>
                            <Img fluid={show.frontmatter.featuredImage.childImageSharp.fluid}
                                        className={recShowStyles.featuredImage}/>
                        </div>
                        
                    </Link>
                  </div>
              ))}
            {children}
        </div>
    )
}