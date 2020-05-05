import React from "react"
import StaggeredGroupStyles from "../components/staggered_group.module.css"

export default class StaggeredGroup extends React.Component {
    static defaultProps= {
        initialValue: 0,
    }

    state = {
        value: Number(this.props.initialValue),
    }

    render() {
        return (
            <div className={StaggeredGroupStyles.group}>
                { this.props.children }
            </div>
        )
    }
}