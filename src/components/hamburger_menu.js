import React from "react"
import hamMenuStyles from '../components/hamburger_menu.module.css';


export default ({children, open}) => {
    if (open) {
        return (
            <div className={hamMenuStyles.open}>
                {children}
            </div>
        ) 
    }
    else {
        return (
            <div className={hamMenuStyles.closed}>
                {children}
            </div>
        )
    }
}