import React from "react"
import Layout from "../components/layout"

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

// const CatsPage = ({
//   data: {
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }) => (
//     <Layout>
//         <div>
//             <Helmet title={title} />
//             <div>
//               <h1>Projects</h1>
//               <Category_Rooms></Category_Rooms>
//             </div>
//         </div>
//     </Layout>
// )

// CatsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

// export default CatsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`