function DrumPad({ value, bgColor }) {
    return (
        <div id={'drumpad-' + value} className="drum-pad btn" style={{backgroundColor: bgColor}}>
            {value}
        </div>
    );
}

export default DrumPad;