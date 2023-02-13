import React from "react"

import * as styles from "./room_link.module.css"

const RoomText = (props) => {
    return (
        <div className={styles.room_text_container}>
            <div className={styles.room_text_background}>
                <p className={styles.room_text}>
                    {props.title}
                </p>
            </div>
        </div>
    );
};

export default RoomText;