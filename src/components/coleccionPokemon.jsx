import React from "react";

const ColeccionPokemon = ({ pokemon }) => {
  return (
    <div className="container2__pokemon__lleno">
      <img src="./src/img/pngwing4.svg" alt="" />
      <img src={pokemon} alt="" />
    </div>
  );
};

export default ColeccionPokemon;
