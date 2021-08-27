import React from "react"
import introStyles from './intro.module.css'
/* test */

export default ({children}) => {
    return (
        <div className={introStyles.frame}>
            <p className={introStyles.text}>
                I create teaching materials, interfaces, and tools for digital performances.
            </p>
            <p className={introStyles.text}>
                I recently worked as a Learning and Engagement Contractor for <a href="https://designmuseumfoundation.org/" target="_blank">Design Museum Everywhere.</a>
            </p>
            {children}
        </div>
    )
}