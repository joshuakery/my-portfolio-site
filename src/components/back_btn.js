import React from "react"
import { Link } from "gatsby"
import * as styles from '../components/back_btn.module.css'

export default ({location}) => {
    return (
        <Link to={location.state.previousPage}>
          <p className={styles.back_btn}>
            BACK  
          </p>
        </Link>
    )
}