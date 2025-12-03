import { Container, Col, Row, Card, Button } from "react-bootstrap"

function ResearchCard({research_image, research_name, research_country, research_year, research_desc}) {
    return(
        <Container className="p-5 my-5 bg-primary border border-danger">
            
                <Row>
                    {/*
                    <Col>
                        <Card.Img variant="top" src={research_image}/>
                    </Col>
                    */}
                    <Col>
                
                            <h3><strong>{research_name}</strong>, {research_country}<br/>({research_year})</h3>
                            
                            <p className="fs-4">{research_desc}</p>

                    
                    
                    </Col>
                </Row>
        </Container>

    )
}

export default ResearchCard