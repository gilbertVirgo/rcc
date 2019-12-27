import NavInner from "./NavInner.jsx"
import "../customs/app.scss"
import MainBody from "./MainBody.jsx"
export default function App()  {
    return (
        <div className = "highestContainer">
            <NavInner ></NavInner>
            <MainBody></MainBody>
        </div>
            );
    }
