import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "../components/header"

export default ({ children }) => {
    return (
        <div className={layoutStyles.layout}>
            <div className={layoutStyles.clouds}>
                <div className={layoutStyles.cloud1}></div>
                <div className={layoutStyles.cloud2}></div>
            </div>
            
            <Header></Header>
            {children}
        </div>
    )
}