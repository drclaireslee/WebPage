/**
 * Name: Embedded Map
 * Filename: embeddedMap.jsx
 * Description: This component uses the Leaflet library to show Dr. Lee's office location.
 * This component also uses a .css file (embeddedMap.css) for sizing
 * 
 */

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./embeddedMap.css"; 

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export default function MapComponent() {
  useEffect(() => {
    const map = L.map("map").setView([42.6422, -71.3337], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    const marker = L.marker([42.6422, -71.3337]).addTo(map);
    marker.bindPopup("<b>UMass Lowell South Campus</b><br>Manning Health and Social Sciences Building <br> Room 469");

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-wrapper">
      <h1 className="text-white">My Office</h1>
      <br/>
      <div id="map"></div>
    </div>
  );
}
