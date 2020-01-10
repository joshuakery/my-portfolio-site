import React from "react"
import tableStyles from '../components/tabletop.module.css'

export default ({children}) => {
    return (
        <div className={tableStyles.top}>
            {children}
        </div>
    )
}