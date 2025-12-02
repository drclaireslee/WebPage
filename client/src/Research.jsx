
import AILabHeader from "./components/pagenavbar";
import { Container, Row, Col } from "react-bootstrap";

function Research() {
    return (
    <div>
            <AILabHeader/>
           
            <Container fluid className="p-5 bg-white">
                 <h1>Research</h1>
                 <br/>
                 <Row>
                  <Col md={6}>
                    <p className="fs-4 text-start text-danger">MY EXPERIENCE</p>
                    <p className="fs-5 text-start">I am a sociologist by training, but I have been and am collaborating with scholars from different disciplines including criminology, anthropology, media and communication studies, economics, political science, and computer science. </p>
                    <p className="fs-4 text-start text-danger">CURRENT RESEARCH INTERESTS</p>
                    <p className="fs-5 text-start">Deviance and crime in cyberspace, Consequences and complications of digital space/media and (big) data, Digital sociology, Big data, ICT, Global media, International migration, Global sociology</p>
                  </Col>
                  <Col md={6}>
                   <p className="fs-4 text-start text-danger">METHODS</p>
                   <p className="fs-5 text-start">Qualitative (ethnography, interviews, (digital) ethnography), quantitative, big data and mixed methods (incl. social network analysis, semantic network analysis, GIS, web crawling, data mining etc.)</p>
                   <p className="fs-4 text-start text-danger">GEOGRAPHICAL FOCUS</p>
                   <p className="fs-5 text-start">China, Koreas, Inter-Asian connections, United States</p>
                  </Col>

                 </Row>
            </Container>

             <Container fluid className="p-1 maroon">
                  <h1 className="text-white">Key Research Expertise</h1>
                  <p className="fs-4 text-white">My research expertise revolves around two overlapping areas.</p>
                  <Row> 
                    <Col md={6}>
                      <p className="large-emoji">💻</p>
                      <p className="fs-3 fw-bold text-white">Cybercrime and Digital Sociology</p>
                      <p className="fs-5 text-white">Cyberterrorism, Cyberpolicing, Transnational Cybercrime, Datafication, Big Data, Digital Ethics, IT Policy</p>
                    </Col>
 
                    <Col md={6}>
                      <p className="large-emoji">🌏</p>
                      <p className="fs-3 fw-bold text-white">Global Media and Immigration</p>
                      <p className="fs-5 text-white">Cross-border mobilities of People, Knowledge, Culture</p>
                    </Col>
                  </Row>
              </Container>
              <Container fluid className="p-5 bg-white">
                <h1>Selected Publications</h1>
              </Container>
    </div>
    );
}

export default Research;