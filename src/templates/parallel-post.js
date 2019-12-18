import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data, location }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {location.state && location.state.previousPage &&
        <Link to={location.state.previousPage}>BACK</Link>
      }
      Parallel Post
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`