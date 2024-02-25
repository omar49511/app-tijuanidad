"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ImageMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map", {
        minZoom: 1,
        maxZoom: 5,
        crs: L.CRS.Simple,
      });

      const width = 3000;
      const height = 702;

      const imageUrl = "/assets/metropoli2go_map.png";
      const bounds = [
        [0, 0],
        [height, width],
      ];

      L.imageOverlay(imageUrl, bounds).addTo(map);
      map.fitBounds(bounds);
      map.setMaxBounds(bounds);
      mapRef.current = map;

      const markerLocations = [
        [150, 200],
        [200, 300],
        [300, 400],
        [400, 450],
      ];

      // Crea los marcadores con el icono personalizado y las coordenadas
      markerLocations.forEach((location) => {
        L.marker(location)
          .addTo(map)
          .on("click", () => {
            alert("Haz clic en el marcador");
          });
      });
    }
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "456px", borderRadius: "20px" }}
    ></div>
  );
};

export default ImageMap;
