import React from "react"
import { Layout } from "../components/layout"
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
        <Layout>
            <div>
                <Helmet title={about.frontmatter.title} />
                <h1>{about.frontmatter.title}</h1>
                <AboutBody>
                {
                    renderAst(about.htmlAst)
                }
                <Link to="/cv/">My CV</Link>
                </AboutBody>
                
            </div>
        </Layout>
    )

}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "about"}}}) {
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