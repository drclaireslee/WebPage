import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';
import umlLogo from '../assets/umllogo.svg';

/** Navbar for all of the pages */
function AILabHeader() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <Image alt="umass lowell logo" src={umlLogo} width='50' height='50' className='d-inline-block align-start'/>
        <Navbar.Brand href="#home">
          Dr. Claire Lee
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/research"}>Research</Nav.Link>
            <Nav.Link as={Link} to={"/publications"}>Publications</Nav.Link>
            <Nav.Link as={Link} to={"/team"}>Team</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AILabHeader;



