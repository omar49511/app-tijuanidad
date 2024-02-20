import React from "react";
import ZoomableImage from "@/components/Map/Map";
import "./style.css";

export default function page() {
  return (
    <div className="container">
      <ZoomableImage imageUrl={"/assets/metropoli2go_map.png"} />
    </div>
  );
}
