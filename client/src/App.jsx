import './App.css';
import AILabHeader from './components/pagenavbar';
import {Container, Row, Col, Image} from 'react-bootstrap';

import homeImage from '/assets/ai-cyren-home-image.jpg';
import umlLogo from '/assets/umllogo.svg';

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
      <Container className='p-5 bg-dark' role='section' aria-label='ai-cyren lab landing section'>
           <Row className='m-5'>
            <Col>
                <h1 className='align-center text-light' role="title" aria-label='ai-cyren lab full title'>Artificial Intelligence, Cybercrime, and Cybersecurity Research and Education Nexus (AI-CYREN) Lab</h1>
                <br/>
                <Image src={homeImage} width={800} height={800} alt='cybercrime image' thumbnail/>
            </Col>
           </Row>
      </Container>

      {/*** Information about the AI-CYREN Lab */}
        <Container className='bg-white' role='section' aria-label='ai-cyren lab information'>
          <Row>
            <Col className='col-md-8 p-4'>
              <p className='text-start fs-5'>The <b>AI-CYREN Lab</b> (Artificial Intelligence, Cybercrime, Cybersecurity, and Online Hate Research and Education Nexus) adopts a social science–driven approach to the study of cybersecurity and cybercrime. It seeks to advance interdisciplinary research and education at the intersection of technology and society.</p>
              <p className='text-start fs-5'>Through this integrative framework, the lab fosters a creative, holistic, and nuanced understanding of cyberattacks, cybercrime, cybersecurity, and AI phenomena.</p>
            </Col>
            <Col className='col-md-4 align-items-start'>
              <Image src={umlLogo} width={"250"} height={"250"} rounded alt='umass lowell logo'/>
            </Col>
          </Row>
        </Container>

     
        
     
        
      
        
        {/**Dr. Claire S. Lee is an Assistant Professor in the School of Criminology and Justice Studies and a member of the Center for Internet Security and Forensics Education and Research (iSAFER) at the University of Massachusetts Lowell. She is also a founding member and a researcher of Cybercrime Investigation & Cybersecurity Lab (CIC) at Boston University and an editor of the International Journal of Cybersecurity Intelligence and Cybercrime (IJCIC). She was an Assistant Professor (of Sociology) and was affiliated with the Immigration & Multiculturalism Program (Graduate Studies) at Inha University and was a research affiliate with the University of Massachusetts Boston. She has worked in the educational, media and legal sectors in Hong Kong, Shanghai, Taipei and Seoul, and for the Korea Institute for International Economic Policy (KIEP), one of the leading think tanks in South Korea. She worked for the Division of International Cooperation at the Korean Institute for Curriculum and Evaluation and Tembusu College and Asia Research Institute at the National University of Singapore. She has taught undergraduate and professional courses at Tembusu College, National University of Singapore, Hankuk University of Foreign Studies, and Cyber Hankuk University of Foreign Studies where she taught online courses. She was a volunteer instructor for the Prison Teaching Initiative in Incheon, South Korea. She serves as a Treasurer/Secretary for the Division of Cybercrime at American Society of Criminology. */}
      
            <footer role='section' aria-label='footer'>
                <Container>
                     <br/>
                    <p>&copy; 2025 Dr. Claire S. Lee. All rights reserved.</p>
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
      
    </div>
    
  )
}

export default App
