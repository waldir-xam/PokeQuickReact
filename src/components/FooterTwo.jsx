import React from "react";
import trainerOne from "../img/trainer-red.svg";
import trainerTwo from "../img/trainer-blue.svg";

import "../styles/FooterOne.css";
/* las clases llevan '-home' porque este footerONe esta relacionado al HOME */
const FooterOne = () => {
  return (
    <div>
<footer className="footer">
        <nav className="footer__nav">
          <ul className="footer__ul">
            <li>
              <a href="">
                <img src="./src/img/star.svg" alt="" />
                <br />
                Pase de batalla
              </a>
            </li>
            <li>
              <a href="">
                <img src="./src/img/regalo.svg" alt="" />
                <br />
                Eventos
              </a>
            </li>
            <li>
              <a href="">
                <img src="./src/img/shoppping.svg" alt="" />
                <br />
                Mochila
              </a>
            </li>
            <li>
              <a href="">
                <img src="./src/img/calculator.svg" alt="" />
                <br />
                Pokedex
              </a>
            </li>
            <li>
              <a href="">
                <img src="./src/img/item_pokebola.svg" alt="" />
                <br />
                Mis Pokemons
              </a>
            </li>
            <li>
              <a href="">
                <img src="./src/img/Vector-1.svg" alt="" />
                <br />
                Amigos
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default FooterOne;
