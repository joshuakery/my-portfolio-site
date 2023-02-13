import React from "react"
import * as styles from "./resume_container.module.css"

class ResumeContainer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                { this.props.children }
            </div>
        )
    }
}

export { ResumeContainer }