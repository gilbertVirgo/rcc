import { Component } from "react";
import NavOuter from "./NavOuter";
export default class NavInner extends Component{
    constructor(props){
        super(props);
        this.state = {
            light : true,
            display : "none"
        }
    }
    updateDisplay(){
        let D = (this.state.light === true) ? "block" : "none";
        this.setState({display: D});
    }
    render(){
        return(
        <div>
            <NavOuter display = {this.state.display}></NavOuter>
            <div>
                <nav className = "navContainer">
                    <img src="/assets/logo.png" alt="this is a logo"/>
                    <button className = "navBtn" onClick = {
                        () => {this.setState({light : !this.state.light});
                        this.updateDisplay();
                        console.log(this.state.display,this.state.light);
                        }}>
                        <img src="/assets/navIcon.png" alt="this is the nav icon" />
                    </button>
                </nav>
            </div>
            <div className = "navTContainer">
                <div className = "navText">
                    <p style = {{fontSize : "20px", marginBottom: "5px"}}>Ridley Community Church</p>
                    <p style = {{fontSize : "10px", marginTop: "5px"}}>An Evangelical Church in Forest Gate</p>
                </div>
            </div>
        </div>
        )
    }

};