import React from "react"
import PropTypes from "prop-types"
import { Layout } from "../components/layout"
import House from "../components/house"
import Room from "../components/room"
import Basement from "../components/room_basement"
import Ground from "../components/ground"
import { Link, graphql } from "gatsby"
import catStyles from "../templates/category.module.css"
import Img from "gatsby-image"
// import {Bathroom, Bedroom, Kitchen, Basement} from "../components/specialRoom"

const getRooms = (edges, location) => {
  // console.log(location);
  let rooms = [];
  for (let i=0; i < edges.length-1; i++) {
    let {node} = edges[i];
    const { slug } = node.fields
    const { title, featuredImage } = node.frontmatter
    rooms.push (
        <li key={slug} className={catStyles.room_container}>
          <Room title={title} slug={slug}>
            <Img fluid={featuredImage.childImageSharp.fluid}
                  className={catStyles.featuredImage}/>
          </Room>
        </li>
        // 
        //   <Link to={slug} state={{previousPage: location.pathname}}>

        //     <Img fluid={featuredImage.childImageSharp.fluid}
        //                     className={catStyles.featuredImage}/>

        //     <div className={catStyles.room_link_container}>
        //         <div className={catStyles.room_link_background}>
        //             <p className={catStyles.room_link}>
        //                 {title}
        //             </p>
        //         </div>
        //     </div>

        //     <div className={catStyles.left_brick_hole}></div>
        //     <div className={catStyles.right_brick_hole}></div>

        //   </Link>
        // </li>
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
        <Basement title={title} slug={slug}>
          <Img fluid={featuredImage.childImageSharp.fluid}
               className={catStyles.featuredImage}/>
        </Basement>
        {/* <Link to={slug} state={{previousPage: location.pathname}}>

          <Img fluid={featuredImage.childImageSharp.fluid}
                          className={catStyles.featuredImage}/>

          <div className={catStyles.room_link_container}>
              <div className={catStyles.room_link_background}>
                  <p className={catStyles.room_link}>
                      {title}
                  </p>
              </div>
          </div>

        </Link> */}
      </li>
  )
}

// const getSpecialRoom = (cat) => {
//   if (cat == "2d") {
//     return (<Bedroom></Bedroom>)
//   }
//   else if (cat == "3d") {
//     return (<Bathroom></Bathroom>)
//   }
//   else if (cat == "Media") {
//     return (<Kitchen></Kitchen>)
//   }
//   else if (cat == "Time-Based") {
//     return (<Basement></Basement>)
//   }
//   else {
//     return null;
//   }
// }

//SAVING THIS BECAUSE THIS IS THE OLD CATS, FOR THE OLD ART WEBSITE
const Cats = ({ pageContext, data, location }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
        <h1>{category}</h1>
        <div className={catStyles.container}>
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

const getProjects = (edges) => {
  let projects = [];
  for (let i=0; i < edges.length; i++) {
      let {node} = edges[i];
      const { slug } = node.fields;
      const { title, featuredImage } = node.frontmatter;
      projects.push(
        <li key={slug}>
            <Link to={slug}>
                <Img fluid={featuredImage.childImageSharp.fluid}/>
                <h3>{title}</h3>
            </Link>
        </li>
      )
  }
  return projects
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