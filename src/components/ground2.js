import React from "react"
import groundStyles from '../components/ground2.module.css'

export default ({children}) => {
    return (
        <div className={groundStyles.ground}>
                <div className={groundStyles.grass}></div>
                <div className={groundStyles.dirt_gradient}></div>
                <div className={groundStyles.dirt}></div>
                {children}
        </div>
    )
}