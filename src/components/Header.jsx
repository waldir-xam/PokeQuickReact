import React from "react";
import pokelogo from "../img/poke-logo.png";
import pokebola from "../img/pokebola_logo.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <nav class="nav">
        <img className="logo" src={pokebola} alt=""/>
        <figure class="logo-container">
          <img class="logo" src={pokelogo} alt="logo" />
        </figure>
        <div class="nav__sound">
          <span>BGM ON/OFF</span>
          <i class="fa-solid fa-play"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
