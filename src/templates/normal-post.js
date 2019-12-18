import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import House from "../components/house"
import Ground from "../components/ground"
import Img from "gatsby-image"

import normalStyles from '../templates/normal-post.module.css'

export default ({ location, data }) => {
  const post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      {location.state && location.state.previousPage &&
        <Link to={location.state.previousPage}>
          <div className={normalStyles.back_container}>
            <div className={normalStyles.back_sign}>
              <p className={normalStyles.back_btn}>
                BACK  
              </p>
            </div>
          </div>
        </Link>
      }
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <House>
          <h1 className={normalStyles.post_title}>{post.frontmatter.title}</h1>
          <Img fluid={featuredImgFluid} className={normalStyles.featuredImage}/>
          <div dangerouslySetInnerHTML={{ __html: post.html }} className={normalStyles.innerHTML}/>
      </House>
      <Ground></Ground>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
      excerpt
    }
  }
`