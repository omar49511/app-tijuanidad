"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./TimeLine.css";

const timelineData = [
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX13229838190300.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX14093370268777.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX16554393010004.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX16520378910015.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX16520378910019.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX16393385970023.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX15703624630030.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX15587938842794.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  {
    year: "1881",
    imageUrl: "https://www.mexicoenfotos.com/MX14752583558120.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tortor et lectus suscipit vehicula quis gravida enim. Vivamus dignissim sem a varius consectetur.",
  },
  // Add other timeline data objects here
];

export default function TimeLine() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(".timeline-item");
      let min, max;

      timelineItems.forEach((item, i) => {
        min = item.offsetTop;
        max = item.offsetTop + item.offsetHeight;

        if (
          i === timelineItems.length - 2 &&
          window.scrollY > min + item.offsetHeight / 2
        ) {
          setActiveIndex(timelineItems.length - 1);
        } else if (window.scrollY <= max - 40 && window.scrollY >= min) {
          setActiveIndex(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="timeline-container" id="timeline-1">
      <div className="timeline-header">
        <div className="collage flex items-center justify-center flex-col w-full">
          <h2 className="text-center text-base md:text-2xl xl:text-4xl font-bold">
            Para contar la historia, hay que vivirla.
          </h2>
          <p className="text-center text-base md:text-2xl xl:text-4xl font-light">
            ¡Visítanos y tómate la foto!
          </p>
        </div>
      </div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index === activeIndex ? "timeline-item--active" : ""
            }`}
          >
            <div className="timeline__content">
              <Image
                width={500}
                height={400}
                className="timeline__img"
                src={item.imageUrl}
                alt=""
              />
              <h2 className="timeline__content-title">{item.year}</h2>
              <p className="timeline__content-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
