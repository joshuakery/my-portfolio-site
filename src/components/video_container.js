import React from "react"
import VideoContainerStyles from "../components/video_container.module.css"

export default class VideoContainer extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={VideoContainerStyles.tablet}>
                { this.props.children }
            </div>
        )
    }
}