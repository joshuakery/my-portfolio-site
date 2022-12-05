import React from "react"
import introStyles from './intro.module.css'
/* test */

export default ({children}) => {
    return (
        <div className={introStyles.frame}>
            <p className={introStyles.text}>
                I create learning materials, user interfaces, and tools for digital performances.
            </p>
            
            <p className={introStyles.text}>
                I currently work as a freelance software developer, frequently for <a href="https://rlmg.com/" target="_blank">Richard Lewis Media Group.</a>
            </p>
            {children}
        </div>
    )
}