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

                            <div className={catRoomStyles.room}></div>
                            <div className={catRoomStyles.left_wall}></div>
                            <div className={catRoomStyles.right_wall}></div>
                            <div className={catRoomStyles.room_contents}></div>
                            <div className={catRoomStyles.friend}></div>

                            <div className={catRoomStyles.room_link_container}>
                                <div className={catRoomStyles.room_link_background}>
                                    <p className={catRoomStyles.room_link}>
                                        {cat.fieldValue}
                                    </p>
                                </div>
                            </div>

                            <div className={catRoomStyles.right_brick_hole}></div>
                            <div className={catRoomStyles.left_brick_hole}></div>

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

                    <div className={catRoomStyles.basement_ceiling}></div>
                    <div className={catRoomStyles.basement_friend}></div>

                    <div className={catRoomStyles.basement_link_container}>
                        <div className={catRoomStyles.room_link_background}>
                            <p className={catRoomStyles.room_link}>
                                {cat.fieldValue}
                            </p>
                        </div>
                    </div>

                    <div className={catRoomStyles.basement}>

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
                allMarkdownRemark(filter: {frontmatter: {categories: {ne: "design"}}}) {
                    group(field: frontmatter___categories) {
                      fieldValue
                    }
                }
            }
        `
    )
    return (
        <div className={catRoomStyles.container}>
            <House>
                <RecentShows location={location}></RecentShows>
                {getRooms(data.allMarkdownRemark.group, location)}
            </House>
            <Ground>
                {getLastRoom(data.allMarkdownRemark.group, location)}
            </Ground>
            {children}
            <div className={catRoomStyles.resize_icon}></div>
        </div>
    )
}