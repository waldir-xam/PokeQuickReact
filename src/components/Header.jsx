import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Modales from "../components/Modales";
import pokelogo from "../img/poke-logo.png";
import pokebola from "../img/pokebola_logo.svg";
import "../styles/Header.css";
import AudioPlayer from "../components/AudioPlayer"

const Header = () => {
  const [mostrar, setMostrar] = useState(false);
  const [verContador, setVerContador] = useState(false);
  const [verFormulario, setVerFormulario] = useState(false);

  const menuBtn = document.getElementById("menuBtn");
  const body = document.body;


  return (
    <div>
      <div className="header">
        <nav>
          <button
            className="nav-menu-btn"
            id="menuBtn"
            onClick={() => setMostrar(true)}
          ></button>

          <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
            <Login />
          </Modal>
        </nav>
        <figure className="logo-container">
          <img className="logo" src={pokelogo} alt="logo" />
        </figure>
        <div className="nav__sound">
          <span>BGM ON/OFF</span>
         <AudioPlayer/>
        </div>
      </div>
    </div>
  );
};

export default Header;
