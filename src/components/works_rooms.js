import React from "react"

//Components
import { useStaticQuery, graphql, Link } from "gatsby"

//Styles
import * as styles from "./works_rooms.module.css"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query($category: String) {
                allMarkdownRemark(
                  limit: 30,
                  sort: { frontmatter: { date: DESC } },
                  filter: {frontmatter: {categories: {in: [$category]}}}
                )
                {
                    edges {
                      node {
                        frontmatter {
                          title
                        }
                        fields {
                          slug
                        }
                      }
                    }
                  }
            }
        `
    )
    return (
        <div>
            <ul className={styles.brick}>
                {console.log(data)}
              {data.allMarkdownRemark.edges.map(work => (
                <li key={work.slug} className={styles.room_container}>
                    <Link to={work.slug}>
                        <div className={styles.room}>
                            <p className={styles.room_link}>
                                {work.frontmatter.title}
                            </p>
                        </div>
                    </Link>
                </li>
              ))}
            </ul>
            {children}
        </div>
    )
}