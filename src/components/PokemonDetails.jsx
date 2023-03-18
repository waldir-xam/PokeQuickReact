import React from "react";

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-60 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <h2 className="font-bold text-2xl mb-2">{pokemon.name}</h2>
          <p className="text-gray-700 mb-2">
            Type: {pokemon.type.join(", ")}
          </p>
          <p className="text-gray-700 mb-2">
            Abilities: {pokemon.abilities.join(", ")}
          </p>
          <p className="text-gray-700 mb-2">
            Height: {pokemon.height}m | Weight: {pokemon.weight}kg
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-xl mb-2">Base Stats</h3>
        <ul className="divide-y divide-gray-300">
          {pokemon.stats.map((stat) => (
            <li key={stat.name} className="flex justify-between py-1">
              <p>{stat.name}</p>
              <p>{stat.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
