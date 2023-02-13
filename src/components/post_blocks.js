import React from "react"
import * as styles from "../components/post_blocks.module.css"

class Group extends React.Component {
    render() {
        return (
            <div className={`${styles.group}`}>
                { this.props.children }
            </div>
        )
    }
}

class Left2 extends React.Component {
    render() {
        return (
            <div className={`${styles.left2} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Right2 extends React.Component {
    render() {
        return (
            <div className={`${styles.right2} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Center2 extends React.Component {
    render() {
        return (
            <div className={`${styles.center2} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Left3 extends React.Component {
    render() {
        return (
            <div className={`${styles.left3} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Right3 extends React.Component {
    render() {
        return (
            <div className={`${styles.right3} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Center3 extends React.Component {
    render() {
        return (
            <div className={`${styles.center3} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Left4 extends React.Component {
    render() {
        return (
            <div className={`${styles.left4} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Right4 extends React.Component {
    render() {
        return (
            <div className={`${styles.right4} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Center4 extends React.Component {
    render() {
        return (
            <div className={`${styles.center4} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class TextBox extends React.Component {
    render() {
        return (
            <div className={`${styles.textbox} ${styles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class MultiMobileContainer extends React.Component {
    render() {
        return (
            <figure className={styles.multiMobileContainer}>
                <div className={styles.multiMobile}>
                    { this.props.children }
                </div>
                <figcaption>{ this.props.title }</figcaption>
            </figure>   
        )
    }
}

class MobileContainer extends React.Component {
    render() {
        return (
            <div className={styles.mobileContainer}>
                { this.props.children }
            </div>   
        )
    }
}

class ButtonLink extends React.Component {
    render() {
        return (
            <div className={styles.buttonLinkContainer}>
                <a className={styles.buttonLink} target="_blank" rel="noreferrer" href={this.props.href}>
                    { this.props.children }
                </a> 
            </div>  
        )
    }
}

export { Group,
        Left2, Right2, Center2,
        Left3, Right3, Center3,
        Left4, Right4, Center4,
        TextBox,
        MultiMobileContainer, MobileContainer,
        ButtonLink
    };