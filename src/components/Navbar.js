import React from "react";
import '../App.css'
import '../css/landing.css'

export default function Navbar() {
    return (
        <>
            <div className="hello">Hello,<br />My name is</div>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                <div className="harshad" id="scrollspyHeading5">
                    Harshad Pawar
                </div>
            </div>
            <div className="mern">
                UI/UX Designer | MERN Stack Developer
            </div>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="harshborder"></div>
        </>
    )
}