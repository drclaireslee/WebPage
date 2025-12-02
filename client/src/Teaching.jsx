import React, { useState } from "react";
import AILabHeader from './components/pagenavbar';
import { Container } from "react-bootstrap";
import "./Teaching.css"; // you will create this CSS file with the same styles you used

export default function Teaching() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div>
    <AILabHeader/>
    <Container fluid className='my-1 p-5 bg-white' role="page" aria-label='grant page'>
    <div className="locations-container">
      <h1 className="locations-title">Teaching</h1>

      <div className="locations-list">
        {/* UMass Lowell */}
        <div className="location-card">
          <div className="location-header" onClick={() => toggle("uml")}>            
            <img
              src="./assets/umllogo.svg"
              alt="UMass Lowell Logo"
              className="location-thumb"
            />
            <div className="location-info">
              <h2>UMass Lowell</h2>
              <p>Current Teaching — Graduate & Undergraduate</p>
            </div>
            <span className="expand-icon">{expanded === "uml" ? "▲" : "▼"}</span>
          </div>

          {expanded === "uml" && (
            <div className="location-details">
              <h3>Graduate-Level</h3>
              <ul>
                <li>Issues in Computer Crime & Cyber Security</li>
              </ul>

              <h3 style={{ marginTop: "1rem" }}>Undergraduate-Level</h3>
              <ul>
                <li>Criminal Justice Statistics</li>
              </ul>
            </div>
          )}
        </div>

        {/* Inha University */}
        <div className="location-card">
          <div className="location-header" onClick={() => toggle("inha")}>            
            <img
              src="./assets/inhalogo.png"
              alt="Inha University Logo"
              className="location-thumb"
            />
            <div className="location-info">
              <h2>Inha University</h2>
              <p>Current Teaching — China Studies & Data Courses</p>
            </div>
            <span className="expand-icon">{expanded === "inha" ? "▲" : "▼"}</span>
          </div>

          {expanded === "inha" && (
            <div className="location-details">
              <ul>
                <li>
                  <strong>Big Data & Industrial Geography in China</strong>
                  <ul>
                    <li>Combined big data, ethics & cybercrime with China focus</li>
                    <li>Lab practices: R, NodeXL, UCINET</li>
                    <li>Innovative Teaching Fund awarded</li>
                  </ul>
                </li>
                <li>
                  <strong>Research Methodology</strong>
                  <ul>
                    <li>Lab practices: Excel, SPSS</li>
                  </ul>
                </li>
                <li>
                  <strong>Basic Statistical Analysis for China Studies</strong>
                  <ul>
                    <li>Lab practices: SPSS, R</li>
                    <li>Innovative Teaching Fund awarded</li>
                  </ul>
                </li>
                <li>Regions and Provinces of China (Problem-based learning)</li>
                <li>Seminar on Chinese Studies (Taught in Chinese)</li>
                <li>Global Migration, Deviance & Crime (Graduate, English)</li>
                <li>Im/migration in Asia and Beyond (Graduate)</li>
              </ul>
            </div>
          )}
        </div>

        {/* Past Teaching */}
        <div className="location-card">
          <div className="location-header" onClick={() => toggle("past")} style={{ justifyContent: "space-between" }}>            
            <div className="location-info" style={{ flex: 1, textAlign: "center", pointerEvents: "none" }}>
              <h2>Past Teaching</h2>
              <p>Undergraduate & Graduate Courses</p>
            </div>
            <span className="expand-icon">{expanded === "past" ? "▲" : "▼"}</span>
          </div>

          {expanded === "past" && (
            <div className="location-details">

              <h3>Undergraduate-Level Courses</h3>
              <ul>
                <li>Biomedicine and Society — Tembusu College, NUS (2014)**</li>
                <li>Global Media — FASSTrack, NUS (2014)**</li>
                <li>Sociology of Power — NUS (2013)*</li>
                <li>Money, Business & Social Network — NUS (2012)*</li>
                <li>Cyber Hankuk Univ. of Foreign Studies (Online, 2007–2009)</li>
              </ul>

              <h3 style={{ marginTop: "1rem" }}>Graduate-Level Courses</h3>
              <ul>
                <li>Computer & Digital Ethics — Boston Univ. (2018)**</li>
                <li>Trends & Patterns of Cybercrime — Boston Univ. (2016)**</li>
              </ul>

              <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "1rem" }}>* Graduate student instructor  ** Invited guest lecturer</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
}