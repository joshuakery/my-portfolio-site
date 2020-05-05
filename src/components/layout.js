import React from "react"
import layoutStyles from "./layout.module.css"
import { Header } from "../components/header"

class Layout extends React.Component {
    render() {
        return (
            <div className={layoutStyles.layout}>                            
                <Header open={this.props.open} setOpen={this.props.setOpen}></Header>

                <div className={layoutStyles.clouds}>
                    <div className={layoutStyles.cloud1}></div>
                    <div className={layoutStyles.cloud2}></div>
                </div>

                <div className={layoutStyles.body_container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class DesignLayout extends React.Component {
    render() {
        return (
            <div className={layoutStyles.designlayout}>            
                <Header open={this.props.open} setOpen={this.props.setOpen}></Header>
                <div className={layoutStyles.design_body_container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { Layout, DesignLayout }

// export default ({ children, open, setOpen }) => {
//     return (
//         <div className={layoutStyles.layout}>           
//             <div className={layoutStyles.clouds}>
//                 <div className={layoutStyles.cloud1}></div>
//                 <div className={layoutStyles.cloud2}></div>
//             </div>
             
//             <Header open={open} setOpen={setOpen}></Header>
//             <div className={layoutStyles.body_container}>
//                 {children}
//             </div>
//         </div>
//     )
// }