import React from "react"
import * as styles from "../components/video_container.module.css"

export default class VideoContainer extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={styles.tablet}>
                { this.props.children }
            </div>
        )
    }
}