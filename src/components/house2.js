import React from "react"
import houseStyles from '../components/house2.module.css'

export default ({children}) => {
    return (
        <div className={houseStyles.container}>
            <div className={houseStyles.roof_container}>
                <div className={houseStyles.roof}></div>
            </div>
            
            <ul className={houseStyles.brick}>
                        {children}
            </ul>
        </div>
    )
}