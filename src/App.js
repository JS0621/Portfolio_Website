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
      <header className="App-header">
        <div className="Intro" id="intro">
        <h3>Hello, I am</h3>
        <br></br>
        <h1 color='#6805F2'>Sebastian Jazmin</h1>
        <p>
        I'm a software engineer willing to take on any challenge. <br></br>
        My main goal is to learn and improve my skill with <br></br>
        software development. Currently I am a student<br></br>
        working towards a bachelor's in computer science<br></br>
        developing the FS Map mobile App. 
        </p>
        </div>
        </header>

        <body>
        <div className="About" id="about">
          <h2>About Me</h2>
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
        </div>
        <div className="Contact" id="contact">
          <h2>Contact Me</h2>
        </div>
        </body>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
