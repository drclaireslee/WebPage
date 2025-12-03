import { Container, Col, Row, Card, Button } from "react-bootstrap"

function ResearchCard({research_image, research_name, research_country, research_year, research_desc}) {
    return(
        <Container className="p-5">
            <Card border="dark">
                <Row>
                    {/*
                    <Col>
                        <Card.Img variant="top" src={research_image}/>
                    </Col>
                    */}
                    <Col>
                        <Card.Body>
                            <Card.Title><h3><strong>{research_name}</strong>, {research_country}<br/>({research_year})</h3></Card.Title>
                            
                            <Card.Text><p className="fs-4">{research_desc}</p></Card.Text>

                        </Card.Body>
                    
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}

export default ResearchCard