
import AILabHeader from "./components/pagenavbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "./components/footer";

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
                    
                  </Col>
                  <Col md={6}>
                   <p className="fs-4 text-start text-danger">METHODS</p>
                   <p className="fs-5 text-start">Qualitative (ethnography, interviews, (digital) ethnography), quantitative, big data and mixed methods (incl. social network analysis, semantic network analysis, GIS, web crawling, data mining etc.)</p>

                  </Col>

                 </Row>
            </Container>

             <Container fluid className="p-5 maroon">
                  <h1 className="text-white">Key Research Expertise</h1>
                  <p className="fs-4 text-white">My research expertise revolves around the following areas.</p>
                  <Row className="d-flex justify-content-center"> 
                    <Col>
                      <p className="large-emoji">💻</p>
                      <p className="fs-3 fw-bold text-white">Cybercrime and Digital Sociology</p>
                      <p className="fs-5 text-white">Deviance and crime in cyberspace (cybercrime, cybersecurity, cyberterrorism), Online fraud, Digital sociology</p>

                    </Col>

                    <Col>
                      <p className="large-emoji">✨</p>
                      <p className="fs-3 fw-bold text-white">AI/Cybersecurity Education</p>
                      <p className="fs-5 text-white">AI education, Cybersecurity education</p>
                    </Col>
                    <Col>
                      
                      <p className="large-emoji">🌏</p>
                      <p className="fs-3 fw-bold text-white">Global Media and Im/migration</p>
                      <p className="fs-5 text-white">Cross-border mobilities of People, Knowledge, Culture</p>
                    </Col>
                  </Row>
              </Container>
              <Container fluid className="p-5 bg-white">
                <h1>Books</h1>
                
                <Row className="p-4">
                  <Col>
                    <img src="/assets/soft_power.jpg" alt="soft power book" width={250} height={350} fluid className="p-3"/>
                    <p className="fs-4">Soft Power: Made in China</p>
                    <a href="https://www.amazon.com/Soft-Power-Made-China-Transnational/dp/3030065936" className="fs-5">Available on Amazon</a>
                  </Col>
                   <Col>
                    <img src="/assets/ai_and_cybersec.jpg" alt="soft power book" width={250} height={350} fluid className="p-3"/>
                    <p className="fs-4">AI And Cybersecurity (Korean)</p>
                    <a href="https://product.kyobobook.co.kr/detail/S000216868690" className="fs-5">Available on Kyobo</a>
                  </Col>
                </Row>
              </Container>

              {/*Peer-Reviewed Papers */}
              <Container fluid className="p-5 bg-white">
                <h1>Selected Publications</h1>
                <p className="fs-4"><a href="https://scholar.google.com/citations?hl=en&user=PABcsxAAAAAJ&view_op=list_works&sortby=pubdate&inst=8587491165479738887">Google Scholar</a></p>
              </Container>

              <Footer/>
              

    
      
    </div>
    );
}

export default Research;