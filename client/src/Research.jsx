
import AILabHeader from "./components/pagenavbar";
import { Container } from "react-bootstrap";

function Research() {
    return (
        <Container fluid>
            
            {/** Navigation Bar */}
            <AILabHeader/>

 
            {/** Main section for research projects */}
            <Container className="p-5">
                <h1>Funded Research Projects</h1>
                <h3><strong>National Science Foundation</strong>, USA (2025 – 2028)</h3>
                <p className="fs-5">“Enhancing Undergraduate STEM Education with Large Language Models: Personalization, Collaboration, and Active Learning” (Co-PI, US$399,724)</p>

                <h3><strong>Korea Foundation</strong>, Republic of Korea (2023 – 2024)</h3>
                <p className="fs-5">“The Trends, Patterns, and Tactics of Cyberattacks on the Korean Peninsula: An Open Source and Computational Approach” (PI, US$40,000)</p>

                <h3><strong>Department of State</strong>, USA (2023 – 2025)</h3>
                <p className="fs-5">Monitor and Combat Trafficking in Person Office (JTIP) “Child Protection Compact Study – Formative Research on Child Trafficking in Cote d’Ivoire” (Co-PI, US$1,000,000)</p>

                <h3><strong>National Security Agency and National Science Foundation</strong>, USA (2021 – 2023)</h3>
                <p className="fs-5">“GenCyber Summer Camp at the University of Massachusetts Lowell” (Co-PI, US$150,000)</p>

            </Container>

 

            <footer>
                <Container>
                    <p>&copy; 2024 Dr. Claire S. Lee. All rights reserved.</p>
                </Container>
            </footer>
        </Container>

    );
}

export default Research;