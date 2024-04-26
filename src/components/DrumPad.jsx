function DrumPad({ value, bgColor, src }) {
    let handleSound = () => new Audio(src).play();
    let style = { backgroundColor: bgColor };

    return (
        <div id={value} className="drum-pad btn" style={style} onClick={handleSound}>
            {value}
        </div>
    );
}

export default DrumPad;