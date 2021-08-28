import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import catStyles from "../templates/design-category.module.css"
import Image from "gatsby-dynamic-image"

import { Helmet } from "react-helmet"
import { DesignLayout } from "../components/layout";

const getProjects = (edges) => {
  let projects = [];
  for (let i=0; i < edges.length; i++) {
      let {node} = edges[i];
      const { slug } = node.fields;
      const { title, featuredImage } = node.frontmatter;
      console.log(featuredImage);
      projects.push(
        <li key={slug}>
            <Link to={slug}>
                <Image node={featuredImage} className={catStyles.featuredImage}/>
                <h3>{title}</h3>
            </Link>
        </li>
      )
  }
  return projects
}

const DESIGNCATS = ['teaching','live-shows','design','creative-coding'];
const Cats = ({ pageContext, data, location }) => {
  const { category } = pageContext;
  const { edges } = data.allMarkdownRemark;
  return (
        <DesignLayout>
            <div>
              <Helmet title={category + " | Joshua Kery"} />
              <div>
                <h1 className={catStyles.catTitle}>{category}</h1>
                <ul className={catStyles.projectsList}>
                  {getProjects(edges)}
                </ul>
              </div>
            </div>
        </DesignLayout>
      );
}

Cats.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Cats

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] },
                               posttype: {nin: ["sketchbook"]}
                              } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`