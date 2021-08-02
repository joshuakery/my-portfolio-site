import React from "react"
import introStyles from '../components/intro.module.css'
/* test */

export default ({children}) => {
    return (
        <div className={introStyles.frame}>
            <p className={introStyles.text}>
                josh creates teaching materials, interfaces, and tools for digital performances.
            </p>
            <p className={introStyles.text}>
                he recently worked as a Learning and Engagement Contractor for <a href="https://designmuseumfoundation.org/">Design Museum Everywhere.</a>
            </p>
            {children}
        </div>
    )
}