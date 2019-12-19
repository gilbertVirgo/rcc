import { Component } from "react";
import Introduction from "./Introduction"
import Buttons from "./Buttons"
import Times from "./Times"
import Location from "./Location"
export default class MainBody extends Component{
    render(){
        return(
            <div>
            <Introduction></Introduction>
            <Buttons></Buttons>
            <Times></Times>
            <Location></Location>
            </div>
        )
    }
}