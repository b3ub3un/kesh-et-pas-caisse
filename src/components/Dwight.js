import React from "react";

import dwight1 from "../images/dwight/dwight1.jpg";
import dwight2 from "../images/dwight/dwight2.jpg";
import dwight3 from "../images/dwight/dwight3.jpg";
import dwight4 from "../images/dwight/dwight4.jpg";
import dwight5 from "../images/dwight/dwight5.jpeg";
import dwight6 from "../images/dwight/dwight6.jpg";

export default function Dwight(props) {

    const [DwightState, setDwightState] = React.useState("");

    const dwights = [
        dwight1,
        dwight2,
        dwight3,
        dwight4,
        dwight5,
        dwight6
    ];

    function getRandomDwight () {
        const randomInt = Math.floor(Math.random() * dwights.length);
        return dwights[randomInt];
    }

    function handleClick () {
        setDwightState(getRandomDwight());
    }

    return (
        <div className="canapCita">
            <button onClick={handleClick}>Duingt</button>
            <img src={DwightState}/>
        </div>
    );
}
