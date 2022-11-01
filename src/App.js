import logo from './logo.svg';
import './App.css';
//Nav Bar Requirements
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar} from 'react-bootstrap'
//npm install bootstrap react-bootstrap
//Tab requierments
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
//npm install react-tabs

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <Navbar bg="back" variant ="dark" fixed="top">
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px"/> 
          {/* Placeholder logo */}
           Logo
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#intro">0. Home</Nav.Link>
          <Nav.Link href="#about">1. About Me</Nav.Link>
          <Nav.Link href="#experience">2. Experience</Nav.Link>
          <Nav.Link href="#projects">3. Projects</Nav.Link>
          <Nav.Link href="#contact">4. Contact Me</Nav.Link>
        </Nav>
      </Navbar>

        <div className="Intro" id="intro">
        <br></br>
        <h3>Hello, I am</h3>
        <br></br>
        <h1 className='name'>Sebastian Jazmin</h1>
        <p>
        I'm a software engineer willing to take on any challenge. <br></br>
        My main goal is to learn and improve my skill with <br></br>
        software development. Currently I am a student<br></br>
        working towards a bachelor's in computer science<br></br>
        and also developing the FS Map mobile App. 
        </p>
        </div>

        <body>
        <div className="About" id="about">
          <h2>About Me</h2>
          <p>Hiya! I'm Sebastian Jazmin and my passion has always<br></br>
been learning. My interest in computer science came<br></br>
from curiosity. I had been using computers to learn<br></br>
more, when I began questioning how computers <br></br>
worked. So I researched it.<br></br>
<br></br>
Now I'm in university pursuing a bachelor's in <br></br>
computer science. I spent my time in high school<br></br>
working on certifications like Microsoft Office <br></br>
Specialist and Internet Business Associate. <br></br>
Thoughout University, I have been delving deeper<br></br>
into computers<br></br>

I've been learning the following technologies:<br></br>
Python,  Reactjs<br></br>
C#,  Javascript<br></br>
C++, SQL<br></br>
Java,  MIPS Assembly</p>

        </div>
        <div className="Experience" id="experience">
        <h2>Experience</h2>
        <Tabs classname="Tabs">
    <TabList>
      <Tab>Full Sail University</Tab>
      <Tab>Kids Cancer Foundation</Tab>
    </TabList>
    <TabPanel>Student @ <a href="https://www.fullsail.edu/" target="_blank">Full Sail University</a><br>
    </br>August 2021 - Present<br></br>
    I've been learning many coding langues<br></br>
     and practicing them. These languages
    range from high level languages<br></br> like C# to low level language such as MIPS
    Assembly.<br></br>
    I've also began officially making projects throughout my time at Full Sail.</TabPanel>
    <TabPanel>Volunteer Technical Coordinator @ <a href="https://www.kidscancersf.org/" target="_blank">Kids Cancer Foundation</a><br>
    </br>June 2017 - July 2021<br></br>
I would volunteer at KCF as their technical coordinator.<br></br> Whenever it was needed, 
I would provide technical support on<br></br> any issues they were having.
This would range from<br></br> tasks like creating online albums to 
setting up<br></br> consoles for Kid's Night Out.
 I would also tutor <br></br> families on using computers and online safety.</TabPanel>
  </Tabs>

        </div>
        <div className="Projects" id="projects">
          <h2>Projects</h2>
          <Tabs classname="Tabs">
    <TabList>
      <Tab>Website</Tab>
      <Tab>FS Map</Tab>
      <Tab>Game of Life</Tab>
    </TabList>
    <TabPanel>
      I created this website for two reasons.
      The first was<br></br> to learn Reactjs, a popular library for creating websites.<br></br>
      The second reason was to have a place<br></br> to refer people to when they want to know about<br></br> my work. It was my first time making <br></br>
      a website. I like how this came out and it was a great learning experience.
    </TabPanel>
    <TabPanel>
    I developed FS Map with the help of two others in a group called Swift Kings.<br></br>
    We wanted to make an interactive map for our university campus. <br></br>
    We are happy with the outcome and it was great to learn how to work with <br></br>
    Andoid Studio, Google Maps API, Firebase, and Java.
    </TabPanel>
    <TabPanel>
      Conway's Game of Life was my first time using a graphical user interface with C#.<br></br>
      Game of Life is a cellular automaton that follows rules to spread across <br></br>
      defined universe. It was great to learn how to deal with interaction from the user, <br></br>
      most of my work until this point was just console. I learned a lot and it was a fun project.
    </TabPanel>
  </Tabs>
        </div>
        <div className="Contact" id="contact">
          <h2>Contact Me</h2>
          <p>While I am currently focusing on studies, my email is always open.<br></br>
          Just reach out and I'll try my best to respond quickly.</p>
          <br></br>
          {/* Create Button for email */}
          <a href="mailto:sebastian.jazmin.nw@gmail.com" class="mailto">Send me an email</a> 
        </div>
        </body>
    </div>
  );
}

export default App;
