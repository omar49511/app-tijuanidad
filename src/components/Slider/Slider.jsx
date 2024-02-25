"use client";
import { useRef } from "react";
import "./Slider.css";
export default function Slider() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.appendChild(sliderRef.current.firstElementChild);
  };

  const prevSlide = () => {
    sliderRef.current.prepend(sliderRef.current.lastElementChild);
  };
  return (
    <div className="container_slider">
      <div className="slider" ref={sliderRef}>
        <div
          className="slides"
          style={{
            backgroundImage: 'url("/slide_tijuanidad_01.jpeg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage: 'url("/slide_tijuanidad_02.jpeg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage: 'url("/slide_tijuanidad_03.jpeg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage: 'url("/slide_tijuanidad_04.jpeg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage: 'url("/slide_tijuanidad_05.jpeg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage: 'url("/slide_tijuanidad_06.png")',
          }}
        ></div>
      </div>
      <div className="buttons">
        <button className="prev" onClick={prevSlide}></button>
        <button className="next" onClick={nextSlide}></button>
      </div>
    </div>
  );
}
