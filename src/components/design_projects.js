import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
//Styles
import styles from "./design_projects.module.css"

// Utilities
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const PORTFOLIO_CATEGORIES = [
'design',
'teaching',
'creative-coding',
'live-shows'
];

const getOneProjectForEachCategory = edges => {
  const catsSoFar = [];
  return edges.filter(edge => {
    const {node} = edge;
    let {categories} = node.frontmatter;
    categories = categories.filter(cat => (PORTFOLIO_CATEGORIES.includes(cat)));
    if (!catsSoFar.includes(categories[0])) {
      catsSoFar.push(categories[0]);
      return true;
    } else {
      return false;
    }
  })
}

const getProjects = (edges) => {
  let projects = [];
  let fEdges = getOneProjectForEachCategory(edges);
  for (let i=0; i < fEdges.length; i++) {
      let {node} = fEdges[i];
      const { slug } = node.fields;
      const { categories, title, subtitle, featuredImage } = node.frontmatter;
      categories = categories.filter(cat => (PORTFOLIO_CATEGORIES.includes(cat)));
      projects.push(
        <li key={slug} className={styles.project}>
            <div className={styles.catLabelContainer}>
              {categories.map( (cat, i) => (
                <div>
                <Link to={'/projects/' + cat}><div>{cat.toUpperCase()}</div></Link>
                {i < categories.length - 1 && (<div>and</div>)}
                </div>
              ))}
            </div>
            <Link to={slug}>
                <Img fluid={featuredImage.childImageSharp.fluid}
                            className={styles.featuredImage}/>
                <h3 className={styles.projectTitle}>{title}</h3>
            </Link>
        </li>
      )
  }
  return projects
}

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                  sort: {order: DESC, fields: frontmatter___date},
                  filter: {frontmatter: {categories: {in: ["design","creative-coding","teaching","live-shows"]}}}
                ) {
                    edges {
                      node {
                        frontmatter {
                          categories
                          title
                          featuredImage {
                            childImageSharp {
                              fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                        fields {
                          slug
                        }
                      }
                    }
                    totalCount
                }
            }
        `
    )

    return (
        <div>
            {/* <h1 className={styles.title}>Portfolio</h1> */}
            {/* <div className={styles.project1_container}>
              <h2>Kidspool</h2>
              <h3>Responsive Web App Study</h3>
                <div className={styles.project1_img}>
                </div>
            </div> */}
            <ul className={styles.projectsContainer}>
              {getProjects(data.allMarkdownRemark.edges)}
            </ul>
            {children}
        </div>
    )
}