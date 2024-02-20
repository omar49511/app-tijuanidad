import React from "react";
import "./Footer.css";
import Image from "next/image";
import { FiInstagram, FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <a className="logo_name">
              <Image
                src="/assets/tijuanidad_pequeno.png"
                alt="tijuanidad"
                width={200}
                height={0}
                style={{ width: "100px", height: "auto" }}
              />
            </a>
          </div>
          <div className="media-icons">
            <a href="https://www.facebook.com/Tijuanidad">
              <FiFacebook />
            </a>
            <a href="https://www.instagram.com/tijuanidad">
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Enlaces</li>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Mapa</a>
            </li>
            <li>
              <a href="#">Historias</a>
            </li>
            <li>
              <a href="#">Tienda</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Contacto</li>
            <li>
              <a href="#">info@tijuanidad.com</a>
            </li>
            <li>
              <a href="#">+52 (663) 293-5378</a>
            </li>
            <li>
              <a href="#">
                Av. Revolución #828 Zona Centro, entre las calles Benito Juárez
                (2da) y Carrillo Puerto (3ra), Tijuana, B.C. México. C.P. 22000
              </a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Horario de atención</li>
            <li>
              <Image
                src={"/assets/tjmuseum_reservation.png"}
                alt="tj museum"
                width="250"
                height="0"
                style={{ width: "150px", height: "auto" }}
              />
            </li>
            <li>
              <p>
                Martes a sábado
                <br />
                10:00am a 5:00pm
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            © 2024 <a href="#">Echo con ❤️ por omar</a>
          </span>
          <span className="policy_terms">
            <a href="#">Política de privacidad</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
