export default function Times() {
    
    return (
    <div className = "timesContainer">
        <div className = "inline-block">
            <div className = "clockContainer">
                <img src="/assets/clock.png" alt="this is a clock"/>
            </div>
            <p style = {{fontSize : "13px"}} >Service Times</p>
        </div>
        <div className = "inline-block">
            <p style = {{fontSize : "13px"}} >Sundays: 10:30am</p>
            <p style = {{fontSize : "13px"}} >Wednesdays: 7pm</p>
        </div>
    </div>
    );
}