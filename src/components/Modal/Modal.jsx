import React from "react";
import Image from "next/image";
import "./Modal.css";

export default function Modal({ imageUrl, onClose }) {
  return (
    <div className="modalOverlay">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="modalContent">
        <div className="imageContainer">
          <Image
            alt="image"
            className="image"
            src={imageUrl}
            width={700}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
