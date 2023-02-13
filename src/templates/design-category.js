import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import * as styles from "../templates/design-category.module.css"
// import Image from "gatsby-dynamic-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Helmet } from "react-helmet"
import { DesignLayout } from "../components/layout";

const getProjects = (edges) => {
  let projects = [];
  for (let i=0; i < edges.length; i++) {
      let {node} = edges[i];
      const { slug } = node.fields;
      const { title, featuredImage } = node.frontmatter;
      const image = getImage(featuredImage);
      projects.push(
        <li key={slug}>
            <Link to={slug}>
                {/* <Image node={featuredImage} className={catStyles.featuredImage}/> */}
                <GatsbyImage
                      image={image}
                      alt={title}
                      className={styles.featuredImage}
                />
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
                <h1 className={styles.catTitle}>{category}</h1>
                <ul className={styles.projectsList}>
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
      sort: [{ frontmatter: { date: DESC } }]
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
              publicURL
              childImageSharp
              {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`