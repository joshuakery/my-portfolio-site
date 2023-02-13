import React from "react"
import * as styles from '../components/hamburger_menu.module.css';


export default ({children, open}) => {
    if (open) {
        return (
            <div className={styles.open}>
                {children}
            </div>
        ) 
    }
    else {
        return (
            <div className={styles.closed}>
                {children}
            </div>
        )
    }
}