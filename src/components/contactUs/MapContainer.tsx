import React from "react";
import {
  MapContainer as LeafletMapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [28.6163, 77.3757];

const MyMapContainer = () => {
  return (
    <LeafletMapContainer
      center={position}
      zoom={15}
      attributionControl={false}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{ height: "560px", width: "100%", zIndex: 2 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>📍 148B, Block D, Sector 61, Noida, Uttar Pradesh 201301</Popup>
      </Marker>
    </LeafletMapContainer>
  );
};

export default MyMapContainer;
