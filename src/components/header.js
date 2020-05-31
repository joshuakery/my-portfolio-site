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

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            smallerHeader: false
        }
        this.setOpen = this.setOpen.bind(this);
        this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 50;

        if (distanceY > shrinkOn) {
            this.setState(state => ({
                smallerHeader: true
            }))
        } else {
            this.setState(state => ({
                smallerHeader: false
            }))
        }
    }

    setOpen() {
        this.setState(state => ({
            open: !this.state.open
        }));
    }

    render() {
        return (
            <div>
                <header className={this.state.smallerHeader ? headerStyles.smaller_header : headerStyles.larger_header}>

                        <ul className={this.state.smallerHeader ? headerStyles.smaller_navbar : headerStyles.navbar}>
                            {/* <ListLink to="/" className={headerStyles.navlink}>
                                HOME
                            </ListLink> */}
                            {/* <ListLink to="/cv/" className={headerStyles.navlink}>
                                CV
                            </ListLink> */}
                            <ListLink to="/about/"
                                className={this.state.smallerHeader ? headerStyles.smaller_navlink : headerStyles.navlink}>
                                ABOUT
                            </ListLink>
                            <ListLink to="/projects/"
                                className={this.state.smallerHeader ? headerStyles.smaller_navlink : headerStyles.navlink}>
                                PROJECTS
                            </ListLink>
                        </ul>
                        
                        <div className={headerStyles.ham_menu_container}>
                            <HamMenu open={this.state.open}>
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
                        <HamBtn open={this.state.open} setOpen={this.setOpen}>
                        </HamBtn>

                        <Link to="/" className={this.state.smallerHeader ? headerStyles.smaller_title_container : headerStyles.title_container}>
                            <div className={this.state.smallerHeader ? headerStyles.smaller_site_title : headerStyles.site_title}>
                                <h1 className={headerStyles.site_title_text}>joshua kery</h1>
                            </div>
                        </Link>

                        <ul className={this.state.smallerHeader ? headerStyles.smaller_socialbar : headerStyles.socialbar}>
                            <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://www.instagram.com/joshuatkery/">
                                <div className={headerStyles.instagram}></div>
                            </a>
                            <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                                <p className={headerStyles.youtube}></p>
                            </a>
                            <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://vimeo.com/user62542730">
                                <p className={headerStyles.vimeo}></p>
                            </a>
                        </ul>
                </header>
                { this.props.children }
            </div>
        )
    }
}

export { Header };