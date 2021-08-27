import React from "react";
import Styles from "./footer.module.css"
import SocialBar from './socialbar';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className={Styles.footer}>
                    <div className={Styles.bioInfo}>
                        <h1>Joshua Kery</h1> 
                        <p>Experience Designer</p> 
                        <p>Interdisciplinary Artist</p>
                    </div>

                    <div className={Styles.contactInfo}>
                        <h2>Contact Me:</h2>
                        <div className={`${Styles.socialbar_container}`}>
                            <SocialBar small={true} />
                        </div>
                        
                    </div>
                </footer>
            </div>
        )
    }
}

export { Footer };