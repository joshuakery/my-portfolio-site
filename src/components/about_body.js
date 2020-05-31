import React from "react"
import Styles from "../components/about_body.module.css"

// import { useStaticQuery } from "gatsby"
// import rehypeReact from "rehype-react"

// const renderAst = new rehypeReact({
//     createElement: React.createElement,
//     components: {

//     },
//   }).Compiler

// export default ({ children }) => {
//     const data = useStaticQuery(
//         graphql`
//             query {
//                 allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "about"}}}) {
//                     edges {
//                         node {
//                         frontmatter {
//                             title
//                         }
//                         htmlAst
//                         }
//                     }
//                 }
//             }
//         `
//     )
//     console.log(data);
//     const about = data.allMarkdownRemark.edges[0].node;
//     return (
//         <div>
//            <div className={Styles.aboutbody}>
//                {
//                     renderAst(about.htmlAst)
//                }
//                { children }
//             </div>
//         </div>
//     )
// }
class AboutBody extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className={Styles.aboutbody}>
                { this.props.children }
            </div>
        )
    }
}

// class PortfolioAboutBody extends React.Component {
//     render() {
//         return (
//             <div className={Styles.portfolioaboutbody}>
//                 { this.props.children }
//             </div>
//         )
//     }
// }

export { AboutBody }

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "about"}}}) {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//             htmlAst
//           }
//         }
//     }
//   }
// `