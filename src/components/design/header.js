import React from "react"
import { Link } from "gatsby"
import HamBtn from "./ham_btn"
import HamMenu from "./ham_menu"
import * as styles from "./header.module.css"
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
    <header >

    <div className={`${styles.header} ${small && styles.smaller_header}`}>

        <ul className={`${styles.navbar} ${small && styles.smaller_navbar}`}>
            <li>
                <Link
                to="/resume/"
                >
                    resume
                </Link>
            </li>
            <li>
                <Link
                to="/"
                >
                    art site
                </Link> 
            </li>
        </ul>

        <Link
            to="/portfolio"
            className={`${styles.title_container} ${small && styles.smaller_title_container}`}
        >
            <div>
                <h1 className={styles.site_title_text}>joshua kery</h1>
            </div>
        </Link>

        <div className={`${styles.socialbar_container} ${small && styles.smaller}`}>
            <SocialBar small={small} />
        </div>

        <div className={`${styles.ham_menu_container} ${small && styles.smaller_ham_menu_container}`}>
            <HamMenu open={this.state.open}>
                <ListLink to="/portfolio/">
                    home
                </ListLink>
                <ListLink to="/resume/">
                    resume
                </ListLink>
                <ListLink to="/">
                    art site
                </ListLink>
                <div className={styles.linebreak}></div>
                <div className={`${styles.ham_socialbar_container}`}>
                    <SocialBar small={small} />
                </div>
            </HamMenu>
            </div>

        <div className={`${styles.ham_btn} ${small && styles.smaller}`}>
            <HamBtn open={this.state.open} setOpen={this.setOpen} />
        </div>

    </div>

    { this.props.children }
    
    </header>
    

)
}
}

export { DesignHeader };


