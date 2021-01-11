import React from "react"
import { Layout } from "../components/layout"

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import CategoryRooms from "../components/category_rooms"

export default ({ data, location }) => {
  return (
    <Layout>
        <div>
            <Helmet title={data.site.siteMetadata.title} />
            <div>
              <h1>Projects</h1>
              <CategoryRooms location={location}></CategoryRooms>
            </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`