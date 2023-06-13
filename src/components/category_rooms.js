import React from "react"

//Components
import { useStaticQuery, Link } from "gatsby"
// import RecentShows from "../components/recent_shows"
import StoreButton from "./store_button"
import House from "../components/house"
import Room from "../components/room"
import {HomePageBasement} from "../components/room_basement"
import Ground from "../components/ground"
//Styles
import * as styles from "./category_rooms.module.css"

// Utilities
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const getRooms = (group, location) => {
    let rooms = [];
    for (let i=group.length-1; i > 0; i--) {
        let cat = group[i];

        let room = (

            <li key={cat.fieldValue} className={styles.room_container}>
                <Room title={cat.fieldValue} slug={`/projects/${kebabCase(cat.fieldValue)}/`}>

                        <div className={styles.room}>
                            <div className={styles.back_wall}></div>
                            <div className={styles.left_wall}></div>
                            <div className={styles.right_wall}></div>
                            <div className={styles.room_contents}></div>
                            <div className={styles.room_contents_right}></div>
                            <div className={styles.room_contents_left}></div>
                            
                            <div className={styles.friend}></div>
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
        <li key={cat.fieldValue} className={styles.basement_container}>
            <HomePageBasement title={cat.fieldValue} slug={`/projects/${kebabCase(cat.fieldValue)}/`}>

                <div className={styles.basement}>

                    <div className={styles.basement_ceiling}></div>
                    <div className={styles.basement_friend}></div>
                    <div className={styles.basement_back_wall}></div>

                </div>
            
            </HomePageBasement>
        </li>
    )
}

export default ({ children, location }) => {
    const data = useStaticQuery(
        graphql`
            query
            {
                site
                {
                    siteMetadata
                    {
                        title
                    }
                }
                allMarkdownRemark
                {
                    group
                    (
                        field:
                        {
                            frontmatter:
                            {
                                categories: SELECT
                            }
                        }
                    )
                    {
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
        <div className={styles.container}>
            <House>
                <StoreButton></StoreButton>
                {getRooms(group, location)}
            </House>
            <Ground>
                {getLastRoom(group, location)}
            </Ground>
            {children}
            <div className={styles.resize_icon}></div>
        </div>
    )
}