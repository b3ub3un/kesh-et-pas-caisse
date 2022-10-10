import React from "react";

import Cita from "./Cita";
import Dwight from "./Dwight";
import Canap from "./Canap";

export default function Body(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <Canap darkMode={props.darkMode}/>
            <Cita darkMode={props.darkMode}/>
            <Dwight darkMode={props.darkMode}/>
        </main>
    );
}
