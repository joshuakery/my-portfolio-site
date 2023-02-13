import React from "react"
import * as styles from '../components/tabletop.module.css'

export default ({children}) => {
    return (
        <div className={styles.top}>
            {children}
        </div>
    )
}