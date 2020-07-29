import React, {useState}  from "react"
import { Link } from "gatsby"
import {Dropdown, DropdownButton} from 'react-bootstrap'
import HamBtn from "../components/design_ham_btn"
import HamMenu from "../components/design_ham_menu"
import headerStyles from "./design_header.module.css"

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
)

class DesignHeader extends React.Component {

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
                            <DropdownButton title="ABOUT" className={this.state.smallerHeader ? headerStyles.smaller_navdropdown : headerStyles.navdropdown}>
                                <Dropdown.Item>
                                    <Link to="/portfolio_about/"
                                          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
                                                My Design Work
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/about/"
                                          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
                                              Artist Statement
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/resume/"
                                          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
                                              Resume
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/portfolio_cv/"
                                          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
                                              CV
                                    </Link>
                                </Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton title="WORKS" className={this.state.smallerHeader ? headerStyles.smaller_navdropdown : headerStyles.navdropdown}>
                                <Dropdown.Item>
                                    <Link to="/portfolio/"
                                          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
                                              UX/UI Projects
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/projects/"
                                          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
                                              All Projects
                                    </Link>
                                </Dropdown.Item>
                            </DropdownButton>
                        </ul>

                        <div className={this.state.smallerHeader ? headerStyles.smaller_ham_menu_container :headerStyles.ham_menu_container}>
                            <HamMenu open={this.state.open}>
                                <ListLink to="/portfolio_about/" className={headerStyles.navlink}>
                                    ABOUT DESIGN
                                </ListLink>
                                <ListLink to="/about/" className={headerStyles.navlink}>
                                    ARTIST STATEMENT
                                </ListLink>
                                <ListLink to="/resume/" className={headerStyles.navlink}>
                                    RESUME
                                </ListLink>
                                <ListLink to="/portfolio_cv/" className={headerStyles.navlink}>
                                    CV
                                </ListLink>
                                <ListLink to="/portfolio/" className={headerStyles.navlink}>
                                    UX/UI PROJECTS
                                </ListLink>
                                <ListLink to="/projects/" className={headerStyles.navlink}>
                                    ALL PROJECTS
                                </ListLink>
                                {/* <a to="https://www.instagram.com/joshuatkery/">
                                    <div className={headerStyles.ham_instagram}>
                                    </div>
                                </a>
                                <a to="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                                    <p className={headerStyles.ham_youtube}></p>
                                </a>
                                <a to="https://vimeo.com/user62542730">
                                    <p className={headerStyles.ham_vimeo}></p>
                                </a> */}
                            </HamMenu>
                        </div>
                        <HamBtn open={this.state.open} setOpen={this.setOpen} className={headerStyles.ham_btn}>
                        </HamBtn>

                        <Link to="/" className={this.state.smallerHeader ? headerStyles.smaller_title_container : headerStyles.title_container}>
                            <div className={headerStyles.site_title}>
                                <h1 className={headerStyles.site_title_text}>joshua kery</h1>
                            </div>
                        </Link>

                        <ul className={this.state.smallerHeader ? headerStyles.smaller_socialbar : headerStyles.socialbar}>
                            <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://www.instagram.com/joshuatkery/">
                                <div className={this.state.smallerHeader ? headerStyles.smaller_instagram : headerStyles.instagram}></div>
                            </a>
                            <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                                <p className={this.state.smallerHeader ? headerStyles.smaller_youtube : headerStyles.youtube}></p>
                            </a>
                            <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://vimeo.com/user62542730">
                                <p className={this.state.smallerHeader ? headerStyles.smaller_vimeo : headerStyles.vimeo}></p>
                            </a>
                        </ul>
                </header>
                { this.props.children }
            </div>
        )
    }
}

export { DesignHeader };