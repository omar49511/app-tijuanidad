import React from "react";
import Image from "next/image";

import "./Card.css";

export default function Card({ id }) {
  const imagePath = `/assets/burro${id}.png`;
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
            <span className="minus dis"></span>
            <input type="text" className="in-num" name={`image${id}`} />
            <span className="plus"></span>
          </div>
        </div>
        <a href="#" className="buy">
          Comprar
        </a>
      </div>
    </div>
  );
}
