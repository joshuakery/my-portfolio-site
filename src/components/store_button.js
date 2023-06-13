import React from "react"
import { Link } from "gatsby"

import * as styles from "./store_button.module.css"

const StoreButton = () => {
    return (
            <div className={styles.container}>
                <a href={"https://joshua-kery.helcim.app/quick-order"} target="_blank">

                    <div className={styles.image_container}></div>

                </a>
            </div>

    );
};

export default StoreButton;