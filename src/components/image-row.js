import React from "react"
import ImageRowStyles from "../components/image-row.module.css"

export default class ImageRow extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={ImageRowStyles.row}>
                { this.props.children }
            </div>
        )
    }
}