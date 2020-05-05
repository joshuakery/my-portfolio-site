import React from "react"
import Styles from "../components/cv_table.module.css"

class CVTable extends React.Component {
    render() {
        return (
            <div className={Styles.cvtable}>
                { this.props.children }
            </div>
        )
    }
}

export { CVTable }