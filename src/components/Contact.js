import React from "react";
import '../css/contact.css';
import Contactnav from "./Contactnav";

export default function Contact() {
    return (
        < >

            <div className="contactform">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                    <Contactnav />
                </div>
                <form className="contactback">
                    <input type="text" className="name1" placeholder="Name" /><br />
                    <input type="text" className="email" placeholder="Email" /><br />
                    <textarea type="text" className="message" placeholder="Write message" /><br />
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
            <div className="backtotop">Back To Top</div>
            <div className="interest">
                Hi,I am interested in freelance opportunities.<br />However,if you have any other request don't hesitate to contact me using the given fomr either.
            </div>
        </>
    )
}