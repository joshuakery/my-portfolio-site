import React from "react"
import { Link } from "gatsby"
import HamBtn from "../components/hamburger_button"
import HamMenu from "../components/hamburger_menu"
import * as styles from "./header.module.css"

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
            <div className={`${styles.header_container}`}>
                <header className={`${styles.header} ${small && styles.smaller_header}`}>

                        <ul className={`${styles.navbar} ${small && styles.smaller_navbar}`}>
                            <li>
                                <Link
                                to="/about/"
                                >
                                    about
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/cv/"
                                >
                                    cv
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/portfolio/"
                                >
                                    design site
                                </Link>
                            </li>
                        </ul>

                        <div className={this.state.smallerHeader ? styles.smaller_ham_menu_container :styles.ham_menu_container}>
                            <HamMenu open={this.state.open}>
                                <ListLink to="/about/">
                                    about
                                </ListLink>
                                <ListLink to="/cv/">
                                    cv
                                </ListLink>
                                <ListLink to="/portfolio/">
                                    design site
                                </ListLink>
                                <li>
                                    <a
                                        href={"https://joshua-kery.helcim.app/quick-order"}
                                        target="_blank"
                                    >
                                        store
                                    </a>
                                </li>
                            </HamMenu>
                        </div>
                        <HamBtn open={this.state.open} setOpen={this.setOpen} className={styles.ham_btn}>
                        </HamBtn>

                        <Link to="/" className={`${styles.title_container} ${small && styles.smaller_title_container}`}>
                            <div>
                                <h1 className={styles.site_title_text}>joshua kery</h1>
                            </div>
                        </Link>

                        <ul className={`${styles.socialbar} ${small && styles.smaller_socialbar}`}>
                            <li className={`${styles.socialbar_text_link}`}>
                                <a
                                    href={"https://joshua-kery.helcim.app/quick-order"}
                                    target="_blank"
                                >
                                    store
                                </a>
                            </li>
                            <li>
                                <a className={`${styles.socialbar_link} ${small && styles.smaller_socialbar_link}`}
                                    href="https://www.instagram.com/joshuatkery/">
                                    <div className={`${styles.instagram} ${small && styles.smaller_instagram}`}></div>
                                </a>
                            </li>
                        </ul>
                </header>
                { this.props.children }
            </div>
        )
    }
}

export { Header };
