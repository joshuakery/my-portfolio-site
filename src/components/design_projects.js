import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
//Styles
import styles from "./design_projects.module.css"

// Utilities
import { graphql } from "gatsby"

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

const putOneProjectFromEachCategoryFirst = edges => {
  const catsSoFar = [];
  const first = [];
  const after = [];
  edges.forEach(edge => {
    const {node} = edge;
    let {categories} = node.frontmatter;
    categories = categories.filter(cat => (PORTFOLIO_CATEGORIES.includes(cat)));
    if (!catsSoFar.includes(categories[0])) {
      catsSoFar.push(categories[0]);
      first.push(edge);
    } else {
      after.push(edge);
    }
  });
  return [...first, ...after];
}

const getProjects = (edges) => {
  let projects = [];
  // let fEdges = getOneProjectForEachCategory(edges);
  let fEdges = putOneProjectFromEachCategoryFirst(edges);
  for (let i=0; i < fEdges.length; i++) {
      let {node} = fEdges[i];
      const { slug } = node.fields;
      const { categories, title, subtitle, featuredImage } = node.frontmatter;
      const nCategories = categories.filter(cat => (PORTFOLIO_CATEGORIES.includes(cat)));
      projects.push(
        <li key={slug} className={styles.project}>
            <Link to={slug}>
                <Img fluid={featuredImage.childImageSharp.fluid}
                            className={styles.featuredImage}/>
                <h3 className={styles.projectTitle}>{title}</h3>
            </Link>
            <div className={styles.catLabelContainer}>
              {nCategories.map( (cat, i) => (
                <div>
                <Link to={'/projects/' + cat}><div>{cat.toUpperCase()}</div></Link>
                {i < nCategories.length - 1 && (<div>and</div>)}
                </div>
              ))}
            </div>
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
            <ul className={styles.projectsContainer}>
              {getProjects(data.allMarkdownRemark.edges)}
            </ul>
            {children}
        </div>
    )
}