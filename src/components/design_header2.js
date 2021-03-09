import React, {useState}  from "react";
import { Link } from "gatsby";
import styles from "./design_header2.module.css"

class DesignHeader2 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Link to="/portfolio" className={styles.site_title}>
                    <h1>Joshua Kery</h1>
                </Link>
                <div className={styles.site_description}>
                    <p>
                        Josh is an experience designer and an interdisciplinary artist.
                    </p>
                </div>
                <ul>
                    <li>
                        <Link to="/resume" className={styles.menu_item}>
                            <div>Resume</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="joshuakery1@gmail.com" className={styles.menu_item}>
                            <div>Email</div>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export { DesignHeader2 };