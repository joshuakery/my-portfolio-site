import React, { Component } from "react"
import { Link } from "gatsby"
import RoomText from "../components/room_link"

import * as styles from "./room_basement.module.css"

const Basement = (props) => {
    const { children, title, slug } = props;
    return (
        <div className={`${styles.basement}`}>
            <Link to={slug} className={`${styles.basement_room}`}>

                <div className={styles.children_container}>
                    {children}
                </div>

                <RoomText title={title}></RoomText>

            </Link>
        </div>
    );
};

class HomePageBasement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basementHeight: 0,
        }
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize",this.handleResize.bind(this));
    }

    handleResize = () => {
        this.setState({ basementHeight: this.getBasementHeight() });
    }

    getBasementHeight = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 880) return 'auto';
        else if (windowWidth > 500) return `${400 * (windowWidth/880)}px`;
        else return '227px';
    }

    render() {
        const { basementHeight } = this.state;
        const { children, title, slug } = this.props;
        return (
            <div className={`${styles.basement}`} style={{height:basementHeight}}>
                <Link to={slug} className={`${styles.basement_room}`}>
    
                    <div className={styles.children_container}>
                        {children}
                    </div>
    
                    <RoomText title={title}></RoomText>
    
                </Link>
            </div>
        );
    }
}

export default Basement;

export { HomePageBasement };