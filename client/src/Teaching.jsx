
import AILabHeader from "./components/pagenavbar";
import { Container, Row, Col, Image, Accordion, ListGroup} from "react-bootstrap";
import Footer from "./components/footer";
 

function Teaching() {
    return (
      <div>
        <Container fluid className="p-5 bg-white" role="section" aria-label="courses">
            <AILabHeader/>
            <h1>Teaching</h1>
            <hr/>
            <h2 role="subsection" aria-label="inha university courses">Currently Teaching</h2>
            <Row>
              <Col md={3}>
                <Image src="/assets/umllogo.svg" alt="umass lowell logo" height={200} width={200} className="img-fluid"></Image>
              </Col>
              <Col md={9}>
                  <br/>
                 <ListGroup as="ul">
                  <ListGroup.Item as="li" className="fs-4 text-start border border-dark">CRIM.6580: Issues in Computer Crime and Cyber Security (Graduate-level)</ListGroup.Item>
                  <ListGroup.Item as="li" className="fs-4 text-start border border-dark">CRIM.4930: Issues in Technology and Security (Undergraduate-level)</ListGroup.Item>
                  <ListGroup.Item as="li" className="fs-4 text-start border border-dark">CRIM.3950: Statistics in Criminal Justice (Undergraduate-level)</ListGroup.Item>
                 </ListGroup>
              </Col>
            </Row>
            <hr/>
            <h2 role="subsection" aria-label="inha university courses">Past Teaching</h2>
            <br/>
            <Row>
              <Col md={3}>
                <Image src="/assets/inha.svg" alt="inha university logo" height={200} width={200} className="img-fluid"></Image>
              </Col>
              <Col md={9}>
                             
                 <ListGroup as="ul"  className="">
                    <ListGroup.Item as="li" className="fs-4 text-start border border-dark">Research Methodology [Excel, SPSS] </ListGroup.Item>
                    <ListGroup.Item as="li" className="fs-4 text-start border border-dark">Basic Statistical Analysis [SPSS, R] <em>(Univ.'s Innovative Teaching Fund awarded)</em> </ListGroup.Item>
                    <ListGroup.Item as="li" className="fs-4 text-start border border-dark">Big Data and Industrial Geography in China [R, NodeXL, UCINET] <em>(Univ.'s Innovative Teaching Fund awarded)</em> </ListGroup.Item>
                    <ListGroup.Item as="li" className="fs-4 text-start border border-dark">Regions and Provinces of China</ListGroup.Item>
                    <ListGroup.Item as="li" className="fs-4 text-start border border-dark">Global Migration, Deviance, and Crime in Everyday Life and Cyberspace <em>(Graduate course in English)</em></ListGroup.Item>
                    <ListGroup.Item as="li" className="fs-4 text-start border border-dark">Im/migration in Asia and Beyond </ListGroup.Item>
                 </ListGroup>
              </Col>
              
            </Row>

        </Container>
        <Footer/>
      </div>
    );
}

export default Teaching;