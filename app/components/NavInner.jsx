import Link from "next/link"
export default function NavInner() {
    function clicked() {
        return(
        console.log("passed")
        );
    };

    return (
    <div>
        <div>
            <nav>
                <img src="/assets/logo.png" alt="this is a logo"/>
                
                    <input type="checkbox" id = "navCheck"/>
                    <label htmlFor= "navCheck">
                    <img src="/assets/navIcon.png" alt="this is the nav icon" />
                    </label>
                    
            </nav>
        </div>
        <div>
            <p>Ridley Community Church</p>
            <p>An Evangelical Church in Forest Gate</p>
        </div>
    </div>
    );

};