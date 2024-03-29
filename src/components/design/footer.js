import React from "react";
import * as styles from "./footer.module.css"
import SocialBar from './socialbar';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className={styles.footer}>
                    <div className={styles.bioInfo}>
                        <h1>Joshua Kery</h1> 
                        <p>Experience Designer</p> 
                        <p>Interdisciplinary Artist</p>
                    </div>

                    <div className={styles.contactInfo}>
                        <h2>Contact Me:</h2>
                        <div className={`${styles.socialbar_container}`}>
                            <SocialBar small={true} />
                        </div>
                        
                    </div>
                </footer>
            </div>
        )
    }
}

export { Footer };