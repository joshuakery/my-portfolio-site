import React from "react"
import { DesignLayout } from "../components/layout"
import Intro from "../components/design/intro"

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import DesignProjects from "../components/design/projects"

export default ({ data, location }) => {
  return (
    <DesignLayout>
        <div>
            <Helmet title="Design | Joshua Kery" />
            <Intro></Intro>
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