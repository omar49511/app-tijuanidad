"use client";
import { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { url } from "inspector";
import { title } from "process";
import Link from "next/link";

const menuItems = [
  { url: "/home", title: "Inicio" },
  { url: "/map", title: "Mapa" },
  { url: "/stories", title: "Historias" },
  { url: "/store", title: "Tienda" },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 header">
      {/*Logo*/}
      <div className="header__logo">
        <Image
          priority
          className="header__img"
          src="/tijuanidad_pequeno.png"
          alt="Tijuanidad"
          width={300}
          height={80}
        ></Image>
      </div>
      <div className="hidden md:flex gap-4">
        {menuItems.map((link) => (
          <Link href={link.url} key={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      {/*Responsive menu*/}
      <div className="md:hidden">
        {/*Menu button*/}
        <button
          className="w-10 h-8 flex flex-col justify-between relative"
          onClick={() => setMenu(!menu)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {menu && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xls">
            {/*Menu list*/}
            {menuItems.map((item, index) => (
              <Link href={item.url} key={index}>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
