import '../static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';

import UpperDrumMachine from './UpperDrumMachine';
import LowerDrumMachine from './LowerMachine';

function DrumMachine() {
    let handleKeyDown = (event) => document.getElementById(event.key.toUpperCase()).click();

    return(
        <div id="drum-machine" onKeyDown={handleKeyDown} tabIndex="0">
            <UpperDrumMachine />
            <LowerDrumMachine />
        </div>
    );
}

export default DrumMachine;