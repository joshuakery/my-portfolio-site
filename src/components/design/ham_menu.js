import React from "react"
import hamMenuStyles from './ham_menu.module.css';


export default ({children, open}) => {
    return (
        <div className={`${hamMenuStyles.open} ${!open && hamMenuStyles.closed}`}>
            {children}
        </div>
    );
}