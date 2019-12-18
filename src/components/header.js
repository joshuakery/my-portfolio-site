import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => (
    <div>
        <header>
                <Link to="/">
                    <div className={headerStyles.site_title}>
                        <h1 className={headerStyles.site_title_text}>joshua kery</h1>
                    </div>
                </Link>
                <ul className={headerStyles.navbar}>
                    <ListLink to="/" className={headerStyles.navlink}>
                        HOME
                    </ListLink>
                    <ListLink to="/cv/" className={headerStyles.navlink}>
                        CV
                    </ListLink>
                    <ListLink to="/projects/" className={headerStyles.navlink}>
                        PROJECTS
                    </ListLink>
                </ul>
                <ul className={headerStyles.socialbar}>
                    <a to="https://www.instagram.com/joshuatkery/">
                        <div className={headerStyles.instagram}></div>
                    </a>
                    <a to="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                        <p className={headerStyles.youtube}></p>
                    </a>
                    <a to="https://vimeo.com/user62542730">
                        <p className={headerStyles.vimeo}></p>
                    </a>
                </ul>
        </header>
        { children }
    </div>
)