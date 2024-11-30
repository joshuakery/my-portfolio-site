import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import CategoryRooms from "../components/category_rooms"
import RecentWorks from "../components/recent_works"
import { Helmet } from "react-helmet"



export default ({ location }) => {
    return (
        <Layout>
          <Helmet title="Josh Kery | Art">
            <meta name="theme-color" content="#3f5daa"/>
          </Helmet>
          <RecentWorks location={location}></RecentWorks>
          <CategoryRooms location={location}></CategoryRooms>
        </Layout>
    )
}

export const query = graphql`
  query
  {
    site
    {
      siteMetadata
      {
        title
      }
    }
    allMarkdownRemark
    {
      group
      (
        field:
        {
          frontmatter:
          {
            categories: SELECT
          }
        }
      )
      {
        fieldValue
      }
    }
  }
`