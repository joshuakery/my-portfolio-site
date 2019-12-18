import React from "react"

//Components
import { useStaticQuery, graphql, Link } from "gatsby"

//Styles
import workRoomStyles from "./works_rooms.module.css"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query($category: String) {
                allMarkdownRemark(limit: 30, sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {categories: {in: [$category]}}}) {
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
            <ul className={workRoomStyles.brick}>
                {console.log(data)}
              {data.allMarkdownRemark.edges.map(work => (
                <li key={work.slug} className={workRoomStyles.room_container}>
                    <Link to={work.slug}>
                        <div className={workRoomStyles.room}>
                            <p className={workRoomStyles.room_link}>
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