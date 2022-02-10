import React from "react";
import { FaTachometerAlt, FaLaptop, FaRocket, FaCircle } from "react-icons/fa";
import '../css/skills.css';
import Pro from './Pro.js'
import Pro1 from "./Pro1";
import Skillnav from "./Skillnav";

function Progress(props) {
    return (
        <div className="promap">
            <p className="name">{props.name}</p>
            <div className="progress"></div>
            <div className="progress1" style={{ width: `${props.width}`, }}></div>
            {/* <div className="progress2"></div> */}
            <div className="percent">{props.percent}</div>

        </div>
    )
}
export default function Skills() {
    const icons = [{ id: 1, icon: <FaTachometerAlt />, title: "Fast", msg: "Fast load times and lag free interaction, my highest priority." },
    { id: 2, icon: <FaLaptop />, title: "Responsive", msg: "My layouts will work on any device, big or small." },
    { id: 3, icon: <FaLaptop />, title: "Interactive", msg: "Strong preference for easy to use, intuitive UX/UI." },
    { id: 4, icon: <FaRocket />, title: "Dynamic", msg: "Websites don't have to be static, I love making pages come to life." },
    ]
    return (
        <>
            <div className="skills">
                <div className="myskill">I design websites that are...</div>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                    <Skillnav />
                </div>
                <div className="mernskill d-flex">
                    <div>
                        {Pro.map((z) => <Progress id={z.id} name={z.name} percent={z.progress} width={z.width} />)}
                    </div>
                    <div>
                        {Pro1.map((z) => <Progress id={z.id} name={z.name} percent={z.progress} width={z.width} />)}
                    </div>
                </div>
                <div className="container-fluid d-flex">
                    <div className="row-md-12"></div>
                    {icons.map(a =>
                        <div className="col-md-4 adverbs">
                            <div className="iconss">{a.icon}</div>
                            <div className="msgg">{a.msg}</div>
                        </div>
                    )}
                </div>
                <div className="circle1"><FaCircle /></div>
                <div className="circle2"><FaCircle /></div>
                <div className="circle3"><FaCircle /></div>
                <div className="circle4"><FaCircle /></div>
                <div className="title">Fast</div>
                <div className="title1">Responsive</div>
                <div className="title2">Interactive</div>
                <div className="title3">Dynamic</div>
            </div>
            <div className="valley1 ">
            </div>
            <div className="sbottom"></div>
            {/* // <div className="sbottom1"></div> */}
        </>
    )
}