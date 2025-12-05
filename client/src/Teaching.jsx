/**
 * Name: Teaching Page
 * Filename: Teaching.jsx
 * Description: This page contains a list of courses taught by Dr. Lee
 * 
 */

import AILabHeader from "./components/pagenavbar";
import { Container, Row, Col, Image} from "react-bootstrap";
import Footer from "./components/footer";
 

function Teaching() {
    return (
      <div>
        <Container fluid className="p-5 bg-white" role="section" aria-label="teaching page">
            <AILabHeader/>
            <h1>Teaching</h1>
            <hr/>

            {/**List of currently taught courses at UMass Lowell */}
            <h2 role="subsection" aria-label="currently taught courses">Currently Teaching</h2>
            <Row role="row" aria-label="umass lowell courses">
              <Col md={3} role="column">
                <Image src="/assets/umllogo.svg" alt="umass lowell logo" height={200} width={200} className="img-fluid"></Image>
              </Col>
              <Col md={9} role="column">
                <br/>
                 <ul role="list" aria-label="list of courses currently taught at UMass Lowell">
                  <li className="fs-4 text-start">CRIM.6580: Issues in Computer Crime and Cyber Security (Graduate-level)</li>
                  <li className="fs-4 text-start">CRIM.4930: Issues in Technology and Security (Undergraduate-level)</li>
                  <li className="fs-4 text-start">CRIM.3950: Statistics in Criminal Justice (Undergraduate-level)</li>
                 </ul>
              </Col>
            </Row>
            <hr/>

            {/**List of previously taught courses at Inha University */}
            <h2 role="subsection" aria-label="previously taught courses">Past Teaching</h2>
            <br/>
            <Row role="row" aria-label="inha university courses">
              <Col md={3} role="column">
                <Image src="/assets/inha.svg" alt="inha university logo" height={200} width={200} className="img-fluid"></Image>
              </Col>
              <Col md={9} role="column">              
                 <ul role="list" aria-label="list of courses currently taught at UMass Lowell">
                    <li className="fs-4 text-start">Research Methodology [Excel, SPSS] </li>
                    <li className="fs-4 text-start">Basic Statistical Analysis [SPSS, R] <em>(Univ.'s Innovative Teaching Fund awarded)</em> </li>
                    <li className="fs-4 text-start">Big Data and Industrial Geography in China [R, NodeXL, UCINET] <em>(Univ.'s Innovative Teaching Fund awarded)</em> </li>
                    <li className="fs-4 text-start">Regions and Provinces of China</li>
                    <li className="fs-4 text-start">Global Migration, Deviance, and Crime in Everyday Life and Cyberspace <em>(Graduate course in English)</em></li>
                    <li className="fs-4 text-start">Im/migration in Asia and Beyond </li>
                 </ul>
              </Col>
              
            </Row>

        </Container>
        <Footer/>
      </div>
    );
}

export default Teaching;