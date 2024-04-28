import { useContext } from "react";
import { DrumMachineContext } from "../stores/DrumMachineContext";

function DrumPad({ value, bgColor, src, name }) {
    let style = { backgroundColor: bgColor };
    const {displayText, setDisplayText} = useContext(DrumMachineContext);

    function handleSound(event){
        new Audio(src).play();
        setDisplayText(event.target.getAttribute('name'));
    }

    return (
        <div id={value} className="drum-pad btn" style={style} onClick={handleSound} name={name}>
            {value}
        </div>
    );
}

export default DrumPad;