import React from "react"
import Styles from "../components/about_body.module.css"

class AboutBody extends React.Component {
    render() {
        return (
            <div className={Styles.aboutbody}>
                { this.props.children }
            </div>
        )
    }
}

export { AboutBody }