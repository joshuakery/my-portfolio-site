import React, {useState}  from "react"
import { useStaticQuery, Link } from "gatsby"
import {Dropdown, DropdownButton} from 'react-bootstrap'
import HamBtn from "../components/hamburger_button"
import HamMenu from "../components/hamburger_menu"
import headerStyles from "./header.module.css"
import kebabCase from "lodash/kebabCase"

const ListLink = props => (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
);

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
        const small = this.state.smallerHeader;
        return (
            <div>
                <header className={`${headerStyles.header} ${small && headerStyles.smaller_header}`}>

                        <ul className={`${headerStyles.navbar} ${small && headerStyles.smaller_navbar}`}>
                            <li>
                                <Link
                                to="/about/"
                                className={`${headerStyles.navitem} ${small && headerStyles.smaller_navitem}`}
                                >
                                    about
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/cv/"
                                className={`${headerStyles.navitem} ${small && headerStyles.smaller_navitem}`}
                                >
                                    cv
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/portfolio/"
                                className={`${headerStyles.navitem} ${small && headerStyles.smaller_navitem}`}
                                >
                                    design site
                                </Link>
                            </li>
                        </ul>

                        <div className={this.state.smallerHeader ? headerStyles.smaller_ham_menu_container :headerStyles.ham_menu_container}>
                            <HamMenu open={this.state.open}>
                                <ListLink to="/about/" className={headerStyles.navlink}>
                                    about
                                </ListLink>
                                <ListLink to="/cv/" className={headerStyles.navlink}>
                                    cv
                                </ListLink>
                                <ListLink to="/portfolio/" className={headerStyles.navlink}>
                                    design site
                                </ListLink>
                            </HamMenu>
                        </div>
                        <HamBtn open={this.state.open} setOpen={this.setOpen} className={headerStyles.ham_btn}>
                        </HamBtn>

                        <Link to="/" className={`${headerStyles.title_container} ${small && headerStyles.smaller_title_container}`}>
                            <div className={headerStyles.site_title}>
                                <h1 className={headerStyles.site_title_text}>joshua kery</h1>
                            </div>
                        </Link>

                        <ul className={`${headerStyles.socialbar} ${small && headerStyles.smaller_socialbar}`}>
                            <a className={`${headerStyles.socialbar_link} ${small && headerStyles.smaller_socialbar_link}`}
                                href="https://www.instagram.com/joshuatkery/">
                                <div className={`${headerStyles.instagram} ${small && headerStyles.smaller_instagram}`}></div>
                            </a>
                        </ul>
                </header>
                { this.props.children }
            </div>
        )
    }
}

export { Header };

{/* <DropdownButton title="ABOUT" className={this.state.smallerHeader ? headerStyles.smaller_navdropdown : headerStyles.navdropdown}>
<Dropdown.Item>
    <Link to="/portfolio_about/"
          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
              About Me
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
</DropdownButton> */}

{/* <DropdownButton title="PORTFOLIO" className={this.state.smallerHeader ? headerStyles.smaller_navdropdown : headerStyles.navdropdown}>
<Dropdown.Item>
    <Link to="/portfolio/"
          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
              Design Portfolio
    </Link>
</Dropdown.Item>
<Dropdown.Item>
    <Link to="/projects/"
          className={this.state.smallerHeader ? headerStyles.smaller_navdropdown_item : headerStyles.navdropdown_item}>
              All Art
    </Link>
</Dropdown.Item>
</DropdownButton> */}

                            {/* <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://www.youtube.com/channel/UCTrtZPaGZ89PdvwrO2fjtSg">
                                <p className={this.state.smallerHeader ? headerStyles.smaller_youtube : headerStyles.youtube}></p>
                            </a>
                            <a className={this.state.smallerHeader ? headerStyles.smaller_socialbar_link : headerStyles.socialbar_link}
                                href="https://vimeo.com/user62542730">
                                <p className={this.state.smallerHeader ? headerStyles.smaller_vimeo : headerStyles.vimeo}></p>
                            </a> */}