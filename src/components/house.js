import React from "react"
import * as styles from '../components/house.module.css'

export default ({children, scaffolding}) => {
    return (
        <div className={styles.container}>
            <div className={styles.roof_container}>
                <div className={styles.roof}></div>
            </div>
            
            <ul className={styles.brick}>
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