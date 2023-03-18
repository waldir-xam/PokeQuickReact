import React from "react";

const Pokedex = () => {
  return (
    <div className="flex flex-grow flex-col py-6 lg:max-w-7xl">
      <div className="flex w-full flex-row justify-around text-xl text-pokewhite">
        <div className="flex w-5/12 justify-center rounded-3xl bg-pokeblack py-2">
          Pokemon
        </div>
        <div className="flex w-5/12 justify-center rounded-3xl bg-pokeblack py-2">
          Generacion
        </div>
      </div>
      <div className="flex h-full w-full justify-center bg-pokeblack"></div>
    </div>
  );
};

export default Pokedex;
