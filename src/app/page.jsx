"use client";
import Image from "next/image";
import { useRef } from "react";
import "./style.css";

export default function Home() {
  const sliderRef = useRef(null);

  const activate = (e) => {
    const items = sliderRef.current.querySelectorAll(".item");

    if (e.target.matches(".next")) {
      sliderRef.current.appendChild(items[0].cloneNode(true));
      sliderRef.current.removeChild(items[0]);
    }

    if (e.target.matches(".prev")) {
      sliderRef.current.insertBefore(
        items[items.length - 1].cloneNode(true),
        items[0]
      );
      sliderRef.current.removeChild(items[items.length - 1]);
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul className="slider" ref={sliderRef}>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://cdn-3.expansion.mx/dims4/default/82048d0/2147483647/strip/true/crop/2107x1423+0+0/resize/1200x810!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F34%2F11ce48a3419c8f0f7f8ccc772ef0%2Fistock-880471902.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">TITULO 1</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.{" "}
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/04/Tijuana-Baja-California.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">TITULO 2</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.{" "}
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://www.eleconomista.com.mx/__export/1525233700846/sites/eleconomista/img/2018/05/01/tijuana05.jpg_1902800913.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">TITULO 3</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.{" "}
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://lp-cms-production.imgix.net/2023-02/GettyImages-996576060.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">TITULO 4</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://www.prologis.mx/sites/mexico/files/images/2022/01/mx_tijuana-mexico.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">TITULO 5</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://cancuntriptips.com/wp-content/uploads/2019/12/natal-tijuana.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">TITULO 6</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav">
          <button className="btn prev" onClick={activate}>
            previo
          </button>
          <button className="btn next" onClick={activate}>
            siguiente
          </button>
        </nav>
      </main>
    </>
  );
}
