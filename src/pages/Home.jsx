import React, { useState } from "react";
import profesor from "../img/profesor.svg";
import pokeballUp from "../img/pokeball-up.svg";
import pokeballDown from "../img/pokeball-down.svg";
import trainerOne from "../img/trainer-red.svg";
import trainerTwo from "../img/trainer-blue.svg";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const handlePokemonClick = (pokemonName) => {
    setSelectedPokemon(pokemonName);
  };

  return (
    <div className="mx-auto w-full flex-grow font-title text-pokewhite lg:w-10/12 lg:max-w-7xl">
      <div className="mx-auto flex flex-row items-center justify-center gap-1 px-2 py-6 lg:gap-24">
        {/* pokeballs */}
        <div className=" flex flex-col justify-center gap-10">
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
        <div className="grid w-full grid-cols-3 gap-2 lg:w-9/12 lg:gap-0">
          <div className="col-span-2 flex w-auto justify-end self-center">
            <h2 className="absolute right-16 top-24 rounded-t-3xl rounded-bl-3xl bg-pokeblack px-4 py-2 text-center text-lg font-bold text-pokewhite md:relative md:-top-5 md:-right-20 md:text-2xl lg:relative lg:-top-10 lg:-right-10 lg:w-8/12 lg:text-3xl">
              Bienvenido,
              <br /> escoge tu pokemon
            </h2>
          </div>
          <div className="row-span-2 flex justify-center ">
            <img className="w-full lg:w-11/12" src={profesor} />
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
          {/* DIALOGO DE ESCOGER POKEMON */}
          <div className="col-span-3 flex items-center justify-end self-center align-middle lg:w-full lg:py-4">
            <div className="flex animate-pulso3 justify-center rounded-xl border-2 border-black bg-pokewhite p-4 text-center text-sm font-normal text-black md:text-lg lg:col-span-3 lg:text-lg">
              Quieres elegir a <a className="px-1 text-pokered">Charmander</a>?
              Es un Pokemon tipo
              <a className="px-1 text-pokered">Fuego</a>
            </div>
          </div>
          {/* FIN DIALOGO DE ESCOGER POKEMON */}
        </div>
        {/* fin contenedor , selected pokeball/pokemon */}
      </div>

      {/* FOOTER HOME 1 */}
      <div className="mx-auto flex w-10/12 flex-row flex-wrap justify-center gap-4 rounded-2xl py-6 font-semibold">
        <div className="m-auto flex w-full flex-row items-center md:justify-between">
          <h2 className="w-full px-6 text-left text-xl font-semibold text-pokewhite md:text-3xl lg:text-3xl">
            Escoge tu entrenador
          </h2>
          <div className="flex w-full flex-row items-center justify-center gap-2 lg:gap-6">
            <div className="flex w-full justify-end md:w-11/12 lg:w-full">
              {/* BOTON PARA PT 2 */}
              <Link to="/stage2">
                <button className="flex w-full animate-pulso3 items-center justify-center rounded-xl bg-pokegreen px-6 py-3 text-center font-misc text-sm font-bold text-pokewhite hover:animate-shake md:w-11/12 lg:w-full lg:p-4  lg:text-lg border-2 border-pokeblack lg:px-2">
                  <span className="px-2">SIGUIENTE</span>
                  <Icon css="icon" icon={faArrowRight} />
                </button>
              </Link>
              {/* FIN BOTON PARA PT 2 */}
            </div>
          </div>
        </div>
        {/* ENTRANADORES */}
        <div className=" flex h-auto flex-row gap-3 lg:gap-5">
          <div className="flex w-4/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red1</h4>
          </div>
          <div className="flex w-4/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerTwo} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Blue2</h4>
          </div>
          <div className="flex w-4/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red3</h4>
          </div>
          <div className="flex w-4/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerTwo} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Blue4</h4>
          </div>
          {/*         <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4 cursor-pointer">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red5</h4>
          </div>
          <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4 cursor-pointer">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red6</h4>
          </div> */}
        </div>
        {/* ENTRANADORES */}
      </div>
    </div>
  );
};

export default Home;
