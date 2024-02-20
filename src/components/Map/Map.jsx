"use client";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";

const ZoomableImage = ({ imageUrl }) => {
  return (
    <div
      style={{
        height: "800px",
        width: "100%",
        backgroundColor: "lightgray",
        marginTop: "40px",
      }}
    >
      <TransformWrapper
        initialPositionX={-1250} // Posición inicial en X
        initialPositionY={0.9} // Posición inicial en Y
        initialScale={3} // Zoom por defecto
      >
        <TransformComponent>
          <div
            style={{
              height: "800px",
              width: "90%",
              backgroundColor: "lightgray",
            }}
          >
            <Image src={imageUrl} alt="test" width={2200} height={550} />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ZoomableImage;
