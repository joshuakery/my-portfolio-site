import React from "react"
import FullWidthImageStyles from "../components/full_width_image.module.css"

export default class FullWidthImage extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={FullWidthImageStyles.image}>
                { this.props.children }
            </div>
        )
    }
}