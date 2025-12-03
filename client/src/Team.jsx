import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import './Team.css';
import AILabHeader from "./components/pagenavbar";
import Footer from "./components/footer";
import claireLeePhoto from '/assets/claire_lee_photo.jpg';


const Team = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("https://drclaireslee-backend.vercel.app/api/labMember/all");
        if (!res.ok) throw new Error("Failed to fetch students");
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
        <AILabHeader/>

        {/*** Information about Dr. Claire Lee ***/}      

        <Container fluid className='bg-white' role='section' aria-label='dr claire lee about section' >
            <br/>
            <br/>
            <br/>
            <h1>Meet the Professor</h1>
            <br/>
            <Row>
                <Col className='col-md-3 align-items-start'>
                    <Image src={claireLeePhoto} width={"250"} height={"250"} rounded alt='dr claire lee profile picture' className='p-2'/>
                </Col>
                <Col className='col-md-9'>
                    <p className='text-start fs-5'><b>Dr. Claire S. Lee</b> is an Assistant Professor in the School of Criminology and Justice Studies and a member of the Center for Internet Security and Forensics Education and Research (iSAFER) at the University of Massachusetts Lowell.</p>
                    <p className='text-start fs-5'>As a dedicated teacher-scholar, she is interested in and practices connective learning in her classroom, which is also being translated into her research. In this connection, she received innovative teaching grants (for big data and statistics courses) at her previous institution. She is a recipient of an Outstanding Teaching Award in 2022.</p>
                </Col>
            </Row>
        </Container>

        <Container fluid className='p-2 bg-white' role="section" aria-label='team members'>
            <div className="d-flex justify-content-center my-4">
                <hr style={{
                    width: '80%',     
                    borderTop: '2px solid #676767ff', 
                    borderRadius: '2px'
                }} />
            </div>
            
            <Container fluid className="py-2 bg-white" role="section" aria-label="team members">
                <h3 className="mb-4 text-center">Meet the Members</h3>
                 <br/>
                {students.length === 0 ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    <Row className="g-4 justify-content-center">
                        {students.map((student) => (
                        <Col key={student._id} xs={12} sm={6} md={4} lg={3}>
                            <div className="team-card text-center p-3 bg-light rounded shadow-md h-100 border border-secondary">
                                <img
                                    src={student.imageURL || '/assets/default-profile.jpg'}
                                    alt={student.fullName}
                                    className="img-fluid rounded-circle mb-3"
                                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                />
                                <h5 className="mb-1">{student.fullName}</h5>
                                <p className="text-muted">{student.type}</p>
                                <p className="text-truncate" style={{ fontSize: '0.9rem' }}>
                                    <b>Email:</b> {student.email ? student.email : 'N/A'}
                                </p>
                            </div>
                        </Col>
                        ))}
                    </Row>
                )}
                <br/>
                <br/>
            </Container>
        </Container>


        <Footer/>
    </div>
  );
};

export default Team;
