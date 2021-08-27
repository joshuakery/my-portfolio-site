import React, {useState}  from "react"
import { Link } from "gatsby"
import HamBtn from "./ham_btn"
import HamMenu from "./ham_menu"
import headerStyles from "./header.module.css"
import SocialBar from "./socialbar";

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


