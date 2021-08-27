import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import rehypeReact from "rehype-react"
import { ButtonLink, MultiMobileContainer, MobileContainer, GridContainer,
         DesignMeta, CoverImg,
         Quote,
         ImagePair, TextPair,
         FullWidthImage, 
         BrowserContainer } from "../components/design/meta"

import Styles from "../templates/design-post.module.css"
import { DesignLayout } from "../components/layout"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
       "button-link": ButtonLink,
        "multi-mobile-container": MultiMobileContainer,
        "mobile-container": MobileContainer,
        "browser-container": BrowserContainer,
        "grid-container": GridContainer,
        "design-meta": DesignMeta,
        "cover-img": CoverImg,
        "quote": Quote,
        "img-pair": ImagePair,
        "text-pair": TextPair,
        "full-width-image": FullWidthImage,
    },
  }).Compiler

export default ({ data, location }) => {
  const post = data.markdownRemark;
  return (
    <DesignLayout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className={Styles.post_container}>
          <h1 className={Styles.title}>{post.frontmatter.title}</h1>
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