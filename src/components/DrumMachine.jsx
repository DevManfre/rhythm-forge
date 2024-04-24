import '../static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';

import UpperDrumMachine from './UpperDrumMachine';
import LowerDrumMachine from './LowerMachine';

function DrumMachine() {
    return(
        <div id="drum-machine">
            <UpperDrumMachine />
            <LowerDrumMachine />
        </div>
    );
}

export default DrumMachine;