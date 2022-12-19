import React from "react";
const searchPokemon = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export default searchPokemon;
