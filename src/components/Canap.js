import React from "react";

import canap from "../data/canap";

export default function Canap(props) {

    const [canapState, setCanapState] = React.useState("");

    function getRandomCanap () {
        const randomInt = Math.floor(Math.random() * canap.length);
        return canap[randomInt];
    }

    function handleClick () {
        setCanapState(getRandomCanap());
    }

    return (
        <div className="canapCita">
            <button onClick={handleClick}>Balance ton canap</button>
            <a>{canapState}</a>
        </div>
    );
}
