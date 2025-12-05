/**
 * Name: Activities Page
 * Filename: Activities.jsx
 * Description: This page contains a list of Dr. Claire Lee's professional activities
 * 
 */

import AILabHeader from "./components/pagenavbar";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";

function Activities() {
    return(
        <div>
            <AILabHeader/>
           
           {/**Dr. Lee's Journal and Media Contributions */}
            <Container fluid className="p-5 bg-white" role="section" aria-label="journal and media contributions">
                 <h1>Professional Activities</h1>
                 <br/>

                 <h3 className="text-start">Journal and proposal reviewer (selected)</h3>

                 {/**English journal contributions */}
                 <p className="text-start fs-4">In English:</p>
                 <ul role="list" aria-label="list of journals reviewed in english">
                    <li className="text-start fs-5">Computers in Human Behavior, 2019 - Present (SSCI)</li>
                    <li className="text-start fs-5">Crime, Law and Social Change, 2018 - Present (SSCI)</li>
                    <li className="text-start fs-5">Computers & Security, 2018 - Present (SCI(E) & Scopus)</li>
                    <li className="text-start fs-5">International Journal of Offender Therapy and Comparative Criminology, 2018 - Present (SSCI)</li>
                    <li className="text-start fs-5">Ethnic and Racial Studies, 2018 - Present (SSCI)</li>
                    <li className="text-start fs-5">Identities: Global Studies in Culture and Power, 2018 - Present (SSCI)</li>
                    <li className="text-start fs-5">Canadian Journal of Communication, 2018 - Present</li>
                    <li className="text-start fs-5">East Asian Science, Technology and Society, 2017 - Present (Scopus)</li>
                    <li className="text-start fs-5">Applied Economics Letter, 2016 - Present (SSCI)</li>
                    <li className="text-start fs-5">Pacific Focus, 2016 - Present (SSCI)</li>
                    <li className="text-start fs-5">International Area Studies Review, 2016 - Present (Scopus)</li>
                    <li className="text-start fs-5">International Journal of Communication (IJoC), 2015 - Present (SSCI)</li>
                    <li className="text-start fs-5">New Media and Society, 2012 - Present (SSCI)</li>
                 </ul>

                  {/**Korean and Chinese journal contributions */}
                 <p className="text-start fs-4">In Korean/Chinese:</p>
                 <ul role="list" aria-label="list of journals reviewed in korean and chinese">
                    <li className="text-start fs-5">Journal of International Area Studies, 2015 – Present (KCI)</li>
                    <li className="text-start fs-5">China and Sinology, 2015 – Present (KCI)</li>
                    <li className="text-start fs-5">Korea Trade-Investment Promotion Agency (KOTRA), Proposal reviewer, 2014 – Present</li>
                    
                 </ul>

                {/**Media and blog contributions */}
                <h3 className="text-start">Contributor to Media and Blogs</h3>
                <ul role="list" aria-label="list of media and blog contributions">
                    <li className="text-start fs-5">World Weekly (世界周刊)/World Journal (世界日報) (U.S.-based Chinese newspaper), 2021 – Present</li>
                    <li className="text-start fs-5">Korean Newspaper Pressian, Section on China Insight, Commentator, 2016 – Present</li>
                    <li className="text-start fs-5">Knowledge Group China-Korea, Founding Member, Contributor, 2015 – Present</li>
                    <li className="text-start fs-5">Korean Newspaper Yonhap News Agency, Commentator, 2015 – Present</li>
                    <li className="text-start fs-5">The USC Center on Public Diplomacy at the Annenberg School (CPD) blog, Invited commentator, 2013 – Present</li>

                </ul>
            </Container>

            {/**Dr. Lee's previous work experiences */}
            <Container fluid className="p-5 maroon" role="section" aria-label="previous work experience">

                <h3 className="text-white text-start">Previous work experience (non-academic positions only)</h3>
                <ul role="list" aria-label="list of previous work experiences">
                    <li className="text-white text-start fs-5">Interpreter, Korean Broadcasting System (KBS), Seoul, South Korea, 201</li>
                    <li className="text-white text-start fs-5">Interpreter, Korean Broadcasting System (KBS), Shanghai, China, 2014</li>
                    <li className="text-white text-start fs-5">Interpreter and production manager, Seediq Bale (Warriors of the Rainbow) (dir. Te-sheng Wei), Taiwan, 2009</li>
                    <li className="text-white text-start fs-5">Research intern, Korean Institute for Curriculum and Evaluation (KICE), Seoul, South Korea, 2009</li>
                    <li className="text-white text-start fs-5">Interpreter and coordinator, Munhwa Broadcasting System (MBC), Hong Kong and Macau, 2008</li>
                    <li className="text-white text-start fs-5">Interpreter and investigator, Division of White Collar Crime, Police Station, Prosecutor’s Office, Seoul, South Korea, 2007 – 2011</li>

                </ul>
                
            </Container>
            <Container fluid className="p-5 dark-blue" role="section" aria-label="other services">
                <h3 className="text-white text-start">Other services</h3>
                <ul role="list" aria-label="list of other services">
                    <li className="text-white text-start fs-5">Treasurer/Secretary, Division of Cybercrime, American Society of Criminology, 2021 – 2023</li>
                    <li className="text-white text-start fs-5">Managing Editor, International Journal of Cybersecurity Intelligence and Cybercrime, 2018 – Present</li>
                    <li className="text-white text-start fs-5">FTA expert (2014 – Present), CSF China Specialist, 2017 – Present</li>
                    <li className="text-white text-start fs-5">Advisory Board member, Korean-Chinese Association of Social Science Studies, 2015 – Present</li>
                    <li className="text-white text-start fs-5">Representative, Graduate Student Council of Sociology, National University of Singapore, 2014</li>
                    <li className="text-white text-start fs-5">Benchmarking exercise committee, Department of Sociology, National University of Singapore, 2013</li>
                    <li className="text-white text-start fs-5">Asian Journal of Social Science, Editorial Assistant, 2010</li>
                    <li className="text-white text-start fs-5">President, Student Council, Graduate School of International and Area Studies, Hankuk University of Foreign Studies, 2007 – 2008</li>
                    <li className="text-white text-start fs-5">BBB Korea, Volunteer Interpreter, 2005 – Present</li>
                </ul>

            </Container>

            <Footer/>
        </div>
    )
}

export default Activities