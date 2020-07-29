import React from "react"
import introStyles from '../components/intro.module.css'

export default ({children}) => {
    return (
        <div className={introStyles.frame}>
            <p className={introStyles.text}>
                Hi! I am an <b>Interdisciplinary artist</b><br></br>
                interested in a career in <br></br>
                <b>Exhibit Design</b> and <b>UX Design</b>
            </p>
            {children}
        </div>
    )
}