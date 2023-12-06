import React from "react";
import Map from "@/components/Map/Map";
import "./style.css";
import Test from "@/assets/metropoli2go_map.png";

export default function page() {
  return (
    <div className="container">
      <Map imageUrl={Test} />
    </div>
  );
}
