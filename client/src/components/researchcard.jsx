import { Container, Col, Row, Card, Image } from "react-bootstrap"

function ResearchCard({research_image, research_name, research_country, research_year, research_desc}) {
    return(
        <>
         
                <Row>
                    <Col md={4}>
                        <Image src={research_image} fluid/>
                    </Col>
                    <Col md={8}>
                       
                            <h3><strong>{research_name}</strong>, {research_country}<br/>({research_year})</h3>
                            
                            <p className="fs-4">{research_desc}</p>

                       
                    
                    </Col>
                </Row>
                <hr/>
          
        </>

    )
}

export default ResearchCard