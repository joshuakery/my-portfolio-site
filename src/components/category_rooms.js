import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
import RecentShows from "../components/recent_shows"
import House from "../components/house"
import Room from "../components/room"
import {HomePageBasement} from "../components/room_basement"
import Ground from "../components/ground"
//Styles
import catRoomStyles from "./category_rooms.module.css"

// Utilities
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const getRooms = (group, location) => {
    let rooms = [];
    for (let i=group.length-1; i > 0; i--) {
        let cat = group[i];

        let room = (

            <li key={cat.fieldValue} className={catRoomStyles.room_container}>
                <Room title={cat.fieldValue} slug={`/projects/${kebabCase(cat.fieldValue)}/`}>

                        <div className={catRoomStyles.room}>
                            <div className={catRoomStyles.back_wall}></div>
                            <div className={catRoomStyles.left_wall}></div>
                            <div className={catRoomStyles.right_wall}></div>
                            <div className={catRoomStyles.room_contents}></div>
                            <div className={catRoomStyles.room_contents_right}></div>
                            <div className={catRoomStyles.room_contents_left}></div>
                            
                            <div className={catRoomStyles.friend}></div>
                        </div>

                </Room>
            </li>

        );

        rooms.push(room);
      }
    return rooms
}

const getLastRoom = (group, location) => {
    let cat = group[0];
    return (
        <li key={cat.fieldValue} className={catRoomStyles.basement_container}>
            <HomePageBasement title={cat.fieldValue} slug={`/projects/${kebabCase(cat.fieldValue)}/`}>

                <div className={catRoomStyles.basement}>

                    <div className={catRoomStyles.basement_ceiling}></div>
                    <div className={catRoomStyles.basement_friend}></div>
                    <div className={catRoomStyles.basement_back_wall}></div>

                </div>
            
            </HomePageBasement>
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

    //hardcode which cats to include
    let group = data.allMarkdownRemark.group;
    // let toInclude = ['2d','3d','games','interactive','time-based','uxui'];
    const toInclude = ['2d','3d','interactive','time-based'];
    group = group.filter((member) => (toInclude.includes(member.fieldValue)));

    return (
        <div className={catRoomStyles.container}>
            <House>
                <RecentShows location={location}></RecentShows>
                {getRooms(group, location)}
            </House>
            <Ground>
                {getLastRoom(group, location)}
            </Ground>
            {children}
            <div className={catRoomStyles.resize_icon}></div>
        </div>
    )
}