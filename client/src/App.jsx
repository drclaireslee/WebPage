import './App.css';
import AILabHeader from './components/pagenavbar';
import {Container, Row, Col, Image} from 'react-bootstrap';

import homeImage from '/assets/ai-cyren-home-image.jpg';
import umlLogo from '/assets/umllogo.svg';
import Footer from './components/footer';

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



  return (
    <div>
      <AILabHeader/>
      
      {/** Name of the Lab*/}
      <Container fluid className='p-5 bg-dark' role='section' aria-label='ai-cyren lab landing section'>
           <Row>
            <Col>
                <h1 className='align-center text-light' role="title" aria-label='ai-cyren lab full title'>Artificial Intelligence, Cybercrime, and Cybersecurity Research and Education Nexus (AI-CYREN) Lab</h1>
                <br/>
                { /*<Image src={homeImage} alt='cybercrime image' thumbnail/> */}
            </Col>
           </Row>
      </Container>

      {/*** Information about the AI-CYREN Lab */}
        <Container fluid className='bg-white' role='section' aria-label='ai-cyren lab information'>
          <Row>
            <Col className='col-md-9 p-4'>
              <p className='text-start fs-5'>The <b>AI-CYREN Lab</b> (Artificial Intelligence, Cybercrime, Cybersecurity, and Online Hate Research and Education Nexus) adopts a social science–driven approach to the study of cybersecurity and cybercrime. It seeks to advance interdisciplinary research and education at the intersection of technology and society.</p>
              <p className='text-start fs-5'>Through this integrative framework, the lab fosters a creative, holistic, and nuanced understanding of cyberattacks, cybercrime, cybersecurity, and AI phenomena.</p>
            </Col>
            <Col className='col-md-3 align-items-start'>
              <Image src={umlLogo} width={"250"} height={"250"} rounded alt='umass lowell logo'/>
            </Col>
          </Row>
        </Container>
        
  
        
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
        <Footer/>
      
    </div>
    
  )
}

export default App
