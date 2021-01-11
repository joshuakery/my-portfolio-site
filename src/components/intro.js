import React from "react"
import introStyles from '../components/intro.module.css'

export default ({children}) => {
    return (
        <div className={introStyles.frame}>
            <p className={introStyles.text}>
                experience designer.
            </p>
            <p className={introStyles.text}>
                interdisciplinary artist.
            </p>
            {children}
        </div>
    )
}