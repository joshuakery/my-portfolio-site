import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "../components/header"
// import {Rnd} from 'react-rnd';
// const ResizableBox = require('react-resizable').ResizableBox;
// import ResizableArea from 'react-grid-layout'
// import { Resizable } from "re-resizable";

export default ({ children, open, setOpen }) => {
    return (
        <div className={layoutStyles.layout}>           
            <div className={layoutStyles.clouds}>
                <div className={layoutStyles.cloud1}></div>
                <div className={layoutStyles.cloud2}></div>
            </div>
             
            <Header open={open} setOpen={setOpen}></Header>
            <div className={layoutStyles.body_container}>
                {children}
            </div>
        </div>
    )
}