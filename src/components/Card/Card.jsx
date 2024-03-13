"use client";
import React, { useState } from "react";
import Image from "next/image";

import "./Card.css";

export default function Card({ id }) {
  const [quantity, setQuantity] = useState(0); // Estado para almacenar la cantidad

  const imagePath = `/assets/burro${id}.png`;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={`card card-${id}`}>
      <div className="imgBox">
        <Image
          priority
          src={imagePath}
          width={300}
          height={300}
          alt={`donkey numero ${id}`}
          className="donkey"
        />
      </div>
      <div className="contentBox">
        <div className="num-block skin-2">
          <div className="num-in">
            <span className="minus dis" onClick={handleDecrement}></span>
            <input
              type="text"
              className="in-num"
              name={`image${id}`}
              value={quantity}
              onChange={() => {}} // Vacía para evitar advertencias de consola
            />
            <span className="plus" onClick={handleIncrement}></span>
          </div>
        </div>
        <a href="#" className="buy">
          Comprar
        </a>
      </div>
    </div>
  );
}
