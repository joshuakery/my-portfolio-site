import React from "react"
import hamBtnStyles from '../components/hamburger_button.module.css';


export default ({open, setOpen}) => {
    if (open) {
        return (
            <div className={hamBtnStyles.btn}>
                <div className={hamBtnStyles.btn_open} onClick={() => setOpen()}></div>
            </div>
            
        )
    }
    else {
        return (
            <div className={hamBtnStyles.btn}>
                <div className={hamBtnStyles.btn_closed} onClick={() => setOpen()}></div>
            </div>
        )
    }
    
}