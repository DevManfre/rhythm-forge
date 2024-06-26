import '../static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';

import DrumPad from "./DrumPad";

import { DrumMachineContext } from '../stores/DrumMachineContext';

import Clap from '../static/audio/clap.mp3'
import ClosedHH from '../static/audio/closed-hh.mp3'
import Heater1 from '../static/audio/heater-1.mp3'
import Heater2 from '../static/audio/heater-2.mp3'
import Heater3 from '../static/audio/heater-3.mp3'
import Heater4 from '../static/audio/heater-4.mp3'
import KickNHat from '../static/audio/kick-n-hat.mp3'
import Kick from '../static/audio/kick.mp3'
import OpenHH from '../static/audio/open-hh.mp3'

import { useState } from 'react';

function DrumMachine() {
    const drumPads = [
        { key: 1, char: "Q", color: "#FF5F7A", src: Clap, srcName: 'Clap' },
        { key: 2, char: "W", color: "#ECEAEC", src: ClosedHH, srcName: 'Closed HH' },
        { key: 3, char: "E", color: "#4BC3EF", src: Heater1, srcName: 'Heater 1' },
        { key: 4, char: "A", color: "#4BC3EF", src: Heater2, srcName: 'Heater 2' },
        { key: 5, char: "S", color: "#FF5F7A", src: Heater3, srcName: 'Heater 3' },
        { key: 6, char: "D", color: "#ECEAEC", src: Heater4, srcName: 'Heater 4' },
        { key: 7, char: "Z", color: "#ECEAEC", src: KickNHat, srcName: 'Kick n\'Hat' },
        { key: 8, char: "X", color: "#4BC3EF", src: Kick, srcName: 'Kick' },
        { key: 9, char: "C", color: "#FF5F7A", src: OpenHH, srcName: 'Open HH' }
    ];
    let controllers = [];
    const [displayText, setDisplayText] = useState('');
    const [volumeValue, setVolumeValue] = useState('75');

    function handleKeyDown(event) {
        try {
            let drumPad = document.getElementById(event.key.toUpperCase());
            drumPad.click();
            setDisplayText(drumPad.getAttribute('name'));
        } catch (error) {
            
        }
    }

    function handleChange(event) {
        let volumeLevel = event.target.value;
        setVolumeValue(volumeLevel);
        setDisplayText('Volume: ' + volumeLevel);
    }

    for (let i = 0; i < 4; i++)
        controllers.push(<div className="controller" key={i + 1} style={{ rotate: `${40 ** i}deg` }}><div className="line" /></div>);

    return (
        <DrumMachineContext.Provider value={{ displayText, setDisplayText, volumeValue }}>
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
                                    name={item.srcName}
                                />
                            })}
                        </div>
                        <input id='volume' type='range' defaultValue={volumeValue} onChange={handleChange} className='switch' />
                        <input type='range' className='switch' onChange={() => setDisplayText('Decorative slider')}/>
                    </div>
                    <div id="display">{displayText}</div>
                </div>
            </div>
            <a id="reference" href='https://github.com/DevManfre'>by DevManfre</a>
        </DrumMachineContext.Provider>
    );
}

export default DrumMachine;