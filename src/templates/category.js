import React from "react"
import PropTypes from "prop-types"
import { Layout } from "../components/layout"
import House from "../components/house"
import Ground from "../components/ground"
import { Link, graphql } from "gatsby"
import catStyles from "../templates/category.module.css"
import Img from "gatsby-image"
import {Bathroom, Bedroom, Kitchen, Basement} from "../components/specialRoom"

const getRooms = (edges, location) => {
  // console.log(location);
  let rooms = [];
  for (let i=0; i < edges.length-1; i++) {
    let {node} = edges[i];
    const { slug } = node.fields
    const { title, featuredImage } = node.frontmatter
    rooms.push (
        <li key={slug} className={catStyles.room_container}>
        <Link to={slug} state={{previousPage: location.pathname}}>
          <div className={catStyles.room}>
            <div className={catStyles.brick_hole}>
                <div className={catStyles.left_brick_hole}></div>
            </div>
            <div className={catStyles.brick_hole}>
                <div className={catStyles.right_brick_hole}></div>
            </div>
            <div className={catStyles.room_link_container}>
              <p className={catStyles.room_link}>
                  {title}
              </p>
            </div>
            <Img fluid={featuredImage.childImageSharp.fluid}
                        className={catStyles.featuredImage}/>
          </div>
          
        </Link>
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
      <li key={slug} className={catStyles.basement_container}>
        <Link to={slug} state={{previousPage: location.pathname}}>
          <div className={catStyles.basement}>
            <div className={catStyles.room_link_container}>
                <p className={catStyles.room_link}>
                    {title}
                </p>
            </div>
            <Img fluid={featuredImage.childImageSharp.fluid}
                        className={catStyles.featuredImage}/>
          </div>
        </Link>
      </li>
  )
}

const getSpecialRoom = (cat) => {
  if (cat == "2d") {
    return (<Bedroom></Bedroom>)
  }
  else if (cat == "3d") {
    return (<Bathroom></Bathroom>)
  }
  else if (cat == "Media") {
    return (<Kitchen></Kitchen>)
  }
  else if (cat == "Time-Based") {
    return (<Basement></Basement>)
  }
  else {
    return null;
  }
}

const Cats = ({ pageContext, data, location }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
        <div>
          <h1>{category}</h1>
          <House>
            {/* {getSpecialRoom(category)} */}
            {getRooms(edges, location)}
          </House>
          <Ground></Ground>
          {getLastRoom(edges,location)}
          {/* <Link to="/projects">All Projects</Link> */}
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