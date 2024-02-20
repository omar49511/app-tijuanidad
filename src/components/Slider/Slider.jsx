import React from "react";
import "./Slider.css";
export default function Slider() {
  return (
    <div className="container_slider">
      <div className="slider">
        <div
          className="slides"
          style={{
            backgroundImage:
              'url("https://lp-cms-production.imgix.net/2023-02/GettyImages-996576060.jpg")',
          }}
        >
          <div className="content">
            <div className="name">
              <span className="blue">We</span> <span className="red">Are</span>{" "}
              Tijuanidad
            </div>
            <div className="des">¡Visítanos y tómate la foto!</div>
          </div>
        </div>
        <div
          className="slides"
          style={{
            backgroundImage:
              'url("https://lp-cms-production.imgix.net/2023-02/GettyImages-996576060.jpg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage:
              'url("https://cdn-3.expansion.mx/dims4/default/82048d0/2147483647/strip/true/crop/2107x1423+0+0/resize/1200x810!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F34%2F11ce48a3419c8f0f7f8ccc772ef0%2Fistock-880471902.jpg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage:
              'url("https://cdn-3.expansion.mx/dims4/default/82048d0/2147483647/strip/true/crop/2107x1423+0+0/resize/1200x810!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F34%2F11ce48a3419c8f0f7f8ccc772ef0%2Fistock-880471902.jpg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage:
              'url("https://www.viajarsandiego.com/img/tijuana-san-diego.jpg")',
          }}
        ></div>
        <div
          className="slides"
          style={{
            backgroundImage:
              'url("https://www.viajarsandiego.com/img/tijuana-san-diego.jpg")',
          }}
        ></div>
      </div>
      <div className="buttons">
        <button className="prev"></button>
        <button className="next"></button>
      </div>
    </div>
  );
}
