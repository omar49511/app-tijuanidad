"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { CRS } from "leaflet";
import "./Map.css";

const ImageMap = () => {
  const markerLocations = [
    [260, 1030],
    [340, 2000],
    [400, 450],
  ];
  const customIcon = new Icon({
    iconUrl: "/assets/marker.png",
    iconSize: [50, 75],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={[300, 500]}
      zoom={1}
      minZoom={0}
      maxZoom={5}
      maxBounds={[
        [0, 0],
        [702, 3000],
      ]}
      crs={CRS.Simple}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
      }}
    >
      <ImageOverlay
        url="/assets/metropoli2go_map.png"
        bounds={[
          [0, 0],
          [702, 3000],
        ]}
      />
      {markerLocations.map((location, index) => (
        <Marker
          key={index}
          position={location}
          icon={customIcon}
          className="custom-marker"
        >
          <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ImageMap;
