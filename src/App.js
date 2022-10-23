import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar} from 'react-bootstrap'

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
