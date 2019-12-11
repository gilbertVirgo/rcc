import AboutOuter from "./AboutOuter.jsx"
import { Component } from "react"
export default class NavOuter extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAboutActive : true,
            display : "none"
        }
    }
    toggleAbout(){
        this.setState({isAboutActive : !this.state.isAboutActive});
        let D = (this.state.isAboutActive) ? "block" : "none";
        this.setState({display : D});
    }
    render(){
        return(
            <div className = "NavOuter" style = {this.props}>
                <div>
                    <button onClick = {() => console.log(this.props)}>Contact Us</button>
                </div>
                <div>
                    <div>
                        <p>HOME</p>
                        <hr/>
                    </div>
                    <div>
                        <a onClick = {() => {this.toggleAbout();console.log(this.state.isAboutActive,this.state.display)}}><p>ABOUT US</p></a>
                        <img src="/assets/arrowAbout.png" alt="this is an arrow"/>
                        <hr/>
                        <AboutOuter display = {this.state.display}></AboutOuter>
                    </div>
                </div>
            </div>
        )
    }
}