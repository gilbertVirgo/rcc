import AboutOuter from "./AboutOuter.jsx"
import { Component } from "react"
export default class NavOuter extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAboutActive : true,
            display : "none",
        }
    }
    toggleAbout(){
        this.setState({isAboutActive : !this.state.isAboutActive});
        let D = (this.state.isAboutActive) ? "block" : "none";
        this.setState({display : D});
    }
    render(){
        return(
            <div className = "NavOuter" style = {{
                display: this.props.display,
                transform: this.props.transform,
                }}>
                <div className = ".contactContainer" style = {{display : "flex", justifyContent : "flex-end"}}>
                    <button className = "contactBtn" onClick = {() => {console.log(this.props);}}>Contact Us</button>
                </div>
                <div style = {{marginLeft : "40px"}}>
                    <div>
                        <p style = {{marginTop : "0px"}}>HOME</p>
                    </div>
                <div className = "aboutContainer">
                    <a onClick = {() => {this.toggleAbout();console.log(this.state)}}><p className = "inline-block">ABOUT</p></a>
                    <img src="/assets/arrowAbout.png" alt="this is an arrow" className = "arrowAbout"/>
                    <AboutOuter display = {this.state.display}></AboutOuter>
                </div>
                </div>
            </div>
        )
    }
}