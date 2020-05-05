import React from "react"
import { Layout } from "../components/layout"
import { Helmet, renderStatic } from "react-helmet"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import { CVTable } from "../components/cv_table"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {

    },
  }).Compiler

export default ({ data }) => {
    const cv = data.allMarkdownRemark.edges[0].node;
    return (
        <Layout>
            <div>
                <Helmet title={cv.frontmatter.title} />
                <h1>{cv.frontmatter.title}</h1>
                <CVTable>
                {
                    renderAst(cv.htmlAst)
                }
                </CVTable>
            </div>
        </Layout>
    )

}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "cv"}}}) {
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