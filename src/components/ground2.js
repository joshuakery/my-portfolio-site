import React from "react"
import * as styles from '../components/ground2.module.css'

export default ({children}) => {
    return (
        <div className={styles.ground}>
                <div className={styles.grass}></div>
                <div className={styles.dirt_gradient}></div>
                <div className={styles.dirt}></div>
                {children}
        </div>
    )
}