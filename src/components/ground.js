import React from "react"
import groundStyles from '../components/ground.module.css'

export default () => {
    return (
        <div className={groundStyles.ground}>
                <div className={groundStyles.grass}></div>
                <div className={groundStyles.dirt}></div>
        </div>
    )
}