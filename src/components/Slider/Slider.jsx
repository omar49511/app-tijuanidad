"use client";
import { useRef, useState, useEffect } from "react";
import "./Slider.css";

export default function Slider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/slide_tijuanidad_01.jpeg",
    "/slide_tijuanidad_02.jpeg",
    "/slide_tijuanidad_03.jpeg",
    "/slide_tijuanidad_04.jpeg",
    "/slide_tijuanidad_05.jpeg",
    "/slide_tijuanidad_06.png",
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    sliderRef.current.appendChild(sliderRef.current.firstElementChild);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    sliderRef.current.prepend(sliderRef.current.lastElementChild);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container_slider">
      <div className="slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slides"
            style={{
              backgroundImage: `url("${slide}")`,
            }}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button className="prev" onClick={prevSlide}></button>
        <button className="next" onClick={nextSlide}></button>
      </div>
    </div>
  );
}
