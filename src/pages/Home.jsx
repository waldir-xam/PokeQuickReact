import React from "react";
import "../styles/Home.css";
import profesor from "../img/profesor.svg";
import pokeballUp from "../img/pokeball-up.svg";
import pokeballDown from "../img/pokeball-down.svg";
import FooterOne from "../components/FooterOne";
import asideOne from "../img/aside1.png";
import asideTwo from "../img/aside2.png";
import asideThree from "../img/aside3.png";
import asideFour from "../img/aside4.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="body__container-home">
      {/* MAIN PT 1 */}
      <div className="main-home">
        <div className="main__container1-home">
          <h3>Selecciona un Pokemon</h3>
          <div className="container1-home">
            <img className="profesor-home" src={profesor} />
            <p className="floating-text-home">
              Quieres elegir a <a className="poke-type-home">Charmander</a>? Es
              un Pokemon tipo <a className="poke-type-home">Fuego</a>
            </p>
            <div className="pokeballs-home">
              <div className="pokeball-1-home">
                <img
                  className="pokeball-up-home"
                  src={pokeballUp}
                  alt="pokeball-up-home"
                />
                <img
                  className="pokeball-down-home"
                  src={pokeballDown}
                  alt="pokeball-down"
                />
              </div>
              <div className="pokeball-2-home">
                <img
                  className="pokeball-up-home"
                  src={pokeballUp}
                  alt="pokeball-up"
                />
                <img
                  className="pokeball-down-home"
                  src={pokeballDown}
                  alt="pokeball-down"
                />
              </div>
              <div className="pokeball-3-home">
                <img
                  className="pokeball-up-home"
                  src={pokeballUp}
                  alt="pokeball-up"
                />
                <img
                  className="pokeball-down-home"
                  src={pokeballDown}
                  alt="pokeball-down"
                />
              </div>
            </div>
          </div>
        </div>
        <Link to="/stage2">
          <button className="nextStep">
            Siguiente <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
        <FooterOne />
        <div className="aside-left-home">
          <img src={asideOne} className="aside-img-home" />
          <img src={asideTwo} className="aside-img-home" />
          <img src={asideThree} className="aside-img-home" />
          <img src={asideFour} className="aside-img-home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
