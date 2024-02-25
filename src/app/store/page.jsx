import React from "react";
import Card from "@/components/Card/Card";
import "./VentaCurios.css";
import Image from "next/image";

const cardsData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export default function page() {
  return (
    <div className="flex flex-col w-[90%] max-w-[1100px] -z-10">
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
          <Card key={card.id} id={card.id} />
        ))}
      </div>
    </div>
  );
}
