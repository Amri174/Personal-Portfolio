import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import wimg from "../assets/img/wolfthemesolid.png";
export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // // const resumeFileID = '';
  // const resumeFileID = '1OBYGbni3X4toLxjEEXTdlDdWoWVxDAVz'; 
  // // https://drive.google.com/file/d/1OBYGbni3X4toLxjEEXTdlDdWoWVxDAVz/view?usp=sharing
  // const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileID}`;
  const resumeURL = "";

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <img id="wolf-image" src={wimg} alt="wolf" />

              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
              <button>
              <a
                href = {resumeURL}
                className = "resume-download"
                target = "_blank"
                rel = "noopener noreferrer"
              >
              <span>Resume</span>
              </a>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
