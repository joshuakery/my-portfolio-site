import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import Image from "gatsby-dynamic-image"

//Styles
import styles from "./projects.module.css"

// Utilities
import { graphql } from "gatsby"

const PORTFOLIO_CATEGORIES = [
'design',
'teaching',
'creative-coding',
'live-shows'
];

const organizeEdges = edges => {
    const projects = {
      featured: [],
      'creative-coding': [],
      'live-shows': [],
      design: [],
      teaching: [],
  };
  edges.forEach(edge => {
    const { node } = edge;
    let { categories, tags } = node.frontmatter;
    categories = categories.filter(cat => (PORTFOLIO_CATEGORIES.includes(cat)));
    const category = categories[0]; //there is only one design category for each project
    if (tags.includes("featured")) {
      if (!projects["featured"]) projects["featured"] = [];
      projects["featured"].push(edge);
    } else {
      if (!projects[category]) projects[category] = [];
      projects[category].push(edge);
    }
  });

  return projects;
}

const getProject = edge => {
  const { node } = edge;
  const { slug } = node.fields;
  const { title, featuredImage } = node.frontmatter;
  return (
    <li key={slug} className={styles.project}>
        <Link to={slug}>
            <div className={styles.featuredImageContainer}>
              <Image node={featuredImage}
                    className={styles.featuredImage}/>
            </div>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}>{title}</h3>
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
          {category !== "design" ?
            category.toUpperCase() :
            `OTHER ${category.toUpperCase()}`
          }
        </div>
      </Link>
    </div>
  )
}

const getProjects = (category, edges) => {
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
                  sort: {order: DESC, fields: frontmatter___date},
                  filter: {frontmatter: {categories: {in: ["design","creative-coding","teaching","live-shows"]}}}
                ) {
                    edges {
                      node {
                        frontmatter {
                          categories
                          tags
                          title
                          featuredImage {
                            publicURL
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

    const organized = organizeEdges(data.allMarkdownRemark.edges);
    return (
        <div>
            { getProjects("featured", organized.featured) }
            {
              Object.keys(organized).map(category => {
                if (category === "featured") return;
                const categoryEdges = organized[category];
                const projects = getProjects(category, categoryEdges);
                return projects;
              })
            }
            {children}
        </div>
    )
}