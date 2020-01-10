import React, {useState}  from "react"
import { Link } from "gatsby"
import HamBtn from "../components/hamburger_button"
import HamMenu from "../components/hamburger_menu"
import headerStyles from "./header.module.css"

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header>

                    <ul className={headerStyles.navbar}>
                        {/* <ListLink to="/" className={headerStyles.navlink}>
                            HOME
                        </ListLink> */}
                        <ListLink to="/cv/" className={headerStyles.navlink}>
                            CV
                        </ListLink>
                        <ListLink to="/projects/" className={headerStyles.navlink}>
                            PROJECTS
                        </ListLink>
                    </ul>
                    
                    <div className={headerStyles.ham_menu_container}>
                        <HamMenu open={open}>
                            <ListLink to="/" className={headerStyles.navlink}>
                                HOME
                            </ListLink>
                            <ListLink to="/cv/" className={headerStyles.navlink}>
                                CV
                            </ListLink>
                            <ListLink to="/projects/" className={headerStyles.navlink}>
                                PROJECTS
                            </ListLink>
                            <a to="https://www.instagram.com/joshuatkery/">
                                <div className={headerStyles.ham_instagram}>
                                </div>
                            </a>
                            <a to="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                                <p className={headerStyles.ham_youtube}></p>
                            </a>
                            <a to="https://vimeo.com/user62542730">
                                <p className={headerStyles.ham_vimeo}></p>
                            </a>
                        </HamMenu>
                    </div>
                    <HamBtn open={open} setOpen={setOpen}></HamBtn>

                    <Link to="/">
                        <div className={headerStyles.site_title}>
                            <h1 className={headerStyles.site_title_text}>joshua kery</h1>
                        </div>
                    </Link>

                    <ul className={headerStyles.socialbar}>
                        <a href="https://www.instagram.com/joshuatkery/">
                            <div className={headerStyles.instagram}></div>
                        </a>
                        <a href="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                            <p className={headerStyles.youtube}></p>
                        </a>
                        <a href="https://vimeo.com/user62542730">
                            <p className={headerStyles.vimeo}></p>
                        </a>
                    </ul>
            </header>
            { children }
        </div>
    )}