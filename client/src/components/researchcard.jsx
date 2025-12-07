
/**
 * Name: Research Card Component
 * Filename: researchcard.jsx
 * Description: This component is used to list information about each of Dr. Lee's grants. 
 */

/**
 * 
 * @param {*} research_image - Image of the organization providing the grant
 * @param {*} research_name - Name of the organization providing the grant
 * @param {*} research_country - The organization's country of origin
 * @param {*} research_year - The year(s) the grant was awarded 
 * @param {*} research_desc - Brief description of the study the grant was awarded for
 * @returns A component with information about a research grant awarded to Dr. Lee
 */

import { Col, Row, Image } from "react-bootstrap"


function ResearchCard({research_image, research_name, research_country, research_year, research_desc}) {
    return(
        <>
         
                {/**Information for each research grant */}
                <Row role="row" aria-label="research grant info">
                    {/**Grant funder image */}
                    <Col md={4} role="column" aria-label="grant image">
                        <Image src={research_image} fluid/>
                    </Col>
                    {/**Information about the grant itself */}
                    <Col md={8} role="column" aria-label="grant info">
                       
                            <h3><strong>{research_name}</strong>, {research_country}<br/>({research_year})</h3>
                            
                            <p className="fs-4">{research_desc}</p>

                       
                    
                    </Col>
                </Row>
                <hr/>
          
        </>

    )
}

export default ResearchCard