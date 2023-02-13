import React from "react"
import * as styles from '../components/hamburger_button.module.css';


export default ({open, setOpen}) => {
    if (open) {
        return (
            <div className={styles.btn}>
                <div className={styles.btn_open} onClick={() => setOpen()}></div>
            </div>
            
        )
    }
    else {
        return (
            <div className={styles.btn}>
                <div className={styles.btn_closed} onClick={() => setOpen()}></div>
            </div>
        )
    }
    
}