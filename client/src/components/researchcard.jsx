import { Container, Col, Row, Card, Button } from "react-bootstrap"

function ResearchCard({research_image, research_name, research_country, research_year, research_desc}) {
    return(
        <Container className="d-flex justify-content-center my-5">
            <Card border="dark">
                <Row>
                    <Col md={4}>
                        <Card.Img variant="top" src={research_image}/>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title><h3><strong>{research_name}</strong>, {research_country} <br/> ({research_year})</h3></Card.Title>
                            
                            <Card.Text><p className="fs-4">{research_desc}</p></Card.Text>

                        </Card.Body>
                    
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}

export default ResearchCard