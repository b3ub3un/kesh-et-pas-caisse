import React from "react";

import logo from "../images/kesh-logo.jpg";

export default function Header(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img
                className="nav--logo_icon"
                src={logo}
                alt="Kesh Logo"
            />
            <h3 className="nav--logo_text">Kesh et pas caisse</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}
