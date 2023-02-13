import React from "react"
import * as styles from "../components/staggered_group.module.css"

export default class StaggeredGroup extends React.Component {
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