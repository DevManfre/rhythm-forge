function DrumPad({ value, bgColor }) {
    return (
        <div className="drum-pad btn" style={{backgroundColor: bgColor}}>
            {value}
        </div>
    );
}

export default DrumPad;