import React from "react"
import { Link } from "gatsby"
import backStyles from '../components/back_btn.module.css'

export default ({location}) => {
    return (
        <Link to={location.state.previousPage}>
          <p className={backStyles.back_btn}>
            BACK  
          </p>
        </Link>
    )
}