import React, {useState}  from "react"
import { Link } from "gatsby"
import {Dropdown, DropdownButton} from 'react-bootstrap'
import HamBtn from "../components/design_ham_btn"
import HamMenu from "../components/design_ham_menu"
import headerStyles from "./design_header.module.css"
import SocialBar from "../components/socialbar";

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
    const shrinkOn = 5;

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
    <header className={`${headerStyles.header} ${small && headerStyles.smaller_header}`}>

    <ul className={`${headerStyles.navbar} ${small && headerStyles.smaller_navbar}`}>
        <li>
            <Link
            to="/resume/"
            className={`${headerStyles.navitem} ${small && headerStyles.smaller_navitem}`}
            >
                resume
            </Link>
        </li>
        <li>
            <Link
            to="/"
            className={`${headerStyles.navitem} ${small && headerStyles.smaller_navitem}`}
            >
                art site
            </Link> 
        </li>
    </ul>

    <Link
    to="/portfolio"
    className={`${headerStyles.title_container} ${small && headerStyles.smaller_title_container}`}>
        <div className={headerStyles.site_title}>
            <h1 className={headerStyles.site_title_text}>joshua kery</h1>
        </div>
    </Link>

    <div className={`${headerStyles.socialbar_container}`}>
        <SocialBar small={small} />
    </div>

    <div className={`${headerStyles.ham_menu_container} ${small && headerStyles.smaller_ham_menu_container}`}>
    <HamMenu open={this.state.open}>
        <ListLink to="/portfolio/" className={headerStyles.navlink}>
            home
        </ListLink>
        <ListLink to="/resume/" className={headerStyles.navlink}>
            resume
        </ListLink>
        <ListLink to="/" className={headerStyles.navlink}>
            art site
        </ListLink>
        <div className={headerStyles.linebreak}></div>
        <div className={`${headerStyles.ham_socialbar_container}`}>
            <SocialBar small={small} />
        </div>
    </HamMenu>
    </div>
    <HamBtn open={this.state.open} setOpen={this.setOpen} className={headerStyles.ham_btn}>
    </HamBtn>


    { this.props.children }
    
    </header>
    

)
}
}

export { DesignHeader };

{/* <DropdownButton
            title="ABOUT"
            className={this.state.smallerHeader ?
                headerStyles.smaller_navdropdown :
                headerStyles.navdropdown}
        >
            <Dropdown.Item>
                <Link to="/portfolio_about/"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            About Me
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/resume/"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            Resume
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/portfolio_cv/"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            CV
                </Link>
            </Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="WORK"
                        className={this.state.smallerHeader ?
                            headerStyles.smaller_navdropdown :
                            headerStyles.navdropdown}
        >
            <Dropdown.Item>
                <Link to="/projects/design"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            Design
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/projects/teaching"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            Teaching
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/projects/creative-coding"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            Creative Coding
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/projects/live-shows"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            Live Shows
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/"
                      className={this.state.smallerHeader ?
                        headerStyles.smaller_navdropdown_item :
                        headerStyles.navdropdown_item}
                >
                            Art
                </Link>
            </Dropdown.Item>
        </DropdownButton> */}


    {/* <ul className={this.state.smallerHeader ? headerStyles.smaller_socialbar : headerStyles.socialbar}>
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
    </ul> */}

//     <ListLink to="/portfolio_about/" className={headerStyles.navlink}>
//     ABOUT ME
// </ListLink>
//     <ListLink to="/portfolio_cv/" className={headerStyles.navlink}>
//     CV
// </ListLink>
// <div className={headerStyles.linebreak}></div>
// <ListLink to="/projects/design" className={headerStyles.navlink}>
//     DESIGN
// </ListLink>
// <ListLink to="/projects/teaching" className={headerStyles.navlink}>
//     TEACHING
// </ListLink>
// <ListLink to="/projects/creative-coding" className={headerStyles.navlink}>
//     CREATIVE CODING
// </ListLink>
// <ListLink to="/projects/live-shows" className={headerStyles.navlink}>
//     LIVE SHOWS
// </ListLink>
// <ListLink to="/" className={headerStyles.navlink}>
//     ART
// </ListLink>

