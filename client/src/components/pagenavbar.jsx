
/**
 * Name: AILabHeader / Navbar Component
 * Filename: pagenavbar.jsx
 * Description: This component is the navigation bar for the site
 * 
 */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';
import umlLogo from '/assets/umllogo.svg';

/** Navbar for all of the pages */
function AILabHeader() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Image alt="umass lowell logo" src={umlLogo} width='50' height='50' className='d-inline-block align-start p-1'/>
        <Navbar.Brand href="/">
          Dr. Claire Lee
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"} role='navigation' aria-label='about page'>About</Nav.Link>
            <Nav.Link as={Link} to={"/research"} role='navigation' aria-label='research page'>Research</Nav.Link>
            <Nav.Link as={Link} to={"/teaching"} role='navigation' aria-label='teaching page'>Teaching</Nav.Link>
            <Nav.Link as={Link} to={"/grants"} role='navigation' aria-label='grants page'>Grants</Nav.Link>
            <Nav.Link as={Link} to={"/team"} role='navigation' aria-label='members page'>Members</Nav.Link>
            <Nav.Link as={Link} to={"/activities"} role='navigation' aria-label='activities page'>Activities</Nav.Link>
            <Nav.Link as={Link} to={"/contact"} role='navigation' aria-label='contact page'>Contact</Nav.Link>  
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AILabHeader;



