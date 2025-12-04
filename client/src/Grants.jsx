import AILabHeader from "./components/pagenavbar";
import { Container } from "react-bootstrap";
import ResearchCard from "./components/researchcard";
import research_data from './research_grants.json';
import Footer from "./components/footer";

function ResearchGrants() {
    return (
      
        <div>
            {/** Navigation Bar */}
            <AILabHeader/>
            <Container fluid className='p-5 bg-white' role="page" aria-label='grant page'>
            
               

                
                {/** Main section for research projects */}
                
                    <h1>Research Grants</h1>
            
                    
                    {research_data.map((card, idx) => {
                        return(<ResearchCard key={idx} research_image={card.research_image} research_name={card.research_name} research_country={card.research_country} research_year={card.research_years} research_desc={card.research_desc}/>)
                    })}
                    
                    
                    

             
    
                
                

            </Container>

                <Footer/>
     </div>


    );
}

export default ResearchGrants;