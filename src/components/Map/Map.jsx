"use client";
import React, { useRef, useState } from "react";
import "./Map.css";
import Image from "next/image";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

export default function Map({ imageUrl }) {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <>
        <button onClick={() => zoomIn()}>Zoom In</button>
        <button onClick={() => zoomOut()}>Zoom Out</button>
        <button onClick={() => resetTransform()}>Reset</button>
      </>
    );
  };
  return (
    <div className="map">
      <TransformWrapper className="wrapper">
        <Controls></Controls>
        <TransformComponent>
          <Image
            src={imageUrl}
            alt="test"
            className="wrapper__img"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
