import React from "react"
import ImageColStyles from "../components/image_col.module.css"

export default class ImageCol extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={ImageColStyles.col}>
                { this.props.children }
            </div>
        )
    }
}