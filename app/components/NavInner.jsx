import { Component } from "react";
import NavOuter from "./NavOuter";
export default class NavInner extends Component{
    constructor(props){
        super(props);
        this.state = {
            light : true,
            display : "none",
            transform : "translate(-300px,0px)",
            opacity : 0.5
        }
    }
    updateDisplay(){
        let D = (this.state.light) ? "block" : "none";
        let T = (this.state.light) ? "translate(0px,0px)" : "translate(-300px,0px)";
        let O = (this.state.light) ? "1" : "0.5";
        this.setState({opacity : O});
        this.setState({display: D});
        this.setState({transform : T});
        console.log(this.state.opacity);
    }
    render(){
        return(
        <div className = "navInner">
            <div className = "opacityContainer" style = {{opacity : this.state.opacity}}></div>
            <NavOuter transform = {this.state.transform}></NavOuter>
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