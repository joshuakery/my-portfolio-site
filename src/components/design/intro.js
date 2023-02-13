import React from "react"
import * as styles from './intro.module.css'

function Intro({children}) {
    return (
        <div className={styles.frame}>
            <p className={styles.text}>
                I create learning materials, user interfaces, and tools for digital performances.
            </p>
            
            <p className={styles.text}>
                I currently work as a freelance software developer, frequently for <a href="https://rlmg.com/" target="_blank" rel="noreferrer">Richard Lewis Media Group.</a>
            </p>
            {children}
        </div>
    )
}

export default Intro;