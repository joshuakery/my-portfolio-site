import React from "react"
import * as styles from "../components/image-row.module.css"

export default class ImageRow extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={styles.row}>
                { this.props.children }
            </div>
        )
    }
}