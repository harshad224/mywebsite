import React, { useState } from "react";
import '../css/about.css';
import Aboutnav from './Aboutnav.js'
import { Link } from "react-router-dom";
import '../App.css'

export default function About() {
    return (
        <>
            {/* <div className="top"></div> */}
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                <Aboutnav />
            </div>
            <div className="eat">I eat,drink & breathe design.It's what I do.</div>
            <div className="mechanical">I am a Mechanical Engineer,<br />
                but professionally<br />
                a UI/UX Designer &<br />
                a MERN Stack Developer.</div>
            <div className="mechanical1">I am a Mechanical Engineer,
                but professionally
                a UI/UX Designer &
                a MERN Stack Developer.</div>
            <div className="myself">
                <div className="personality">
                    <h6 className="myperson">My personality</h6><hr />
                    <p className="myperson1">I am a passionate.
                        I love what I do.<br />
                        Always craving to improve and learn new skills.<br />
                    </p>
                </div>
                <div className="goals">

                    <h6 className="mygoal">My Goals</h6>
                    <hr />
                    <p className="mygoal1">I am a passionate.
                        I love what I do.<br />
                        Always craving to improve and learn new skills.<br />
                    </p>
                </div>
                <div className="strength">
                    <h6 className="mystrength">My Strengths</h6><hr />
                    <p className="mystrength1">I am a passionate.
                        I love what I do.<br />
                        Always craving to improve and learn new skills.<br />
                    </p>
                </div>
                <div className="passion">
                    <h6 className="mypassion">My Passion</h6><hr />
                    <p className="mypassion1">I am a passionate.
                        I love what I do.<br />
                        Always craving to improve and learn new skills.<br />
                    </p>
                </div>
            </div>
            {/* <div className="aarrowdown"><FaChevronDown /></div> */}
            {/* <div className="aline1"></div> */}
            {/* <div className="aline2"></div> */}
            {/* <div className="aline3"></div>
                <div className="aline4"></div> */}
            {/* <div className="bottom"></div> */}
            {/* </div> */}
        </>
    )
}