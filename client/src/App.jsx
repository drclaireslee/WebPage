/**
 * Name: Home Page
 * Filename: App.jsx
 * Description: This is the landing page for Dr. Claire Lee's website
 * 
 */

import './App.css';
import AILabHeader from './components/pagenavbar';
import {Container, Row, Col, Image} from 'react-bootstrap';

import homeImage from '/assets/ai-cyren-home-image.jpg';
import umlLogo from '/assets/umllogo.svg';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <AILabHeader/>
      
      {/** This is the landing section of the home page */}
      <Container fluid className='p-5 bg-dark' role='section' aria-label='ai-cyren lab landing section'>
           <Row role='row'>
            <Col role='column' aria-label='lab description'>
                <h1 className='align-center text-light' role="title" aria-label='ai-cyren lab full title'>Artificial Intelligence, Cybercrime, and Cybersecurity Research and Education Nexus (AI-CYREN) Lab</h1>
                <br/>
                <Image src={homeImage} alt='cybercrime image' thumbnail fluid/>
            </Col>
           </Row>
      </Container>

      {/*** Information about the AI-CYREN Lab */}
        <Container fluid className='bg-white' role='section' aria-label='ai-cyren lab information'>
          <Row role='row'>
            <Col md={9} className='p-4' role='column' aria-label='lab description'>
              <p className='text-start fs-5'>The <b>AI-CYREN Lab</b> (Artificial Intelligence, Cybercrime, Cybersecurity, and Online Hate Research and Education Nexus) adopts a social science–driven approach to the study of cybersecurity and cybercrime. It seeks to advance interdisciplinary research and education at the intersection of technology and society.</p>
              <p className='text-start fs-5'>Through this integrative framework, the lab fosters a creative, holistic, and nuanced understanding of cyberattacks, cybercrime, cybersecurity, and AI phenomena.</p>
            </Col>
            <Col md={3} className='align-items-start' role='column' aria-label='lab description'>
              <Image src={umlLogo} width={"250"} height={"250"} rounded alt='umass lowell logo'/>
            </Col>
          </Row>
        </Container>
        

        <Footer/>
      
    </div>
    
  )
}

export default App
