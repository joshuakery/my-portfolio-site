import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import RecentShows from "../components/recent_shows"
import House from "../components/house"
import Ground from "../components/ground"

//Styles
import catRoomStyles from "./category_rooms.module.css"

// Utilities
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const getRooms = (group, location) => {
    let rooms = [];
    for (let i=0; i < group.length-1; i++) {
        let cat = group[i];
        rooms.push(
            <li key={cat.fieldValue} className={catRoomStyles.room_container}>
                <Link key={cat.fieldValue} to={`/projects/${kebabCase(cat.fieldValue)}/`}
                      state={{previousPage: location.pathname}}>
                    
                    <div className={catRoomStyles.brick_hole}>
                        <div className={catRoomStyles.left_brick_hole}></div>
                    </div>
                    <div className={catRoomStyles.brick_hole}>
                        <div className={catRoomStyles.right_brick_hole}></div>
                    </div>
                    
                    <div className={catRoomStyles.room}>
                        <p className={catRoomStyles.room_link}>
                            {cat.fieldValue}
                        </p>
                    </div>

                    
                </Link>
            </li>
        )
      }
    return rooms
}

const getLastRoom = (group, location) => {
    let cat = group[group.length-1];
    return (
        <li key={cat.fieldValue} className={catRoomStyles.basement_container}>
            <Link key={cat.fieldValue} to={`/projects/${kebabCase(cat.fieldValue)}/`}
                  state={{previousPage: location.pathname}}>
                <div className={catRoomStyles.basement}>
                    <p className={catRoomStyles.room_link}>
                        {cat.fieldValue}
                    </p>
                </div>
            </Link>
        </li>
    )
}

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                    title
                    }
                }
                allMarkdownRemark {
                    group(field: frontmatter___categories) {
                      fieldValue
                    }
                }
            }
        `
    )
    return (
        <div>
            <House>
                <RecentShows location={location}></RecentShows>
                {getRooms(data.allMarkdownRemark.group, location)}
            </House>
            <Ground></Ground>
            {getLastRoom(data.allMarkdownRemark.group, location)}
            {children}
        </div>
    )
}