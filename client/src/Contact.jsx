import AILabHeader from "./components/pagenavbar";
import { Container } from "react-bootstrap";
import MapEmbed from "./components/embeddedMap";
import Footer from "./components/footer";

function Contact() {
    return (
        <div>
            <AILabHeader/>
           
            <Container fluid className="p-5 bg-white">
                 <h1>Want to work with us?</h1>
             
                 <p className="fs-5 text-start">We are always looking for passionate, self-motivated students to join our research projects. </p>
                
                <p className="fs-5 text-start">
                If you are interested in doing a PhD with Dr. Claire S. Lee, please apply to the PhD program <br/> in the School of Criminology and Justice Studies.
                </p>
                <p className="fs-5 text-start">If you are interested in collaborating, please reach out to Dr. Lee via email.</p>
                   <address>
	            <p className="text-start fs-5">
		            Email: <a href="mailto:claire_lee@uml.edu">claire_lee@uml.edu</a> <br/>
					Address: <br/>
					113 Wilder Street<br/>
					Donna Manning School of Social and Health Sciences Building <br/>
					Lowell, MA 01859
				</p>
        	    </address>  

         
               
                
            </Container>

            <Container fluid className="bg-white">
                <MapEmbed/>
            </Container>
            
            {/**Commented out due to formatting issues */}
            <Footer/>
        </div>

    );
}

export default Contact;
