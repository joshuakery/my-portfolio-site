import React from "react"
import houseStyles from '../components/house.module.css'

export default ({children, scaffolding}) => {
    return (
        <div className={houseStyles.container}>
            <div className={houseStyles.roof_container}>
                <div className={houseStyles.roof}></div>
            </div>
            
            <ul className={houseStyles.brick}>
                        {children}
            </ul>
            {/* {scaffolding ?
                <div className={houseStyles.scaffolding}>
                    <ul className={houseStyles.brick_in_scaffolding}>
                        {children}
                    </ul>
                </div>
                :
                <ul className={houseStyles.brick}>
                        {children}
                </ul>
            } */}
        </div>
    )
}