import React from "react"
import * as styles from "../components/photo_group.module.css"

export default class PhotoGroup extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={styles.group}>
                { this.props.children }
            </div>
        )
    }
}