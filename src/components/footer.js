import React from "react";
import { Link } from "gatsby"
import footerStyles from "./footer.module.css"

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className={this.props.bg == 'dark' ? footerStyles.darkFooter : footerStyles.lightFooter}>
                    {/* <div className={footerStyles.siteMap}>
                        <Link to="/" className={this.props.bg == 'dark' ? footerStyles.darkMapTitle : footerStyles.mapTitle}>
                            joshuakery.com
                        </Link>
                        <ul className={this.props.bg == 'dark' ? footerStyles.darkProjectsLinks :  footerStyles.projectsLinks}>
                            <div>
                                <Link to="/projects">All Projects</Link>
                                <br></br>
                                <Link to="/projects/uxui">UX/UI</Link>
                                <br></br>
                                <Link to="/projects/2-d">2D</Link>
                                <br></br>
                                <Link to="/projects/3-d">3D</Link>
                                <br></br>
                                <Link to="/projects/interactive">Interactive</Link>
                                <br></br>
                                <Link to="/projects/time-based">Time-Based</Link>
                                <br></br>
                                <Link to="/projects/games">Games</Link>
                            </div>
                        </ul>
                        <ul className={this.props.bg == 'dark' ? footerStyles.darkMainLinks : footerStyles.mainLinks}>
                            <div>
                                <Link to="/about">My Design Work</Link>
                                <br></br>
                                <Link to="/about">Artist Statement</Link>
                                <br></br>
                                <Link to="/resume">Resume</Link>
                                <br></br>
                                <Link to="/cv">CV</Link>
                            </div>

                        </ul>


                    </div> */}

                    <div className={this.props.bg == 'dark' ? footerStyles.darkBioInfo : footerStyles.bioInfo}>
                        <h1>Joshua Kery</h1> 
                        <p>Experience Designer</p> 
                        <p>Interdisciplinary Artist</p>
                    </div>

                    <div className={footerStyles.contactInfo}>
                        <h2>Contact Me:</h2>
                        <p><a href="mailto:joshuakery1@gmail.com">joshuakery1@gmail.com</a></p>
                        <ul className={footerStyles.socialbar}>
                            <a className={footerStyles.socialbar_link}
                                href="https://www.instagram.com/joshuatkery/">
                                <div className={this.props.bg == 'dark' ? footerStyles.instagram : footerStyles.light_instagram}></div>
                            </a>
                            {/* <a className={footerStyles.socialbar_link}
                                href="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                                <p className={this.props.bg == 'dark' ? footerStyles.youtube : footerStyles.light_youtube}></p>
                            </a>
                            <a className={footerStyles.socialbar_link}
                                href="https://vimeo.com/user62542730">
                                <p className={this.props.bg == 'dark' ? footerStyles.vimeo : footerStyles.light_vimeo}></p>
                            </a> */}
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export { Footer };