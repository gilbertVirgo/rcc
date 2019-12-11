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
    updateDsiplay(){
        let D = (this.state.light === true) ? "block" : "none";
        this.setState({display: D});
    }
    render(){
        return(
        <div>
            <NavOuter display = {this.state.display}></NavOuter>
            <div>
                <nav>
                    <img src="/assets/logo.png" alt="this is a logo"/>
                    
                        <button onClick = {
                            () => {this.setState({light : !this.state.light});
                            this.updateDsiplay();
                            console.log(this.state.display,this.state.light);
                            }}>
                        <img src="/assets/navIcon.png" alt="this is the nav icon" />
                        </button>
                        
                </nav>
            </div>
            <div>
                <p>Ridley Community Church</p>
                <p>An Evangelical Church in Forest Gate</p>
            </div>
        </div>
        )
    }

};