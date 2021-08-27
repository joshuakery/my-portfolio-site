import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import CategoryRooms from "../components/category_rooms"
import RecentWorks from "../components/recent_works"



export default ({ location }) => {
    return (
        <Layout>
          <RecentWorks location={location}></RecentWorks>
          <CategoryRooms location={location}></CategoryRooms>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`