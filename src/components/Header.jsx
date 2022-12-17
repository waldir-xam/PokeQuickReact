import React from "react";
import { useState } from 'react'
import Modal from "../components/Modal";
import Login from "../components/Login"
import Modales from "../components/Modales";
import pokelogo from "../img/poke-logo.png";
import pokebola from "../img/pokebola_logo.svg";
import "../styles/Header.css";

const Header = () => {

  const [mostrar, setMostrar] = useState(false)
  const [verContador, setVerContador] = useState(false)
  const [verFormulario, setVerFormulario] = useState(false)


  const menuBtn = document.getElementById("menuBtn");
  const body = document.body;

/*   menuBtn.addEventListener("click", () => {
  body.classList.toggle("show__menu"); 
  })*/;
  return (
    <div>
      <div className="header">
        <nav>
          {/*           <img className="logo" src={pokebola} alt="" />
           */}
<<<<<<< HEAD
          <button className="nav-menu-btn" id="menuBtn"></button>
          <ul className="navbar">
=======
          <button className="nav-menu-btn" id="menuBtn" onClick={() => setMostrar(true)}></button>
          
          <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
            
            <Login/>
            
          </Modal>
          
          <ul class="navbar">
>>>>>>> origin/hoas22
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Pokedex</a>
            </li>
            <li>
              <a href="">Mis Pokemons</a>
            </li>
            <li>
              <a href="">Mochila</a>
            </li>
          </ul>
        </nav>
        <figure className="logo-container">
          <img className="logo" src={pokelogo} alt="logo" />
        </figure>
        <div className="nav__sound">
          <span>BGM ON/OFF</span>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
