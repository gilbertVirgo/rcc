import { useState } from "react";

export default function NavInner() {
    const [on, setOn] = useState(false);
    const [display, setDisplay] = useState("none");
    let typeD;
    function toggle(){
        setOn(!on);
        typeD = (on) ? "none" : "block";
        setDisplay(typeD);
        console.log(on, display);
    }

    return (
    <div>
        <div>
            <nav>
                <img src="/assets/logo.png" alt="this is a logo"/>
                
                    <button onClick = {toggle}>
                    <img src="/assets/navIcon.png" alt="this is the nav icon" />
                    </button>
                    
            </nav>
        </div>
        <div>
            <p>Ridley Community Church</p>
            <p>An Evangelical Church in Forest Gate</p>
        </div>
    </div>
    );

};