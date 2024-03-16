import React from "react";
import Map from "@/components/Map/index";

export default function page() {
  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-5rem)]">
      <div className="max-w-[80%] w-full h-[80%] ">
        <Map />
      </div>
    </div>
  );
}
