import React from "react"
import layoutStyles from "./layout.module.css"
import { Header } from "../components/header"
import { DesignHeader } from "../components/design_header"
import { Footer } from "../components/footer"

class Layout extends React.Component {
    render() {
        return (
            <div className={layoutStyles.layout}>                            
                <Header open={this.props.open}
                        setOpen={this.props.setOpen}>
                </Header>

                <div className={layoutStyles.clouds}>
                    <div className={layoutStyles.cloud1}></div>
                    <div className={layoutStyles.cloud2}></div>
                </div>

                <div className={layoutStyles.body_container}>
                    {this.props.children}
                </div>

                <Footer bg={'dark'}></Footer>
            </div>
        )

    }
}

class DesignLayout extends React.Component {
    render() {
        return (
            <div className={layoutStyles.designlayout}>            
                <DesignHeader open={this.props.open} setOpen={this.props.setOpen}></DesignHeader>
                <div className={layoutStyles.design_body_container}>
                    {this.props.children}
                </div>
                <Footer bg={'light'}></Footer>
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