import React from "react"
import * as styles from '../components/house2.module.css'

export default ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.roof_container}>
                <div className={styles.roof}></div>
            </div>
            
            <ul className={styles.brick}>
                        {children}
            </ul>
        </div>
    )
}