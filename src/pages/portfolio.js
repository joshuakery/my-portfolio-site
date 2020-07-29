import React from "react"
import { DesignLayout } from "../components/layout"

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import DesignProjects from "../components/design_projects"

export default ({ data, location }) => {
  return (
    <DesignLayout>
        <div>
            <Helmet title="Portfolio | Joshua Kery" />
            <h1>UX/UI Projects</h1>
            <div>
              <DesignProjects location={location}></DesignProjects>
            </div>
        </div>
    </DesignLayout>
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