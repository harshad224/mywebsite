import logo from './logo.svg';
import './App.css';
import './css/about.css'
import './css/skills.css'
import './css/projects.css'
import './css/contact.css'
import { useEffect, useState } from "react"
import Aboutnav from './components/Aboutnav';
import Worknav from './components/Worknav';
import Contactnav from './components/Contactnav';
import Pro from './components/Pro.js'
import Pro1 from "./components/Pro1";
import { FaTachometerAlt, FaLaptop, FaRocket, FaPaw } from 'react-icons/fa'

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

function App() {

  const [offsetx, setOffsetx] = useState(0)
  const handlescroll = () => setOffsetx(window.scrollY)

  useEffect(
    () => {
      window.addEventListener('scroll', handlescroll);
      return () => window.removeEventListener('scroll', handlescroll)
    }, []
  )
  const icons1 = [{ id: 1, icon: <FaTachometerAlt />, title: "Fast", msg: "Fast load times and lag free interaction, my highest priority." },
  { id: 2, icon: <FaLaptop />, title: "Responsive", msg: "My layouts will work on any device, big or small." },

  ]
  const icons2 = [
    { id: 3, icon: <FaLaptop />, title: "Interactive", msg: "Strong preference for easy to use, intuitive UX/UI." },
    { id: 4, icon: <FaRocket />, title: "Dynamic", msg: "Websites don't have to be static, I love making pages come to life." },
  ]


  return (
    <>
      <div className="container-fluid">
        <nav className="navbar fixed-top">
          <div className="logo">
            <a href="#scrollspyHeading5"><img src="images/hplogo.png" className='harshlogo' /></a>
          </div>
          <div className='divbar'>
            <ul className="navigation-link" id="navbar-example2">
              <a href="#" className="navigation-link1"><li  >Home</li></a>
              <a href="#scrollspyHeading2" className="navigation-link1"><li  >About</li></a>
              <a href="#scrollspyHeading3" className="navigation-link1"><li  >Skills</li></a>
              <a href="#scrollspyHeading4" className="navigation-link1"><li  >Work</li></a>
              <a href="#scrollspyHeading6" className="navigation-link1"><li  >Contact</li></a>
            </ul>
          </div>
          <div className=''>
            <button className="btn download"><a href="" className="down1" download>Download CV</a></button>
            <div className="hambutton">
              <button className="hambutton1">
                <div className="hamburger" >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </button>
              <ul className="hamnav-link">
                <li className="hamnav-link1" ><a className="hamnav" href="#">Home</a></li>
                <li className="hamnav-link1" ><a className="hamnav" href="#scrollspyHeading2">About</a></li>
                <li className="hamnav-link1" ><a className="hamnav" href="#scrollspyHeading3">Skills</a></li>
                <li className="hamnav-link1" ><a className="hamnav" href="#scrollspyHeading4">Work</a></li>
                <li className="hamnav-link1" ><a className="hamnav" href="#scrollspyHeading6">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav >
        <section className=''>
          <div id="carouselExampleFade" className="tab carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <video className="" controls loop autoPlay>Your browser does not support the &lt;video&gt; tag.
                  <source src="images/campfire.mp4" />
                </video>
              </div>
              <div className="carousel-item">
                <video className="" controls loop autoPlay>Your browser does not support the &lt;video&gt; tag.
                  <source src="images/intothewoods.mp4" />
                </video>
              </div>
              <div className="carousel-item">
                <video className="" controls loop autoPlay>Your browser does not support the &lt;video&gt; tag.
                  <source src="images/lakefrontcabin.mp4" />
                </video>
              </div>
              <div className="carousel-item">
                <video className="" controls loop autoPlay>Your browser does not support the &lt;video&gt; tag.
                  <source src="images/intothevalley.mp4" />
                </video>
              </div>
            </div>
            <div className="arrow">
              <button className="carousel-control-prev arrow1" style={{ transform: `scaleX(1) translateX(-${offsetx * 0.3}px)` }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next arrow2" style={{ transform: `scaleX(1) translateX(${offsetx * 0.3}px)` }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </div >

      <section className='section1'>
        <div>
          <div className="hello">
            Hello,<br />My name is</div>
          <img className="scrollspy-example harshimg" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabIndex="0" id="scrollspyHeading5" src="images/orang.png" />
          <div className="hello1">Hello,<br />My name is</div>
          <div className="harshad" >
            Harshad Pawar
          </div>

          <div className="mern">
            <div >UI/UX Designer | MERN Stack Developer
            </div>
            {/* <div className='harshimg1'>
               <img className="harshimg" src="images/orange1.png" />
            </div> */}
          </div>
        </div>
      </section>
      <div className='img1'>

      </div>
      {/* 
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div> */}



      {/* <img src="images/harshad69.png" className="harshimg" /> */}
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <Aboutnav />
      </div>
      <section className='black'>
        <div className="eat">I eat,drink & breathe design.It's what I do. </div>
        <div className="mechanical">I am a Mechanical Engineer,<br />
          but professionally<br />
          a UI/UX Designer &<br />
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

            <h6 className="myperson">My Goals</h6>
            <hr />
            <p className="myperson1">I am a passionate.
              I love what I do.<br />
              Always craving to improve and learn new skills.<br />
            </p>
          </div>

        </div>
        <div className='myself1'>
          <div className="strength">
            <h6 className="myperson">My Strengths</h6><hr />
            <p className="myperson1">I am a passionate.
              I love what I do.<br />
              Always craving to improve and learn new skills.<br />
            </p>
          </div>
          <div className="passion">
            <h6 className="myperson">My Passion</h6><hr />
            <p className="myperson1">I am a passionate.
              I love what I do.<br />
              Always craving to improve and learn new skills.<br />
            </p>
          </div>
        </div>
      </section>
      <div className="myskill">I design & develop websites that are...</div>
      <div className='ad'>
        <div className="adverb">
          {icons1.map(a =>
            <div className="adverbs">
              <div>
                <div className="iconss">{a.icon}</div>
                <div className="title">{a.title} <hr /></div>
              </div>
              <div className="msgg">{a.msg}</div>
            </div>
          )}

        </div>
        <div className="adverb1">
          {icons2.map(a =>
            <div className="adverbs">
              <div>
                <div className="iconss">{a.icon}</div>
                <div className="title">{a.title} <hr /></div>
              </div>
              <div className="msgg">{a.msg}</div>
            </div>
          )}
        </div>
      </div>
      <section className="design">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
          <div className="myskill1" id="scrollspyHeading3">Skills</div>
        </div>
        <div className='black1'>
          <div className="mernskill">
            {Pro.map((z) => <Progress id={z.id} name={z.name} percent={z.progress} width={z.width} />)}
          </div>
        </div>
      </section>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <Worknav />
      </div>
      <div className="cardset">
        <div className='cardsback'>
          <h5 className="card-title">TO-DO List</h5>
          <p className="card-text2">Interactive adding,deleting,saving your notes.</p>
          <p className="card-text1">Website-<a href="https://todolistclientt.herokuapp.com/">https://todolistclientt.herokuapp.com/</a></p>
        </div>
      </div>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <Contactnav />
      </div>
      <div className="contactform">
        <div className="contactback">
          <div className="interest">
            Hi,I am interested in freelance opportunities.<br />However,if you have any other request don't hesitate to contact me using the given fomr either.<hr />
          </div>
          <div>
            <form >
              <div>
                <input type="text" className="name1" placeholder="Name" /><br />
                <input type="text" className="email" placeholder="Email" /><br />
                <textarea type="text" className="message" placeholder="Write message" /><br />
                <button type="submit" className="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="backtotop"><a href="#" className='back'>Back To Top</a></div>

    </>
  );
}

export default App;
