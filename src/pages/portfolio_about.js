import React from "react"
import { DesignLayout } from "../components/layout"
import { Link } from "gatsby"
import { Helmet, renderStatic } from "react-helmet"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import { AboutBody } from "../components/about_body"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {

    },
  }).Compiler

export default ({ data }) => {
    const about = data.allMarkdownRemark.edges[0].node;
    return (
        <DesignLayout>
            <div>
                <Helmet title="About Joshua Kery" />
                <h1>{about.frontmatter.title}</h1>
                <AboutBody>
                  {
                    renderAst(about.htmlAst)
                  }
                </AboutBody>
            </div>
        </DesignLayout>
    )

}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "bio"}}}) {
        edges {
          node {
            frontmatter {
              title
            }
            htmlAst
          }
        }
    }
  }
`