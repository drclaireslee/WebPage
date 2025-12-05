
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
                  <Row> 
                    <Col>
                      <p className="large-emoji">💻</p>
                      <p className="fs-3 fw-bold text-white">Cybercrime</p>
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
                    <Image src="/assets/soft_power.jpg" alt="soft power book" width={250} height={350} thumbnail fluid/>
                    <p className="fs-4">Soft Power: Made in China</p>
                    <a href="https://www.amazon.com/Soft-Power-Made-China-Transnational/dp/3030065936" className="fs-5">Available on Amazon</a>
                  </Col>
                   <Col>
                    <Image src="/assets/ai_and_cybersec.jpg" alt="ai cybersecurity book" width={250} height={350} thumbnail fluid/>
                    <p className="fs-4">AI And Cybersecurity (Korean)</p>
                    <a href="https://product.kyobobook.co.kr/detail/S000216868690" className="fs-5">Available on Kyobo</a>
                  </Col>
                </Row>
       
              </Container>  

              
              {/*Peer-Reviewed Articles */}
              <Container fluid className="p-5 bg-white">
                <hr/>
                <h1>Articles</h1>
                <a href="https://scholar.google.com/citations?hl=en&user=PABcsxAAAAAJ&view_op=list_works&sortby=pubdate&inst=8587491165479738887" className="fs-3">Google Scholar</a>
               
                <p className="fw-bold text-start fs-4">Cybercrime/cybersecurity/terrorism and digital sociology </p>

                <ul>
                  <li className="text-start fs-5"><b>Lee, C.S.</b>, Merizalde, J.*, Colautti, J.*, An, J., & Kwak, H. 2022. Storm the Capitol: Linking offline political speech and online Twitter extra-representational participation on QAnon and the January 6 insurrection. <em>Frontiers in Sociology,</em>DOI: 10.3389/fsoc.2022.876070</li>
                  <li className="text-start fs-5"><b>Lee, C.S.</b>, & Colautti, J.* 2022. ISIS's COVID-19 Messaging on Twitter: An Analysis of Tweet Sentiment and Emotions. <em>Crime & Delinquency,</em> 10.1177/00111287221083881</li>
                  <li className="text-start fs-5"><b>Lee, C.S.</b>, & Kim, D. 2022. Pathways to cybersecurity awareness and cybersecurity behaviors in South Korea. <em>Journal of Computer Information Systems,</em> 10.1080/08874417.2022.2031347</li>
                  <li className="text-start fs-5"><b>Lee, C.S.</b> 2022. Analyzing Zoombombing as a new communication tool of cyberhate in the COVID-19 era.” <em>Online Information Review,</em> 46(1), 147-163.</li>
                  <li className="text-start fs-5"><b>Lee, C.S.</b>, & Jang, A. 2021. Questing for justice on Twitter: Topic modeling of #StopAsianHate discourses in the wake of Atlanta shooting.” <em>Crime & Delinquency,</em> https://doi.org/10.1177/00111287211057855</li>
                </ul>

                

                <p className="fw-bold text-start fs-4">Im/migration </p>
                <ul>
                  <li className="text-start fs-5"><b>Lee, C.S.</b> 2021. “Contested everyday cultural citizenship: “Mixed race” children and their ethnicized citizenship in South Korea.” <em>Ethnic and Racial Studies,</em> 44(7), 1231-1249.</li>
                  <li className="text-start fs-5"><b>Lee, C.S.</b> 2019. “Global Linguistic Capital and Global Cultural Capital: International Student Migrants in China's Two-Track International Education Market.” <em>International Journal of Educational Development</em> 67: 94-102.</li>
                  <li className="text-start fs-5"><b>Lee, Claire S.</b> 2018. “Experiencing “Internationalized Precarity” in Inter-Asian Film Production: A Case Study of Seediq Bale.” <em>Poetics</em> 66: 42-53. </li>
                  <li className="text-start fs-5"><b>Lee, C.S.</b> 2017. “Between Institutional Exclusion and Inclusion: Comparing Old and New Chinese Immigrants in South Korea.”  <em>Translocal Chinese: East Asian Perspectives</em> 11(2): 250-277.</li>
                  <li className="text-start fs-5"><b>Lee, C.S.</b> 2017. “Narratives of 'Mixed Race' Youth in South Korea: Racial Order and Inbetweenness.” <em>Asian Ethnicity</em> 18(4): 522-542. (Scopus)</li>
                </ul>
                
                
              </Container>

              <Footer/>
              

    
      
    </div>
    );
}

export default Research;