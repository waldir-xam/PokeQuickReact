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
import { Icon } from "../components/Icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="lg:w-max-7xl mx-auto w-full font-title text-pokewhite lg:max-w-7xl">
      <h2 className="py-3 text-center text-3xl font-bold">
        Selecciona un Pokemon
      </h2>
      <div className="flex w-full flex-col">
        <div className="mx-auto flex flex-row gap-4 lg:w-full lg:max-w-7xl lg:px-5">
          {/* ICONS ASIDE */}

          {/*            <aside className="lg:h-78 m-auto hidden h-full flex-col justify-center gap-6 rounded-2xl bg-pokeblack p-1 lg:block lg:flex">
            <img src={asideOne} className="aside-img-home w-12" />
            <img src={asideTwo} className="aside-img-home w-12" />
            <img src={asideThree} className="aside-img-home w-12" />
            <img src={asideFour} className="aside-img-home w-12" />
          </aside>*/}
          {/* ICONS ASIDE */}
          {/* CONTENEDOR */}
          <div className="mx-auto w-11/12">
            <div className="mx-auto flex flex-col items-center gap-6 rounded-2xl bg-pokeblack p-8">
              <img className="profesor-home" src={profesor} />

              {/* MENSAJE AL SELECCIONAR POKEMON */}
              <div className="top-33 absolute right-0 flex  w-5/12 animate-pulso rounded-xl bg-pokewhite p-3 text-center text-sm text-black md:top-56 md:w-4/12 lg:right-20 lg:w-2/12 lg:p-4 lg:text-base">
                <span>
                  Quieres elegir a <a className="text-pokered">Charmander</a>?
                  Es un Pokemon tipo <a className="text-pokered">Fuego</a>
                </span>
              </div>
              {/* MENSAJE AL SELECCIONAR POKEMON */}

              <div className=" flex flex-row justify-center gap-6">
                <div className="hover:animate-shake">
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
                <div className="hover:animate-shake">
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
                <div className="hover:animate-shake">
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
        </div>
        {/* BOTON PARA PT 2 */}
        <Link to="/stage2">
          <button className="absolute right-0 bottom-80 flex  w-3/12 animate-pulso items-center justify-center rounded-xl bg-pokewhite p-3 text-center text-sm text-black hover:animate-shake md:bottom-78 md:w-3/12 lg:right-20 lg:w-2/12 lg:p-4 lg:text-base">
            Siguiente <Icon css="icon" icon={faArrowRight} />
          </button>
        </Link>
      </div>
      <FooterOne />
    </div>
  );
};

export default Home;
