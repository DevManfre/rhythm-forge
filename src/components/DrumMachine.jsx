import '../static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';

import Controller from "./Controller";
import DrumPad from "./DrumPad";
import OnOffSwitch from "./OnOffSwitch";

import Clap from '../static/audio/clap.mp3'
import ClosedHH from '../static/audio/closed-hh.mp3'
import Heater1 from '../static/audio/heater-1.mp3'
import Heater2 from '../static/audio/heater-2.mp3'
import Heater3 from '../static/audio/heater-3.mp3'
import Heater4 from '../static/audio/heater-4.mp3'
import KickNHat from '../static/audio/kick-n-hat.mp3'
import Kick from '../static/audio/kick.mp3'
import OpenHH from '../static/audio/open-hh.mp3'

function DrumMachine() {
    const drumPads = [
        { key: 1, char: "Q", color: "#FF5F7A", src: Clap },
        { key: 2, char: "W", color: "#ECEAEC", src: ClosedHH },
        { key: 3, char: "E", color: "#4BC3EF", src: Heater1 },
        { key: 4, char: "A", color: "#4BC3EF", src: Heater2 },
        { key: 5, char: "S", color: "#FF5F7A", src: Heater3 },
        { key: 6, char: "D", color: "#ECEAEC", src: Heater4 },
        { key: 7, char: "Z", color: "#ECEAEC", src: KickNHat },
        { key: 8, char: "X", color: "#4BC3EF", src: Kick },
        { key: 9, char: "C", color: "#FF5F7A", src: OpenHH },
    ];
    let controllers = [];

    let handleKeyDown = (event) => document.getElementById(event.key.toUpperCase()).click();

    for (let i = 0; i < 4; i++)
        controllers.push(<Controller
            style={{ rotate: `${Math.floor(Math.random() * (361))}deg` }}
            key={i + 1}
        />);

    return (
        <div id="drum-machine" onKeyDown={handleKeyDown} tabIndex="0">
            <div className="upper-machine">
                <div className="row">
                    {controllers}
                </div>
            </div>
            <div className="lower-machine">
                <div className="row">
                    <div className="drum-pads-container col-sm-9">
                        {drumPads.map(item => {
                            return <DrumPad
                                key={item.key}
                                value={item.char}
                                bgColor={item.color}
                                src={item.src}
                            />
                        })}
                    </div>
                    <OnOffSwitch />
                    <OnOffSwitch />
                </div>
                <div id="display" />
            </div>
        </div>
    );
}

export default DrumMachine;