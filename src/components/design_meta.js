import React from "react"
import Styles from "../components/design_meta.module.css"

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

export { GridContainer,
         DesignMeta, CoverImg,
         Quote,
         ImagePair, TextPair,
         FullWidthImage };