
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
                      <p className="fs-5 text-white">Deviance and crime in cyberspace (cybercrime, cybersecurity, cyberterrorism)</p>

                    </Col>

                    <Col>
                      <p className="large-emoji">🧠</p>
                      <p className="fs-3 fw-bold text-white">Digital Sociology</p>
                      <p className="fs-5 text-white">Online fraud, Digital sociology</p>

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

              
              {/*Peer-Reviewed Papers */}
              <Container fluid className="p-5 bg-white">
                <h1>Selected Publications</h1>
                <a href="https://scholar.google.com/citations?hl=en&user=PABcsxAAAAAJ&view_op=list_works&sortby=pubdate&inst=8587491165479738887" className="fs-3">Google Scholar</a>
                <h3 className="text-start">Peer-reviewed monographs</h3>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2018. <em>Soft Power Made in China: The Dilemmas of Online and Offline Media and <br/> Transnational Audiences.</em> Palgrave Macmillan.</p>

                <br/>
                <h3 className="text-start">Selected peer-reviewed articles (in English only)</h3>
                <br/>
                <p className="text-decoration-underline fw-bold text-start fs-4">Cybercrime/cybersecurity/terrorism and digital sociology </p>
                
                 
                <p className="text-start fs-4"><b>Lee, C.S.</b>, Merizalde, J.*, Colautti, J.*, An, J., & Kwak, H. 2022. Storm the Capitol: Linking offline political speech and online Twitter extra-representational participation on QAnon and the January 6 insurrection. <em>Frontiers in Sociology,</em>DOI: 10.3389/fsoc.2022.876070</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b>, & Colautti, J.* 2022. ISIS's COVID-19 Messaging on Twitter: An Analysis of Tweet Sentiment and Emotions. <em>Crime & Delinquency,</em> 10.1177/00111287221083881</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b>, & Kim, D. 2022. Pathways to cybersecurity awareness and cybersecurity behaviors in South Korea. <em>Journal of Computer Information Systems,</em> 10.1080/08874417.2022.2031347</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2022. Analyzing Zoombombing as a new communication tool of cyberhate in the COVID-19 era.” <em>Online Information Review,</em> 46(1), 147-163.</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b>, & Jang, A. 2021. Questing for justice on Twitter: Topic modeling of #StopAsianHate discourses in the wake of Atlanta shooting.” <em>Crime & Delinquency,</em> https://doi.org/10.1177/00111287211057855</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2021. How online fraud victims are targeted in China: A crime script analysis of Baidu C2C fraud. Crime & Delinquency, https://doi.org/10.1177/00111287211029862</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2021. “Contact tracing apps for self-quarantine in South Korea: Rethinking datafication and dataveillance in the COVID-19 age.” <em>Online Information Review,</em> 45(4), 810-829.</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b>, Choi, K.-S., Shandler, R.*, & Kayser, C. 2021. “Mapping global cyberterror networks: A study of al Qaeda and ISIS cyberterror events, 2011-2016.” <em>Journal of Contemporary Criminal Justice,</em> 37(3), 333-355.</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2021. “Online fraud victimization in China: A case study of Baidu Tieba.” <em>Victims & Offenders,</em> 16(3), 343-362.</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2020. “A Crime Script Analysis of Transnational Identity Fraud: Migrant Offenders' Use of Technology in South Korea.” <em>Crime, Law and Social Change,</em> 74(2): 201-218. https://doi.org/10.1007/s10611-020-09885</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2019. “Datafication, Dataveillance, and the Credit Score System as China's New Normal.” <em>Online Information Review,</em> 43(6): 952-970.</p>
                <p className="text-start fs-4">Choi, K.-S., & <b>Lee, C.S.</b>, & Cadigan, R. 2018. Spreading Propaganda in Cyberspace: Comparing Cyber-Resource Usage of Al Qaeda and ISIS. <em>International Journal of Cybersecurity Intelligence and Cybercrime,</em> 1(1): 21-39.</p>
                <p className="text-start fs-4">Choi, K.-S., & <b>Lee, C.S.</b>. 2018. “The Present and Future of Cybercrime, Cyberterrorism, and Cybersecurity.” <em>International Journal of Cybersecurity Intelligence and Cybercrime,</em> 1(1), 1-4.</p>
                <br/>
                <p className="text-decoration-underline fw-bold text-start fs-4">Cybercrime/cybersecurity/terrorism and digital sociology </p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2021. “Contested everyday cultural citizenship: “Mixed race” children and their ethnicized citizenship in South Korea.” <em>Ethnic and Racial Studies,</em> 44(7), 1231-1249.</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2019. “Global Linguistic Capital and Global Cultural Capital: International Student Migrants in China's Two-Track International Education Market.” <em>International Journal of Educational Development</em> 67: 94-102.</p>
                <p className="text-start fs-4"><b>Lee, Claire S.</b> 2018. “Experiencing “Internationalized Precarity” in Inter-Asian Film Production: A Case Study of Seediq Bale.” <em>Poetics</em> 66: 42-53. </p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2017. “Between Institutional Exclusion and Inclusion: Comparing Old and New Chinese Immigrants in South Korea.”  <em>Translocal Chinese: East Asian Perspectives</em> 11(2): 250-277.</p>
                <p className="text-start fs-4"><b>Lee, C.S.</b> 2017. “Narratives of 'Mixed Race' Youth in South Korea: Racial Order and Inbetweenness.” <em>Asian Ethnicity</em> 18(4): 522-542. (Scopus)</p>
                
              </Container>

              <Footer/>
              

    
      
    </div>
    );
}

export default Research;