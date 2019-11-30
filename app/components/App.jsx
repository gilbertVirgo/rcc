import NavInner from "./NavInner.jsx"
import Introduction from "./Introduction.jsx"
import Times from "./Times.jsx"
import Location from "./Location.jsx"
import Buttons from "./Buttons.jsx"
import NavOuter from "./NavOuter.jsx"
const App = () => {
    return (
    <div>
        <NavOuter></NavOuter>
        <NavInner></NavInner>
        <Introduction></Introduction>
        <Buttons></Buttons>
        <Times></Times>
        <Location></Location>
    </div>
        );
}
export default App;