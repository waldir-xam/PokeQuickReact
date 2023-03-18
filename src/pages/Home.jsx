import React, { useState, useEffect } from "react";
import profesor from "../img/profesor.svg";
import trainerOne from "../img/trainer-red.svg";
import trainerTwo from "../img/trainer-blue.svg";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [effect, setEffect] = useState(false);
  // para animacion
  const [lastClicked, setLastClicked] = useState(null);
  //para q no se repita la animacion al dar click en otra pokebola y solo suceda en la misma
  const [selectedPokemon, setSelectedPokemon] = useState(
    localStorage.getItem("selectedPokemon") || null
  ); //para seleccionar pokemon y su efecto de borde
  const [selectedTrainer, setSelectedTrainer] = useState(
    localStorage.getItem("selectedTrainer") || null
  ); //para seleccionar entrenador y su efecto de borde

  const [showWarning, setShowWarning] = useState(false);
  //para mostrar el warning de seleccionar pokemon / entrenador y no esten seleccionados completamente

  const handlePokemonClick = (pokemonName) => {
    if (selectedPokemon === pokemonName) {
      setSelectedPokemon(null);
      setSelectedPokemonImage(null);
      localStorage.removeItem("selectedPokemon");
    } else {
      setSelectedPokemon(pokemonName);
      localStorage.setItem("selectedPokemon", pokemonName);
    }
  };

  const handleTrainerClick = (trainerName) => {
    if (selectedTrainer === trainerName) {
      setSelectedTrainer(null);
      localStorage.removeItem("selectedTrainer");
    } else {
      setSelectedTrainer(trainerName);
      localStorage.setItem("selectedTrainer", trainerName);
    }
  };

  const handleNextClick = () => {
    if (selectedPokemon && selectedTrainer) {
      // Aquí puedes almacenar los datos seleccionados en una base de datos o enviarlos a un servidor
    } else {
      setShowWarning(true);
    }
  };

  const [selectedPokemonImage, setSelectedPokemonImage] = useState(null);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((response) => response.json())
        .then((data) => setSelectedPokemonImage(data.sprites.front_default));
    }
  }, [selectedPokemon]);

  const getSelectedPokemonImage = () => {
    return selectedPokemonImage || "ruta de la imagen por defecto";
  };

  const pokemonIds = {
    pokemonOne: 1,
    pokemonTwo: 4,
    pokemonThree: 7,
  };

  return (
    <div className="mx-auto w-full flex-grow font-title text-pokewhite lg:w-10/12 lg:max-w-7xl">
      {/* pt 1 */}
      <div className="mx-auto flex flex-row items-center justify-center gap-1 px-2 py-6 lg:gap-6 lg:py-0">
        {/* pokeballs */}
        <div className="flex flex-col justify-center gap-10">
          <div
            className={`h-16 w-16 cursor-pointer bg-pokeball bg-cover bg-no-repeat hover:animate-shakeNop md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full${
              selectedPokemon === "pokemonOne"
                ? "cursor-pointer rounded-full border-2 border-pokegreen shadow-2xl shadow-pokeblack drop-shadow-2xl"
                : ""
            } ${lastClicked === "pokemonOne" && effect ? "animate-wiggle" : ""}
  `}
            onAnimationEnd={() => setEffect(false)}
            id="pokemonOne"
            onClick={(e) => {
              setEffect(true);
              setLastClicked(e.currentTarget.id);
              handlePokemonClick(pokemonIds[e.currentTarget.id]);
            }}
          ></div>
          <div
            className={`h-16 w-16 cursor-pointer rounded-full bg-pokeball bg-cover bg-no-repeat hover:animate-shakeNop md:h-24 md:w-24 lg:h-28 lg:w-28 ${
              selectedPokemon === "pokemonTwo"
                ? "cursor-pointer rounded-full border-2 border-pokered shadow-2xl shadow-pokeblack drop-shadow-2xl"
                : ""
            } ${
              lastClicked === "pokemonTwo" && effect ? "animate-wiggle" : ""
            }`}
            onAnimationEnd={() => setEffect(false)}
            id="pokemonTwo"
            onClick={(e) => {
              setEffect(true);
              setLastClicked(e.currentTarget.id);
              handlePokemonClick(pokemonIds[e.currentTarget.id]);
            }}
          ></div>
          <div
            className={`h-16 w-16 cursor-pointer rounded-full bg-pokeball bg-cover bg-no-repeat hover:animate-shakeNop md:h-24 md:w-24 lg:h-28 lg:w-28 ${
              selectedPokemon === "pokemonThree"
                ? "cursor-pointer rounded-full border-2 border-pokeblue shadow-2xl shadow-pokeblack drop-shadow-2xl duration-300"
                : ""
            } ${
              lastClicked === "pokemonThree" && effect ? "animate-wiggle" : ""
            }`}
            onAnimationEnd={() => setEffect(false)}
            id="pokemonThree"
            onClick={(e) => {
              setEffect(true);
              setLastClicked(e.currentTarget.id);
              handlePokemonClick(pokemonIds[e.currentTarget.id]);
            }}
          ></div>
        </div>
        {/* fin pokeballs */}
        {/* contenedor , selected pokeball/pokemon */}
        <div className="grid w-full grid-cols-2 gap-0  px-1 pt-16 lg:w-9/12 lg:gap-0">
          <div className="col-span-1 flex w-auto justify-end self-center">
            <h2 className="absolute right-24 top-20 rounded-t-3xl rounded-bl-3xl bg-pokeblack px-4 py-2 text-center font-title text-lg font-bold text-pokewhite md:relative md:-top-5 md:-right-40 md:text-2xl lg:relative lg:-top-10 lg:-right-10 lg:w-11/12 lg:text-3xl">
              Bienvenido,
              <br /> escoge tu pokemon
            </h2>
          </div>
          <div className="row-span-2 flex justify-center ">
            <img className="w-full lg:w-9/12" src={profesor} />
          </div>
          <div className=" col-span-1 flex h-auto w-auto flex-col items-center justify-center">
            <div className="flex h-40 w-40 items-center rounded-3xl bg-pokeblack md:h-60 md:w-60  lg:h-64 lg:w-64 ">
              <img
              className="w-40 h-40 md:w-60 md:h-60 lg:w-64 lg:h-64"
                id="selectedPokemon"
                src={getSelectedPokemonImage()}
                alt="Pokemon seleccionado"
              />
            </div>
          </div>
          {/* DIALOGO DE ESCOGER POKEMON */}
          <div className="col-span-2 flex items-center justify-end self-center align-middle lg:w-full lg:py-4">
            <div className="w-9/12animate-pulso3 flex flex-wrap justify-center rounded-xl border-2 border-black bg-pokewhite p-4 text-center text-base font-normal text-black md:relative md:right-44 md:text-lg lg:col-span-3 lg:text-lg">
              <span>
                Quieres elegir a
                <a className="px-1 text-pokered" id="selectedPokemonColor">
                  Charmander
                </a>
                ?<br /> Es un Pokemon tipo
                <a className="px-1 text-pokered">Fuego</a>
              </span>
            </div>
          </div>
          {/* FIN DIALOGO DE ESCOGER POKEMON */}
        </div>
        {/* fin contenedor , selected pokeball/pokemon */}
      </div>
      {/* end pt 1 */}

      {/* FOOTER HOME 1 */}
      <div className="mx-auto flex w-full flex-col justify-center gap-4 rounded-2xl px-4 font-semibold">
        <div className="m-auto flex w-full flex-row items-center md:justify-between">
          <h2 className="w-full px-6 text-left text-xl font-semibold text-pokewhite md:text-3xl lg:text-3xl">
            Escoge tu entrenador
          </h2>
          <div className="flex w-full flex-row items-center justify-center gap-2 lg:gap-6">
            <div className="flex w-full justify-end md:w-11/12 lg:w-full">
              {/* BOTON PARA PT 2 */}
              {selectedPokemon && selectedTrainer && (
                <Link to="/stage2">
                  <button
                    className="flex w-full animate-pulso3 items-center justify-center rounded-xl border-2 border-pokeblack bg-pokegreen px-6 py-3 text-center font-misc text-sm font-bold text-pokewhite hover:animate-shake md:w-11/12  lg:w-full lg:p-4 lg:px-2 lg:text-lg"
                    onClick={handleNextClick}
                  >
                    <span className="px-2">SIGUIENTE</span>
                    <Icon css="icon" icon={faArrowRight} />
                  </button>
                  {showWarning && (
                    <div className="mt-4 text-red-500">
                      Tienes que seleccionar un entrenador y un pokemon
                    </div>
                  )}
                </Link>
              )}
              {/* FIN BOTON PARA PT 2 */}
            </div>
          </div>
        </div>
        {/* ENTRANADORES */}
        <div className="flex flex-row gap-3 lg:gap-5">
          <div
            id="trainerOne"
            className={`flex w-3/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-0 ${
              selectedTrainer === "trainerOne"
                ? "cursor-pointer border-2 border-zinc-300 shadow-2xl drop-shadow-2xl duration-300 hover:animate-pulso2 lg:p-1"
                : ""
            } trainer ${selectedTrainer === "trainerOne" ? "selected" : ""}`}
            onClick={() => handleTrainerClick("trainerOne")}
          >
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="text-md mt-1 py-1">Red</h4>
          </div>
          <div
            id="trainerTwo"
            className={`flex w-3/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-0${
              selectedTrainer === "trainerTwo"
                ? "cursor-pointer border-2 border-zinc-300 shadow-2xl drop-shadow-2xl duration-100 hover:animate-pulso2 lg:p-1"
                : ""
            } trainer ${selectedTrainer === "trainerTwo" ? "selected" : ""}`}
            onClick={() => handleTrainerClick("trainerTwo")}
          >
            <img src={trainerTwo} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="text-md mt-1 py-1">Blue2</h4>
          </div>
          <div
            id="trainerThree"
            className={`flex w-3/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-0${
              selectedTrainer === "trainerThree"
                ? "cursor-pointer border-2 border-zinc-300 shadow-2xl drop-shadow-2xl duration-300 hover:animate-pulso2 lg:p-1"
                : ""
            }trainer ${selectedTrainer === "trainerThree" ? "selected" : ""}`}
            onClick={() => handleTrainerClick("trainerThree")}
          >
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="text-md mt-1 py-1">Red3</h4>
          </div>
          <div
            className={`flex w-3/12 cursor-pointer flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-0${
              selectedTrainer === "trainerFour"
                ? "cursor-pointer border-2 border-zinc-300 shadow-2xl drop-shadow-2xl duration-300 hover:animate-pulso2 lg:p-1"
                : ""
            }trainer ${selectedTrainer === "trainerFour" ? "selected" : ""}`}
            id="trainerFour"
            onClick={() => handleTrainerClick("trainerFour")}
          >
            <img src={trainerTwo} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="text-md mt-1 py-1">Blue4</h4>
          </div>
        </div>
        {/* ENTRANADORES */}
      </div>
      {/* FIN FOOTER HOME 1 */}
    </div>
  );
};

export default Home;
