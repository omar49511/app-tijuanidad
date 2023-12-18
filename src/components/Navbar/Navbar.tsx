"use client";
import { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Image
          className="header__img"
          src="/tijuanidad_pequeno.png"
          alt="Tijuanidad"
          width={300}
          height={80}
        ></Image>
      </div>
      <button className="header__button" onClick={handleMenu}>
        <svg
          className="header__svg"
          xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <nav className={`header__nav ${menu ? "isActive" : ""}`}>
        <ul className="header__ul">
          <li className="header__li">
            <a href="/" className="header__a">
              Inicio
            </a>
          </li>
          <li className="header__li">
            <a href="/map" className="header__a">
              Mapa
            </a>
          </li>
          <li className="header__li">
            <a href="" className="header__a">
              Historias
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
