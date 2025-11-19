import AILabHeader from "./components/pagenavbar";
import { Container } from "react-bootstrap";
import ResearchCard from "./components/researchcard";
import research_data from './research_grants.json';

function ResearchGrants() {
    return (
      
        <div>
            {/** Navigation Bar */}
            <AILabHeader/>
            <Container className='my-1 p-5 bg-white' role="page" aria-label='grant page'>
            
               

                
                {/** Main section for research projects */}
                <Container role="section" aria-label="research grants">
                    
                    <h1>Research Grants</h1>
                    

            
                    
                    {research_data.map((card, idx) => {
                        return(<ResearchCard key={idx} research_image={card.research_image} research_name={card.research_name} research_country={card.research_country} research_year={card.research_years} research_desc={card.research_desc}/>)
                    })}
                    
                    

                </Container>

    
                
                <footer role="section" aria-label="footer">
                    <Container fluid>
                        <p>&copy; 2025 Dr. Claire S. Lee. All rights reserved.</p>
                    </Container>
                </footer>
            </Container>
     </div>


    );
}

export default ResearchGrants;