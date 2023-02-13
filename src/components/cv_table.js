import React from "react"
import * as styles from "../components/cv_table.module.css"

class CVTable extends React.Component {
    render() {
        return (
            <div className={styles.cvtable}>
                { this.props.children }
            </div>
        )
    }
}

export { CVTable }