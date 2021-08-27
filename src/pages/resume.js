import React from "react"
import { DesignLayout } from "../components/layout"
import { Helmet, renderStatic } from "react-helmet"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import { ButtonLink, GridContainer } from "../components/design/meta"
import { ResumeContainer } from "../components/design/resume_container"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      "button-link": ButtonLink,
      "grid-container": GridContainer,
    },
  }).Compiler

export default ({ data }) => {
    const resume = data.allMarkdownRemark.edges[0].node;
    return (
        <DesignLayout>
            <ResumeContainer>
                <Helmet title={"Joshua Kery " + resume.frontmatter.title} />
                <h1>{resume.frontmatter.title}</h1>
                {
                    renderAst(resume.htmlAst)
                }
            </ResumeContainer>
        </DesignLayout>
    )

}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "resume"}}}) {
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