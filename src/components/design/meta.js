import React from "react"
import Styles from "./meta.module.css"

class ButtonLink extends React.Component {
    render() {
        return (
            <div className={Styles.buttonLinkContainer}>
                <a className={Styles.buttonLink} target="_blank" href={this.props.href}>
                    { this.props.children }
                </a> 
            </div>  
        )
    }
}

class MultiMobileContainer extends React.Component {
    render() {
        return (
            <figure className={Styles.multiMobileContainer}>
                <div className={Styles.multiMobile}>
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
            <div className={Styles.mobileContainer}>
                { this.props.children }
            </div>   
        )
    }
}

class BrowserContainer extends React.Component {
    render() {
        const { isprototype } = this.props;
        return (
            <div className={`${Styles.browsercontainer} ${ isprototype=="true" ? Styles.prototypecontainer : ''}`}>
                <div className={Styles.browserTabBar}>
                    <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4" stroke="black" stroke-width="2" vectorEffect="non-scaling-stroke"/>
                    <circle cx="20" cy="5" r="4" stroke="black" stroke-width="2" vectorEffect="non-scaling-stroke"/>
                    <circle cx="35" cy="5" r="4" stroke="black" stroke-width="2" vectorEffect="non-scaling-stroke"/>
                    </svg>
                </div>
                <div className={Styles.browserWindow}>
                 { this.props.children }
                </div>
            </div>
        )
    }
}

class GridContainer extends React.Component {
    render() {
        return (
            <div className={Styles.container}>
                { this.props.children }
            </div>
        )
    }
}

class DesignMeta extends React.Component {
    render() {
        return (
            <div className={Styles.meta}>
                { this.props.children }
            </div>
        )
    }
}

class CoverImg extends React.Component {
    render() {
        return (

                <div className={Styles.cover}>
                    { this.props.children }
                </div>

            
        )
    }
}

class Quote extends React.Component {
    render() {
        return (
                <div className={Styles.quote}>
                    { this.props.children }
                </div> 
        )
    }
}

class ImagePair extends React.Component {
    render() {
        return (
            <div className={Styles.img_pair}>
                { this.props.children }
            </div> 
    )
    }
}

class TextPair extends React.Component {
    render() {
        return (
            <div className={Styles.text_pair}>
                { this.props.children }
            </div> 
    )
    }
}

class FullWidthImage extends React.Component {
    render() {
        return (
            <div className={Styles.full_width_image}>
                { this.props.children }
            </div> 
    )
    }
}

export { ButtonLink, MultiMobileContainer, MobileContainer, BrowserContainer, GridContainer,
         DesignMeta, CoverImg,
         Quote,
         ImagePair, TextPair,
         FullWidthImage };