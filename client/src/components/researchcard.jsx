import { Container, Col, Row, Card, Button } from "react-bootstrap"

function ResearchCard({research_image, research_name, research_country, research_year, research_desc}) {
    return(
        <Container className="d-flex justify-content-center my-5">
            <Card>
                <Row className="">
                    <Col md={4}>
                        <Card.Img variant="top" src="src/assets/umllogo.svg"/>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title><h3><strong>National Science Foundation</strong>, USA <br/> (2025 – 2028)</h3></Card.Title>
                            
                            <Card.Text><p className="fs-5">“Enhancing Undergraduate STEM Education with Large Language Models: Personalization, Collaboration, and Active Learning” (Co-PI, US$399,724)</p></Card.Text>

                        </Card.Body>
                    
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}

export default ResearchCard