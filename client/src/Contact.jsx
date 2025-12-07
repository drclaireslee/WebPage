/**
 * Name: Contact Page
 * Filename: Contact.jsx
 * Description: This page contains contact information for Dr. Claire Lee
 * 
 */

import AILabHeader from "./components/pagenavbar";
import { Container, Row, Col } from "react-bootstrap";
import MapEmbed from "./components/embeddedMap";
import Footer from "./components/footer";

function Contact() {
    return (
        <div>
            <AILabHeader/>
           
           {/**Dr. Lee's University Address */}
            <Container fluid className="p-5 bg-white" role="section" aria-label="contact information">
                 <h1>Contact Me</h1>
                 
                        <address role="address" aria-label="dr. lee class location">
                        <p className="text-start fs-5 align-items-center">
                            Email: <a href="mailto:claire_lee@uml.edu">claire_lee@uml.edu</a> <br/>
                            Address: <br/>
                            113 Wilder Street<br/>
                            Donna Manning School of Social and Health Sciences Building <br/>
                            School of Criminology and Justice Studies <br/>
                            University of Massachusetts Lowell <br/>
                            Lowell, MA 01859
                        </p>
        	            </address>  
                        <iframe width="640px" height="480px" src="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2Fr%2FQSANdPncGm%3Fembed%3Dtrue&data=05%7C02%7CZuriel_Pagan%40student.uml.edu%7C8f2ffb697d014858d8f408de31e06bff%7C4c25b8a617f746f983f054734ab81fb1%7C0%7C0%7C639003037110466043%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=xAr5sRuomIP4HVA6P%2F%2FgJ8XMKM63PA%2FpgzV%2Bqh7%2B6vE%3D&reserved=0" frameBorder="0" marginWidth="0" marginHeight="0" style={{border: 'none', maxWidth:'100%', maxHeight:'100vh'}} allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true"> </iframe>

            </Container>



            {/**Dr. Lee's Location on the Map */}
            <Container fluid className="dark-blue d-flex align-items-center justify-content-center" role="section" aria-label="map section">
                <MapEmbed/>
            </Container>
            

            <Footer/>
        </div>

    );
}

export default Contact;
