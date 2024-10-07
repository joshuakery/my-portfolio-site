import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import rehypeReact from "rehype-react"
import { ButtonLink, MultiMobileContainer, MobileContainer, GridContainer,
         DesignMeta, CoverImg,
         Quote,
         ImagePair, TextPair,
         FullWidthImage, 
         BrowserContainer, 
         BespokeContainer, VideoContainer } from "../components/design/meta"

import * as styles from "../templates/design-post.module.css"
import { DesignLayout } from "../components/layout"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
       "button-link": ButtonLink,
        "multi-mobile-container": MultiMobileContainer,
        "mobile-container": MobileContainer,
        "browser-container": BrowserContainer,
        "bespoke-container": BespokeContainer,
        "grid-container": GridContainer,
        "design-meta": DesignMeta,
        "cover-img": CoverImg,
        "quote": Quote,
        "img-pair": ImagePair,
        "text-pair": TextPair,
        "full-width-image": FullWidthImage,
        "video-container": VideoContainer
    },
  }).Compiler

export default ({ data, location }) => {
  const post = data.markdownRemark;
  console.log(post.htmlAst);
  return (
    <DesignLayout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className={styles.post_container}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          {
            renderAst(post.htmlAst)
          }
      </div>
    </DesignLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
      excerpt
    }
  }
`