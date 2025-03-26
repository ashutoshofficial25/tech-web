import React from "react";
import {
  MapContainer as LeafletMapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [28.6163, 77.3757]; // Coordinates for Sector 61, Noida

const MyMapContainer = () => {
  return (
    <LeafletMapContainer
      center={position}
      zoom={15}
      attributionControl={false}
      scrollWheelZoom={true} // Enable zooming with the scroll wheel
      zoomControl={true} // Enable zoom control buttons (+/-)
      style={{ height: "560px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>📍 148B, Block D, Sector 61, Noida, Uttar Pradesh 201301</Popup>
      </Marker>
    </LeafletMapContainer>
  );
};

export default MyMapContainer;
