import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import AILabHeader from './components/pagenavbar'
import {Container, Row, Col, Image} from 'react-bootstrap';

function App() {
  /*
  const [count, setCount] = useState(0);

  
  const [array, setArray] = useState([]);

  // Make a connect request to the backend
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.names);
    console.log(response.data.names);
  }

  /** Fetch list of names */
  /*
  useEffect(() => {
    fetchAPI();
  }, []);
  
  */

  /**
   * First container: Main landing page
   * Second Container: Information about the lab's activities
   */

  return (
    <Container fluid>

      <AILabHeader/>
      
      
      <Container className='p-5'>
           <Row>
            <Col>
                <h1 className='align-center'>Artificial Intelligence, Cybercrime, and Cybersecurity Research and Education Nexus (AI-CYREN) Lab</h1>
                <br/>
                
                <Image src="src/assets/ai-cyren-home-image.jpg" thumbnail/>
            </Col>
           </Row>

      </Container>
  
        <Container className='p-4'>
          <Row>
            <Col className='col-md-8'>
              <p className='text-start fs-5'>The <b>AI-CYREN Lab</b> (Artificial Intelligence, Cybercrime, Cybersecurity, and Online Hate Research and Education Nexus) adopts a social science–driven approach to the study of cybersecurity and cybercrime. It seeks to advance interdisciplinary research and education at the intersection of technology and society. <br/> <br/> Through this integrative framework, the lab fosters a creative, holistic, and nuanced understanding of cyberattacks, cybercrime, cybersecurity, and AI phenomena.</p>
            </Col>
            <Col className='col-md-4 align-items-start'>
              <Image src="src/assets/umllogo.svg" width={"250"} height={"250"} rounded/>
            </Col>
          </Row>
        </Container>
        
      
        <footer>
          <Container>
            <p>Claire Lee 2025</p>
          </Container>
          
        </footer>
        
        
        {
          /** EXAMPLE: Mapping data from the backend to the front */

          /*
          
          
          array.map((name, index) => (
            <div key={index}>
              <h1>{name}</h1>
              <br></br>
            </div>
          ))
          */
        }
      
    </Container>
    
  )
}

export default App
