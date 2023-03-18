import React from "react";

const PokemonList = ({ pokemons, onSelect }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.id}
          className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
          onClick={() => onSelect(pokemon)}
        >
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-3">
            <h3 className="font-bold text-xl mb-2">{pokemon.name}</h3>
            <p>{pokemon.type.join(", ")}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
