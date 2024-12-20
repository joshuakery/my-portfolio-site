import React from "react"
import PropTypes from "prop-types"
import { Layout } from "../components/layout"
import House from "../components/house"
import Room from "../components/room"
import Basement from "../components/room_basement"
import Ground from "../components/ground"
import { Link, graphql } from "gatsby"
import * as styles from "../templates/category.module.css"
import MyGatsbyImage from "../components/utility/my-gatsby-image"

const getRooms = (edges, location) => {
  let rooms = [];
  for (let i=0; i < edges.length-1; i++) {
    let {node} = edges[i];
    const { slug } = node.fields
    const { title, featuredImage } = node.frontmatter
    rooms.push (
        <li key={slug} className={styles.room_container}>
          <Room title={title} slug={slug}>
            {/* <Image node={featuredImage}
                  className={catStyles.featuredImage}/> */}
            <MyGatsbyImage
                  node={featuredImage}
                  alt={title}
                  className={styles.featuredImage}
            />
          </Room>
        </li>
    )
  }
  return rooms
}

const getLastRoom = (edges,location) => {
  let {node} = edges[edges.length-1];
  const { slug } = node.fields
  const { title, featuredImage } = node.frontmatter
  return (
      <li key={slug} className={styles.basement_container}>
        <Basement title={title} slug={slug}>
          {/* <Image node={featuredImage}
               className={catStyles.featuredImage}/> */}
            <MyGatsbyImage
                  node={featuredImage}
                  alt={title}
                  className={styles.featuredImage}
            />
        </Basement>
      </li>
  )
}

//SAVING THIS BECAUSE THIS IS THE OLD CATS, FOR THE OLD ART WEBSITE
const Cats = ({ pageContext, data, location }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
        <h1>{category}</h1>
        <div className={styles.container}>
          <House>
            {/* {getSpecialRoom(category)} */}
            {getRooms(edges, location)}
          </House>
          <Ground>
            {getLastRoom(edges,location)}
          </Ground>
        </div>
    </Layout>
  )
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
            featuredImage
            {
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