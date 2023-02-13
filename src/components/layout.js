import React from "react"
import * as styles from "./layout.module.css"
import { Header } from "../components/header"
import { DesignHeader } from "../components/design/header"
import { Footer } from "./design/footer"

class Layout extends React.Component {
    render() {
        return (
            <div className={styles.layout}>                            
                <Header open={this.props.open}
                        setOpen={this.props.setOpen}>
                </Header>

                <div className={styles.clouds}>
                    <div className={styles.cloud1}></div>
                    <div className={styles.cloud2}></div>
                </div>

                <div className={styles.body_container}>
                    {this.props.children}
                </div>

                <div style={{width:'100%',height:'200px',background:'black'}}></div>
            </div>
        )

    }
}

class DesignLayout extends React.Component {
    render() {
        return (
            <div className={styles.designlayout}>            
                <DesignHeader open={this.props.open} setOpen={this.props.setOpen}></DesignHeader>
                <div className={styles.design_body_container}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export { Layout, DesignLayout }