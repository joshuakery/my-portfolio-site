import React from "react"
import { DesignLayout } from "../components/layout"
import Intro from "../components/design/intro"

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import DesignProjects from "../components/design/projects"

export default ({ data, location }) => {
  console.log("using helmet");
  return (
    <DesignLayout>
        <div>
            <Helmet title="Design | Joshua Kery"></Helmet>
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