import React from "react"
import { Link } from "gatsby"
import RoomText from "../components/room_link"

import styles from "./room.module.css"

const Room = (props) => {
    const { children, title, slug } = props;
    return (

            <Link to={slug} className={styles.room}>

                <div className={styles.children_container}>
                    {children}
                </div>

                <RoomText title={title}></RoomText>

                <div className={styles.left_brick_hole}></div>
                <div className={styles.right_brick_hole}></div>

            </Link>

    );
};

export default Room;