import DrumPad from "./DrumPad";
import Display from "./Display";
import OnOffSwitch from "./OnOffSwitch";

function LowerDrumMachine() {
    const drumPadsData = [
        { key: 1, char: "Q", color: "#FF5F7A" },
        { key: 2, char: "W", color: "#ECEAEC" },
        { key: 3, char: "E", color: "#4BC3EF" },
        { key: 4, char: "A", color: "#4BC3EF" },
        { key: 5, char: "S", color: "#FF5F7A" },
        { key: 6, char: "D", color: "#ECEAEC" },
        { key: 7, char: "Z", color: "#ECEAEC" },
        { key: 8, char: "X", color: "#4BC3EF" },
        { key: 9, char: "C", color: "#FF5F7A" },
    ];

    return (
        <div className="lower-machine">
            <div className="row">
                <div className="drum-pads-container col-sm-9">
                    {drumPadsData.map(item => {
                        return <DrumPad key={item.key} value={item.char} bgColor={item.color} />
                    })}
                </div>
                <OnOffSwitch />
                <OnOffSwitch />
            </div>
            <Display />
        </div>
    );
}

export default LowerDrumMachine;