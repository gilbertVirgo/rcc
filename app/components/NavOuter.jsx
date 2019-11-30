import AboutOuter from "./AboutOuter.jsx"
export default function NavOuter() {
    return(
        <div>
            <div>
                <button>Contact Us</button>
            </div>
            <div>
                <div>
                    <p>HOME</p>
                    <hr/>
                </div>
                <div>
                    <p>ABOUT US</p>
                    <img src="/assets/arrowAbout.png" alt="this is an arrow"/>
                    <hr/>
                    <AboutOuter></AboutOuter>
                </div>
            </div>
        </div>
    );
};