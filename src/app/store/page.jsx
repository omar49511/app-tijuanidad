import React from "react";
import Card from "@/components/Card/Card";
import "./VentaCurios.css";
import Image from "next/image";

const cardsData = [
  { id: 1, color: "#f5af40ff" },
  { id: 2, color: "#2aafe8ff" },
  { id: 3, color: "#e81e83ff" },
  { id: 4, color: "#1bb57fff" },
  { id: 5, color: "#f5af40ff" },
  { id: 6, color: "#2aafe8ff" },
  { id: 7, color: "#e81e83ff" },
  { id: 8, color: "#1bb57fff" },
];

export default function page() {
  return (
    <div className="flex flex-col w-[90%] max-w-[1100px]">
      <div className="banner">
        <Image
          className="img"
          width={500}
          height={500}
          src="/assets/tijuanidad_zonkeywalk.png"
          alt="Imagen de curiosidades"
        />
        <div className="content">
          <h1 className="title">Venta de curiosidades</h1>
          <p className="subtitle">
            Explora nuestro catálogo curios que seguramente te sorprenderán.
          </p>
        </div>
        <div className="sphere1"></div>
        <div className="sphere2"></div>
      </div>
      <div className="curios">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}
