import React from "react"
import PostBlocksStyles from "../components/post_blocks.module.css"

class Group extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.group}`}>
                { this.props.children }
            </div>
        )
    }
}

class Left2 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.left2} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Right2 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.right2} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Center2 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.center2} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Left3 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.left3} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Right3 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.right3} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Center3 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.center3} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Left4 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.left4} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Right4 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.right4} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class Center4 extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.center4} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}

class TextBox extends React.Component {
    render() {
        return (
            <div className={`${PostBlocksStyles.textbox} ${PostBlocksStyles.block}`}>
                { this.props.children }
            </div>
        )
    }
}


export { Group,
        Left2, Right2, Center2,
        Left3, Right3, Center3,
        Left4, Right4, Center4,
        TextBox
    };