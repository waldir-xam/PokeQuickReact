import React, { useState } from "react";
import "../styles/Home.css";
import profesor from "../img/profesor.svg";
import pokeballUp from "../img/pokeball-up.svg";
import pokeballDown from "../img/pokeball-down.svg";
import FooterOne from "../components/FooterOne";

const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const handlePokemonClick = (pokemonName) => {
    setSelectedPokemon(pokemonName);
  };

  return (
    <div className="mx-auto w-full flex-grow font-title text-pokewhite lg:w-10/12 lg:max-w-7xl">
      <div className="mx-auto flex flex-row items-center justify-center gap-1 px-2 py-6 lg:gap-24">
        {/* pokeballs */}
        <div className=" flex flex-col justify-center gap-10 px-2 border-2">
          <div
            className={`hover:animate-shake ${
              selectedPokemon === "pokemonOne"
                ? "rounded-full border-2 border-pokegreen shadow-2xl shadow-pokeblack drop-shadow-2xl duration-300"
                : ""
            }`}
            id="pokemonOne"
            onClick={() => handlePokemonClick("pokemonOne")}
          >
            <img
              className="w-12 bg-cover bg-no-repeat lg:w-28"
              src={pokeballUp}
              alt="pokeball-up-home"
            />
            <img
              className="w-12 bg-cover  bg-no-repeat lg:w-28"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
          <div
            className={`hover:animate-shake ${
              selectedPokemon === "pokemonTwo"
                ? "rounded-full border-2 border-pokered shadow-2xl shadow-pokeblack drop-shadow-2xl duration-300"
                : ""
            }`}
            id="pokemonTwo"
            onClick={() => handlePokemonClick("pokemonTwo")}
          >
            <img
              className="w-12 bg-cover bg-no-repeat lg:w-28"
              src={pokeballUp}
              alt="pokeball-up"
            />
            <img
              className="w-12 bg-cover  bg-no-repeat lg:w-28"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
          <div
            className={`hover:animate-shake ${
              selectedPokemon === "pokemonThree"
                ? "rounded-full border-2 border-pokeblue shadow-2xl shadow-pokeblack drop-shadow-2xl duration-300"
                : ""
            }`}
            id="pokemonThree"
            onClick={() => handlePokemonClick("pokemonThree")}
          >
            <img
              className="w-12 bg-cover bg-no-repeat lg:w-28"
              src={pokeballUp}
              alt="pokeball-up"
            />
            <img
              className="w-12 bg-cover  bg-no-repeat lg:w-28"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
        </div>
        {/* fin pokeballs */}
        {/* contenedor , selected pokeball/pokemon */}
        <div className="grid lg:w-9/12 grid-cols-3 lg:gap-4 gap-2 w-full border-2">
          <div className="col-span-2 flex w-auto justify-end self-center">
            <h2 className="text-ri rounded-t-3xl rounded-bl-3xl bg-pokeblack py-3 text-center text-lg font-bold text-pokewhite lg:w-10/12 lg:text-3xl">
              Selecciona un Pokemon
            </h2>
          </div>
          <div className="row-span-2 flex justify-center">
            <img className="lg:w-11/12 w-full" src={profesor} />
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
            <div className="flex h-24 w-24 items-center rounded-3xl bg-pokeblack lg:h-32 lg:w-32">
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
