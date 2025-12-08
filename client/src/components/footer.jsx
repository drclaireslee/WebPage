/**
 * Name: Footer Component
 * Filename: researchcard.jsx
 * Description: This component is a common footer for each page. 
 * Inspiration: https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade
 */

import { Container, Row, Col, Stack, Image, Nav } from "react-bootstrap"

function Footer() {
    return(
        <footer role="section" aria-label="footer">
            <Container fluid className="bg-dark text-white p-5">
                <Row role="row" aria-label="footer information">

                    {/*Basic site information */}
                    <Col className="mx-5" role="column" aria-label="dr. lee name and lab name">
                        <Stack>
                            <h2>Dr. Claire Lee</h2>
                            <p>Artificial Intelligence, Cybercrime, Cybersecurity, and Online Hate Research and Education Nexus (AI-CYREN) Lab</p>
                        </Stack>
                    </Col>

                    {/*Links to each page */}
                    <Col role="column" aria-label="list of pages">
                        <Nav className="flex-column">
                            Pages
                            <a href={"/"} role='navigation' aria-label='about page'>About</a>
                            <a href={"/research"} role='navigation' aria-label='research page'>Research</a>
                            <a href={"/teaching"} role='navigation' aria-label='teaching page'>Teaching</a>
                            <a href={"/grants"} role='navigation' aria-label='grants page'>Grants</a>
                            <a href={"/team"} role='navigation' aria-label='members page'>Members</a>
                            <a href={"/contact"} role='navigation' aria-label='contact page'>Contact</a>
                            <a href={"/activities"} role='navigation' aria-label='contact page'>Activities</a>
                        </Nav>
                    </Col>

                    {/*Section for logging in and adding lab members (will be removed for client version) */}
                    <Col role="column" aria-label="login info">
                        <Nav className="flex-column">
                            Admin Portal
                            <a href={"https://drclaireslee-backend.vercel.app/homepage.html"} role='navigation' aria-label='admin page'>Admin Page</a>
                            <a href={"https://drclaireslee-backend.vercel.app/login.html"} role='navigation' aria-label='admin login'>Login</a>
                        </Nav>
                    </Col>
                </Row>
                <p className="text-white p-2">&copy; 2025 Dr. Claire S. Lee. All rights reserved.</p>
            </Container>
            
            

        </footer>
    )
}

export default Footer