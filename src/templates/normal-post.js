import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"

import PhotoGroup from "../components/photo_group"
import StaggeredGroup from "../components/staggered_group"
import { Group,
         Left2, Right2, Center2,
         Left3, Right3, Center3,
         Left4, Right4, Center4,
         TextBox,
         MultiMobileContainer, MobileContainer,
         ButtonLink
        } from "../components/post_blocks"     
import VideoContainer from "../components/video_container"
import FullWidthImage from "../components/full_width_image"
import ImageRow from "../components/image-row"
import ImageCol from "../components/image_col"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import Ground from "../components/ground"

import * as styles from '../templates/normal-post.module.css'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "photo-group": PhotoGroup,
    "staggered-group": StaggeredGroup,
    "video-container": VideoContainer,
    "image-col": ImageCol,
    "group": Group,
    "l2": Left2, "r2": Right2, "c2": Center2,
    "l3": Left3, "r3": Right3, "c3": Center3,
    "l4": Left4, "r4": Right4, "c4": Center4,
    "textbox": TextBox,
    h5: FullWidthImage,
    "multi-mobile-container": MultiMobileContainer,
    "mobile-container": MobileContainer,
    "button-link": ButtonLink
  },
}).Compiler

export default ({ location, data }) => {
  const post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>

      {/* {location.state && location.state.previousPage &&
        <Link to={location.state.previousPage}>
          <div className={normalStyles.back_container}>
            <div className={normalStyles.back_sign}>
              <p className={normalStyles.back_btn}>
                BACK  
              </p>
            </div>
          </div>
        </Link>
      } */}
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <div className={styles.post_container}>
        <h1 className={styles.post_title}>{post.frontmatter.title}</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} className={normalStyles.innerHTML}/> */}
        {
          renderAst(post.htmlAst)
        }
      </div>
      <Ground></Ground>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
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
      excerpt
    }
  }
`