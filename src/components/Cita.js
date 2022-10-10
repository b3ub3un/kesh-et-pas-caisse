import React from "react";

import citations from "../data/citations";

export default function Cita(props) {

    const [citationsState, setCitationsState] = React.useState("");

    function getRandomCitations () {
        const randomInt = Math.floor(Math.random() * citations.length);
        return citations[randomInt];
    }

    function handleClick () {
        setCitationsState(getRandomCitations());
    }

    return (
        <div className="canapCita">
            <button onClick={handleClick}>Qui a dit ?</button>
            <a>{citationsState}</a>
        </div>
    );
}
