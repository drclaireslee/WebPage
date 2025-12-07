
/**
 * Name: Research Page
 * Filename: Teaching.jsx
 * Description: This page contains research done by Dr. Lee
 * 
 */
import AILabHeader from "./components/pagenavbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "./components/footer";

function Research() {
    return (
    <div>
        <AILabHeader/>
           
           {/*Basic information about Dr. Lee's research experience and methods */}
            <Container fluid className="p-5 bg-white" role="section" aria-label="research experience and methods">
                 <h1>Research</h1>
                 <br/>
                 <Row role="row">
                  <Col md={6} role="column" aria-label="my research experience">
                    <p className="fs-4 text-start text-danger">MY EXPERIENCE</p>
                    <p className="fs-5 text-start">I am a sociologist by training, but I have been and am collaborating with scholars from different disciplines including criminology, anthropology, media and communication studies, economics, political science, and computer science. </p>
                    
                  </Col>
                  <Col md={6} role="column" aria-label="my research methods">
                   <p className="fs-4 text-start text-danger">METHODS</p>
                   <p className="fs-5 text-start">Qualitative (ethnography, interviews, (digital) ethnography), quantitative, big data and mixed methods (incl. social network analysis, semantic network analysis, GIS, web crawling, data mining etc.)</p>

                  </Col>

                 </Row>
            </Container>

            {/*Basic information about Dr. Lee's research areas */}
             <Container fluid className="p-5 maroon" role="section" aria-label="key research expertise">
                  <h1 className="text-white">Key Research Expertise</h1>
                  <p className="fs-4 text-white">My research expertise revolves around the following areas.</p>
                  <Row role= "row" aria-label="research areas"> 

                    <Col role="column" aria-label="cybercrime">
                      <p className="large-emoji">💻</p>
                      <p className="fs-3 fw-bold text-white">Cybercrime</p>
                      <p className="fs-5 text-white">Deviance and crime in cyberspace (cybercrime, cybersecurity, cyberterrorism), Online fraud, Digital sociology</p>

                    </Col>

                    <Col role="column" aria-label="ai cybersec education">
                      <p className="large-emoji">✨</p>
                      <p className="fs-3 fw-bold text-white">AI/Cybersecurity Education</p>
                      <p className="fs-5 text-white">AI education, Cybersecurity education</p>
                    </Col>

                    <Col role="column" aria-label="global media">
                      
                      <p className="large-emoji">🌏</p>
                      <p className="fs-3 fw-bold text-white">Global Media and Im/migration</p>
                      <p className="fs-5 text-white">Cross-border mobilities of People, Knowledge, Culture</p>
                    </Col>
                  </Row>
                  
              </Container>

              {/*Links to author's published books */}
              <Container fluid className="p-5 bg-white" role="section" aria-label="published books">
                <h1>Books</h1>
                
                <Row className="p-4" role="row">
                  
                  <Col role="column" aria-label="soft power in china book">
                    <Image src="/assets/soft_power.jpg" alt="soft power in china book" width={250} height={350} thumbnail fluid/>
                    <p className="fs-4"><b>Soft Power: Made in China</b></p>
                    <a href="https://www.amazon.com/Soft-Power-Made-China-Transnational/dp/3030065936" className="fs-5">Available on Amazon</a>
                  </Col>

                   <Col role="column" aria-label="ai and cybersecurity book">
                    <Image src="/assets/ai_and_cybersec.jpg" alt="ai cybersecurity book" width={250} height={350} thumbnail fluid/>
                    <p className="fs-4"><b>AI and Cybersecurity</b> (Korean)</p>
                    <a href="https://product.kyobobook.co.kr/detail/S000216868690" className="fs-5">Available on Kyobo</a>
                  </Col>
                </Row>
       
              </Container>  

              
              {/*Link to Peer-Reviewed Articles */}
              <Container fluid className="p-5 bg-white" role="section" aria-label="published articles">
                <h1>Articles</h1>
                <a href="https://scholar.google.com/citations?hl=en&user=PABcsxAAAAAJ&view_op=list_works&sortby=pubdate&inst=8587491165479738887" className="fs-3">Link to Google Scholar</a>
                
              </Container>

              <Footer/>

    </div>
    );
}

export default Research;