import AILabHeader from "./components/pagenavbar";
import { Container } from "react-bootstrap";
import MapEmbed from "./components/embeddedMap";

function Contact() {
    return (
        <Container fluid>
            <AILabHeader/>
            <h1>Contact Page</h1>
            <MapEmbed/>
        </Container>

    );
}

export default Contact;