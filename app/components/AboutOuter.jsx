import { Component } from "react"

export default class AboutOuter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style = {this.props}>
                <ul>
                    <li>Our Pastor</li>
                    <li>What We Belive</li>
                </ul>
            </div>
        );
    } 
};