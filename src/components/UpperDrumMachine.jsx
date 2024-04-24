import Controller from "./Controller";

function UpperDrumMachine() {
    let controllers = [];

    for (let i = 0; i < 4; i++)
        controllers.push(<Controller
            style={{ rotate: `${Math.floor(Math.random() * (361))}deg` }}
            key={i + 1}
        />);

    return (
        <div className="upper-machine">
            <div className="row">
                {controllers}
            </div>
        </div>
    );
}

export default UpperDrumMachine;