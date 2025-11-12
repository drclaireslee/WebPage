import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./embeddedMap.css"; // your CSS file

export default function MapComponent() {
  useEffect(() => {
    // Initial map setup
    const map = L.map("map").setView([42.6422, -71.3337], 16);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    // Add marker
    const marker = L.marker([42.6422, -71.3337]).addTo(map);

    marker.bindPopup("<b>UMass Lowell South Campus</b><br>Manning Health and Social Sciences Building <br> Room 469");

    // Cleanup map instance on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-wrapper">
      <h2>Interactive Map Example</h2>
      <div id="map"></div>
    </div>
  );
}