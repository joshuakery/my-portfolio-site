import React from "react"
import Styles from "../components/resume_container.module.css"

class ResumeContainer extends React.Component {
    render() {
        return (
            <div className={Styles.container}>
                { this.props.children }
            </div>
        )
    }
}

export { ResumeContainer }