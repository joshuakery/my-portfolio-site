// import React from "react"
// import { graphql, Link } from "gatsby"
// import SEO from "../components/seo"
// import { Layout } from "../components/layout"
// import House from "../components/house"
// import Ground from "../components/ground"
// import Scaffolding from "../components/scaffolding"
// import Img from "gatsby-image"

// import sketchStyles from '../templates/sketch-post.module.css'

// export default ({ data, location }) => {
//   const post = data.post;
//   const sketchbook = data.sketchbook;
//   const main = data.main;
//   let featuredImgFluid = main.frontmatter.featuredImage.childImageSharp.fluid;
//   return (
//     <Layout>
//       <SEO title={post.frontmatter.title} description={post.excerpt} />
//       {location.state && location.state.previousPage &&
//         <Link to={location.state.previousPage}>
//           <div className={sketchStyles.back_container}>
//             <div className={sketchStyles.back_sign}>
//               <p className={sketchStyles.back_btn}>
//                 BACK  
//               </p>
//             </div>
//           </div>
//         </Link>
//       }
//       <House scaffolding={true}>
//         <h1>{post.frontmatter.title}</h1>
//             <div dangerouslySetInnerHTML={{ __html: post.html }} />
//             <div>
//                   <Img fluid={featuredImgFluid} className={sketchStyles.featuredImage}/>
//                   <div dangerouslySetInnerHTML={{ __html: main.html }} className={sketchStyles.innerHTML}/>
//             </div>
//       </House>
//       <Scaffolding>
//                 <h1 className={sketchStyles.sketchTitle}>{sketchbook.frontmatter.title}</h1>
//                 <div dangerouslySetInnerHTML={{ __html: sketchbook.html }} className={sketchStyles.innerHTML}/>
//       </Scaffolding>
//       <Ground></Ground>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($slug: String!, $sketchbookcontent_path: String!, $maincontent_path: String!) {
//     post: markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         sketchbookcontent {
//             name
//         }
//         maincontent {
//             name
//         }
//       }
//       excerpt
//     }
//     sketchbook: markdownRemark(fileAbsolutePath: { eq: $sketchbookcontent_path }) {
//         html
//         frontmatter {
//             title
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//         }
//         excerpt
//     }
//     main: markdownRemark(fileAbsolutePath: { eq: $maincontent_path }) {
//         html
//         frontmatter {
//             title
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//         }
//         excerpt
//     }
//   }
// `