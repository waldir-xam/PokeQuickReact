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

const Home = () => {
  return (
    <div className="mx-auto w-full flex-grow font-title text-pokewhite lg:w-10/12 lg:max-w-7xl">
      {/* ICONS ASIDE */}
      {/*           <aside className="lg:h-78 m-auto hidden h-full flex-col justify-center gap-6 rounded-full bg-pokeblack p-1 py-6 md:block lg:block lg:flex">
            <img src={asideOne} className="aside-img-home w-12" />
            <img src={asideTwo} className="aside-img-home w-12" />
            <img src={asideThree} className="aside-img-home w-12" />
            <img src={asideFour} className="aside-img-home w-12" />
          </aside> */}
      {/* ICONS ASIDE */}
      {/* nuevo contenedor UI */}
      <div className="mx-auto flex flex-row items-center justify-center gap-5 px-2 py-6 lg:gap-24">
        {/* pokeballs */}
        <div className=" flex flex-col justify-center gap-10 px-2">
          <div className="hover:animate-shake" id="pokemonOne">
            <img
              className="w-16 bg-cover bg-no-repeat lg:w-28"
              src={pokeballUp}
              alt="pokeball-up-home"
            />
            <img
              className="w-16 bg-cover  bg-no-repeat lg:w-28"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
          <div className="hover:animate-shake" id="pokemonTwo">
            <img
              className="w-16 bg-cover bg-no-repeat lg:w-28"
              src={pokeballUp}
              alt="pokeball-up"
            />
            <img
              className="w-16 bg-cover  bg-no-repeat lg:w-28"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
          <div className="w-16 hover:animate-shake lg:w-28" id="pokemonThree">
            <img
              className="w-16 bg-cover bg-no-repeat lg:w-28"
              src={pokeballUp}
              alt="pokeball-up"
            />
            <img
              className="w-16 bg-cover  bg-no-repeat lg:w-28"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
        </div>
        {/* fin pokeballs */}
        {/* contenedor , selected pokeball/pokemon */}
        <div className="grid w-9/12 grid-cols-3 gap-2">
          <div className="col-span-2 flex w-auto justify-end self-center">
            <h2 className="text-ri rounded-t-3xl rounded-bl-3xl bg-pokeblack py-3 text-center text-lg font-bold text-pokewhite lg:w-10/12 lg:text-3xl">
              Selecciona un Pokemon
            </h2>
          </div>
          <div className="row-span-2 flex justify-center">
            <img className="w-11/12" src={profesor} />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <div className="w-24 hover:animate-shake lg:w-28">
              <img
                className="w-28 bg-cover bg-no-repeat"
                src={pokeballUp}
                alt="pokeball-up"
              />
              <img
                className="w-24 bg-cover  bg-no-repeat lg:w-28"
                src={pokeballDown}
                alt="pokeball-down"
              />
            </div>
            {/*             *al hacer click la pokebola viene aqui - al dar click se abre el pokemon
             */}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex lg:h-32 h-24 lg:w-32 w-24 items-center rounded-3xl bg-pokeblack">
              <img id="selectedPokemon" />
            </div>
            {/*             *SELECTED POKEMON*
             */}
          </div>
        </div>
        {/* fin contenedor , selected pokeball/pokemon */}
      </div>
      <FooterOne />
    </div>
  );
};

export default Home;
