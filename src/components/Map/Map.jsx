"use client";
import React, { useRef, useState } from "react";
import "./Map.css";
import Image from "next/image";

export default function Map({ imageUrl }) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef();

  const handleScroll = (event) => {
    const delta = event.deltaY;
    const newScale = scale + delta * 0.01;
    setScale(Math.min(Math.max(newScale, 1), 3));

    event.preventDefault();
  };

  const handleMouseDown = (event) => {
    let startX = event.clientX;
    let startY = event.clientY;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      setOffset({
        x: offset.x + deltaX,
        y: offset.y + deltaY,
      });

      startX = moveEvent.clientX;
      startY = moveEvent.clientY;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const containerStyle = {
    width: "3000px", // Ancho específico del contenedor
    height: "720px", // Alto específico del contenedor
    overflow: "hidden",
  };

  const imageStyle = {
    transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`,
  };
  return (
    <div
      className="containerMap"
      onWheel={handleScroll}
      onMouseDown={handleMouseDown}
      ref={containerRef}
      style={containerStyle}
    >
      <Image
        className="mapImage"
        src={imageUrl}
        alt="Mapa"
        style={imageStyle}
        width={3000}
        height={720}
      />
    </div>
  );
}
