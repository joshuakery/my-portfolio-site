import React from "react"
import { Layout } from "../components/layout"
import { Helmet, renderStatic } from "react-helmet"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import { CVTable } from "../components/cv_table"
import Ground from "../components/ground"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {

    },
  }).Compiler

export default ({ data }) => {
    const cv = data.allMarkdownRemark.edges[0].node;
    return (
        <Layout>
                <Helmet title={cv.frontmatter.title} />
                <CVTable>
                  {
                      renderAst(cv.htmlAst)
                  }
                </CVTable>
                <div></div>
                <Ground></Ground>
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