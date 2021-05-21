import React from 'react';
import styles from "./socialbar.module.css"

const SocialBar = props => {
    const { small } = props;
    return (
        <ul className={`${styles.socialbar}`}>
            <li>
                <a href="https://www.instagram.com/joshuatkery/" target="_blank">
                    <div className={`${styles.sociallink} ${styles.instagram} ${small && styles.small}`}></div>
                </a>
            </li>
            <li>
                <a href="https://github.com/joshuakery" target="_blank">
                    <div className={`${styles.sociallink} ${styles.github} ${small && styles.small}`}></div>
                </a>
            </li>
            <li>
                <a href="mailto:joshuakery1@gmail.com" target="_blank">
                    <div className={`${styles.sociallink} ${styles.mail} ${small && styles.small}`}></div>
                </a>
            </li>
        </ul>
    );
}

export default SocialBar;