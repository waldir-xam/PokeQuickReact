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
    <div className="mx-auto w-full flex-grow font-title text-pokewhite lg:max-w-7xl">
      <h2 className="py-3 text-center text-3xl font-bold text-pokewhite">
        Selecciona un Pokemon
      </h2>
      <div className="flex w-full flex-col">
        <div className="mx-auto flex flex-row gap-4 lg:w-full lg:max-w-7xl lg:px-5">
          {/* ICONS ASIDE */}
          {/*           <aside className="lg:h-78 m-auto hidden h-full flex-col justify-center gap-6 rounded-full bg-pokeblack p-1 py-6 md:block lg:block lg:flex">
            <img src={asideOne} className="aside-img-home w-12" />
            <img src={asideTwo} className="aside-img-home w-12" />
            <img src={asideThree} className="aside-img-home w-12" />
            <img src={asideFour} className="aside-img-home w-12" />
          </aside> */}
          {/* ICONS ASIDE */}
        </div>
      </div>
      {/* nuevo contenedor UI */}
      <div className="flex flex-row justify-center lg:gap-24 gap-5 mx-auto px-4 items-center">
        {/* pokeballs */}
        <div className=" flex flex-col justify-center gap-10">
          <div className="hover:animate-shake">
            <img
              className="w-28 bg-cover bg-no-repeat"
              src={pokeballUp}
              alt="pokeball-up-home"
            />
            <img
              className="w-28  bg-cover bg-no-repeat"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
          <div className="hover:animate-shake">
            <img
              className="w-28 bg-cover bg-no-repeat"
              src={pokeballUp}
              alt="pokeball-up"
            />
            <img
              className="w-28  bg-cover bg-no-repeat"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
          <div className="w-28 hover:animate-shake">
            <img
              className="w-28 bg-cover bg-no-repeat"
              src={pokeballUp}
              alt="pokeball-up"
            />
            <img
              className="w-28  bg-cover bg-no-repeat"
              src={pokeballDown}
              alt="pokeball-down"
            />
          </div>
        </div>
        {/* fin pokeballs */}
        {/* contenedor , selected pokeball/pokemon */}
        <div className="grid grid-cols-3 grid-rows-2 lg:gap-4 gap-3">
          <div className="h-20 w-32 bg-pokeblue">TEXT MSG</div>
          <div className="h-20 w-32 bg-pokeblue">TEXT MSG</div>
          <div className="h-20 w-32 bg-pokeblue">OAK</div>
          <div className="h-20 w-32 bg-pokeblue">*SELECTED POKEBALL*</div>
          <div className="h-20 w-32 bg-pokeblue">*SELECTED POKEMON*</div>
          <div className="h-20 w-32 bg-pokeblue">OAK</div>
        </div>
        {/* fin contenedor , selected pokeball/pokemon */}
      </div>
      <FooterOne />
    </div>
  );
};

export default Home;
