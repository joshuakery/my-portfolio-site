import React from "react"
import * as styles from './ham_menu.module.css';


export default ({children, open}) => {
    return (
        <div className={`${styles.open} ${!open && styles.closed}`}>
            {children}
        </div>
    );
}