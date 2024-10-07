import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import MyGatsbyImage from "../utility/my-gatsby-image"
// import Image from "gatsby-dynamic-image"

//Styles
import * as styles from "./projects.module.css"

// Utilities
import { graphql } from "gatsby"

const PORTFOLIO_CATS_ORDER = [
  "ux-design",
  "software-development",
  "ux-research"
]

const sortEdges = edges => {

  // define the order here
  const projects = {};

  PORTFOLIO_CATS_ORDER.forEach(cat => {
    projects[cat] = [];
  });

  edges.forEach(edge => {

    const { node } = edge;
    let { categories, tags } = node.frontmatter;

    if (tags.includes("featured")) {
      if (!projects["featured"]) projects["featured"] = [];
      projects["featured"].push(edge);

    } else {
      const category = categories[0]; // assume the first category is priority
      if (!projects[category]) projects[category] = [];
      projects[category].push(edge);
    }

  });

  PORTFOLIO_CATS_ORDER.forEach(cat => {
    if (projects[cat] && projects[cat].length == 0) {
      delete projects[cat];
    }
  });

  return projects;
}

const getProject = edge => {
  const { node } = edge;
  const { slug } = node.fields;
  const { title, featuredImage, categories } = node.frontmatter;
  return (
    <li key={slug} className={styles.project}>
        <Link to={slug}>
            <div className={styles.featuredImageContainer}>
              <MyGatsbyImage
                node={featuredImage}
                alt={title}
                className={styles.featuredImage}
              />
            </div>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}>{title}</h3>
              <div className={styles.projectCategoriesContainer}>
              {
                categories.map(cat => (<div className={styles.projectCategory}><div>{cat.toUpperCase()}</div></div>))
              }
              </div>
            </div>
        </Link>
    </li>
  )
}

const getCatLabel = category => {

  if (category === "featured") return;

  return (
    <div className={styles.catLabelContainer}>
      <Link to={'/projects/' + category}>
        <div>
          {category.toUpperCase()}
        </div>
      </Link>
    </div>
  )
}

const getProjectsElement = (category, edges) => {

  const projects = [];

  edges.forEach(edge => {
    const project = getProject(edge);
    projects.push(project);
  });

  return (
    <div key={category}>
        { getCatLabel(category) }
        <ul className={`${styles.projectsContainer} ${styles[category]}`} >
          {projects}
        </ul>
    </div>
  );
}

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                  filter: {frontmatter: {categories: {in: ["ux-design", "ux-research", "software-development", "teaching", "illustration", "fabrication"]}}}
                ) {
                    edges {
                      node {
                        frontmatter {
                          categories
                          tags
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

    const sortedEdges = sortEdges(data.allMarkdownRemark.edges);

    return (
        <div>
            { sortedEdges["featured"] ? getProjectsElement("featured", sortedEdges.featured) : (<div></div>) }
            {
              Object.keys(sortedEdges).map(category => {

                if (category === "featured") return;

                const categoryEdges = sortedEdges[category];
                const projects = getProjectsElement(category, categoryEdges);
                return projects;

              })
            }
            {children}
        </div>
    )
}