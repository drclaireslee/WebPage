import AILabHeader from "./components/pagenavbar";
import { Container } from "react-bootstrap";
import MapEmbed from "./components/embeddedMap";
import Footer from "./components/footer";

function Contact() {
    return (
        <div>
            <AILabHeader/>
           
            <Container fluid className="p-5 bg-white">
                 <h1>Contact Us</h1>
             

                   <address>
	            <p className="text-start fs-5">
		            Email: <a href="mailto:claire_lee@uml.edu">claire_lee@uml.edu</a> <br/>
					Address: <br/>
					113 Wilder Street<br/>
					Donna Manning School of Social and Health Sciences Building <br/>
                    School of Criminology and Justice Studies <br/>
                    University of Massachusetts Lowell <br/>
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
