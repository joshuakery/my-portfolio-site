import React from "react"
import * as styles from "./meta.module.css"

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

class BrowserContainer extends React.Component {
    render() {
        const { isprototype } = this.props;
        return (
            <div className={`${styles.browsercontainer} ${ isprototype==="true" ? styles.prototypecontainer : ''}`}>
                <div className={styles.browserTabBar}>
                    <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4" stroke="black" stroke-width="2" vectorEffect="non-scaling-stroke"/>
                    <circle cx="20" cy="5" r="4" stroke="black" stroke-width="2" vectorEffect="non-scaling-stroke"/>
                    <circle cx="35" cy="5" r="4" stroke="black" stroke-width="2" vectorEffect="non-scaling-stroke"/>
                    </svg>
                </div>
                <div className={styles.browserWindow}>
                 { this.props.children }
                </div>
            </div>
        )
    }
}

class BespokeContainer extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <div className={`${styles.bespokecontainer}`}>
                <div className={styles.bespokewindow}>
                    {this.props.children}
                </div>
                <figcaption>{title}</figcaption>
            </div>
        )
    }
}

class GridContainer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                { this.props.children }
            </div>
        )
    }
}

class DesignMeta extends React.Component {
    render() {
        return (
            <div className={styles.meta}>
                { this.props.children }
            </div>
        )
    }
}

class CoverImg extends React.Component {
    render() {
        return (

                <div className={styles.cover}>
                    { this.props.children }
                </div>

            
        )
    }
}

class Quote extends React.Component {
    render() {
        return (
                <div className={styles.quote}>
                    { this.props.children }
                </div> 
        )
    }
}

class ImagePair extends React.Component {
    render() {
        return (
            <div className={styles.img_pair}>
                { this.props.children }
            </div> 
    )
    }
}

class TextPair extends React.Component {
    render() {
        return (
            <div className={styles.text_pair}>
                { this.props.children }
            </div> 
    )
    }
}

class FullWidthImage extends React.Component {
    render() {
        return (
            <div className={styles.full_width_image}>
                { this.props.children }
            </div> 
    )
    }
}


class VideoContainer extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div className={styles.videoContainer}>
                { this.props.children }
                { title ? (<figcaption>{title}</figcaption>) : null }
            </div>
        )
    }
}

export { ButtonLink, MultiMobileContainer, MobileContainer, BrowserContainer,
         BespokeContainer,
         GridContainer,
         DesignMeta, CoverImg,
         Quote,
         ImagePair, TextPair,
         FullWidthImage,
         VideoContainer };