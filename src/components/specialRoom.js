import React from "react"
import specialStyles from '../components/specialRoom.module.css'
import {Rnd} from "react-rnd"

class Bathroom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friend: "waisthigh",
            windowWidth: 0,
            windowHeight: 0,
            roomSize: 400
        }
        this.submergeFriend = this.submergeFriend.bind(this);
        this.getFriend = this.getFriend.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
        updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        console.log(this.state.width);
        this.updateRoomSize();
    }

    updateRoomSize() {
        if (this.state.width != undefined && this.state.width > 400) {
            this.setState( {roomSize: 400 });
        }
        else {
            // roomSize = this.state.width - 20;
            this.setState( {roomSize: 200 });
        }
    }

    submergeFriend(e, direction, ref, delta, position) {
        if (position.y < 83) {
            this.setState(state => ({
                friend: "underwater"
            }))
        }
        else if (position.y < 137) {
            this.setState(state => ({
                friend: "neck"
            }))
        }
        else if (position.y < 336) {
            this.setState(state => ({
                friend: "waisthigh"
            }))
        }
        else {
            this.setState(state => ({
                friend: "floorlevel"
            }))
        }
    }

    getFriend() {
        if (this.state.friend == "underwater") {
            return (
                <div className={specialStyles.bathroom_friend_underwater}></div>
            )
        } 
        else if (this.state.friend == "neck") {
            return (
                <div className={specialStyles.bathroom_friend_neck}></div>
            )
        }
        else if (this.state.friend == "waisthigh") {
            return (
                <div className={specialStyles.bathroom_friend_waisthigh}></div>
            )
        }
        else if (this.state.friend == "floorlevel") {
            return (
                <div className={specialStyles.bathroom_friend_floorlevel}></div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        console.log(this.state.roomSize);
        return (
                    <div className={specialStyles.container}>
                        <div className={specialStyles.bathroom}>
                            <div className={specialStyles.bathroom_interior}></div>
                            <div className={specialStyles.bathroom_leftwall}></div>
                            <div className={specialStyles.bathroom_rightwall}></div>
                            {this.getFriend()}
                            <Rnd
                                className = {specialStyles.waterLevel}
                                default={{
                                x: 10,
                                y: 200,
                                width: this.state.roomSize,
                                height: 100,
                                }}
                                enableResizing = {{ top:true,
                                                    right:false,
                                                    bottom:false,
                                                    left:false,
                                                    topRight:false,
                                                    bottomRight:false,
                                                    bottomLeft:false,
                                                    topLeft:false }
                                                }
                                disableDragging="false"
                                maxHeight="367"
                                minHeight="40"
                                onResize={this.submergeFriend}
                            >
                                <div className={specialStyles.waterLevel_waves}></div>
                                <div className={specialStyles.waterLevel_top}></div>  
                                
                            </Rnd>
                        </div>
                    </div>
                )
    }
}

class Bedroom extends React.Component {
    render() {
        return (
                    <div className={specialStyles.bedroom}>
                        {this.props.children}
                    </div>
                )
    }
}

class Kitchen extends React.Component {
    render() {
        return (
                    <div className={specialStyles.kitchen}>
                        {this.props.children}
                    </div>
                )
    }
}

class Basement extends React.Component {
    render() {
        return (
                    <div className={specialStyles.basement}>
                        {this.props.children}
                    </div>
                )
    }
}

export { Bathroom, Bedroom, Kitchen, Basement }