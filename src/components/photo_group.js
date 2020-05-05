import React from "react"
import PhotoGroupStyles from "../components/photo_group.module.css"

export default class PhotoGroup extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={PhotoGroupStyles.group}>
                { this.props.children }
            </div>
        )
    }
}