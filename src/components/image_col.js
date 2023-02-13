import React from "react"
import * as styles from "../components/image_col.module.css"

export default class ImageCol extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={styles.col}>
                { this.props.children }
            </div>
        )
    }
}