import React from "react";

export const getLocal = (nombre) => {
  const data = localStorage.getItem(nombre);
  const response = JSON.parse(data);
  return response;
};

const dataPokemon = [
  {
    id: 1,
    medida: 0.8,
    peso: 7.9,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    nombre: "Bulbasaur",
    tipo: "Grass",
    especial: "Overgrow",
  },
  {
    id: 2,
    medida: 0.8,
    peso: 5.6,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
    nombre: "Ivysaur",
    tipo: "Poison",
    especial: "Chlorophyll",
  },
  {
    id: 3,
    medida: 0.3,
    peso: 7.3,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    nombre: "Venusaur",
    tipo: "Grass",
    especial: "Overgrow",
  },
  {
    id: 4,
    medida: 0.2,
    peso: 7.4,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    nombre: "Charmander",
    tipo: "Fire",
    especial: "Blaze",
  },
  {
    id: 5,
    medida: 0.6,
    peso: 7.2,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
    nombre: "Charmeleon",
    tipo: "Speed",
    especial: "Solar Power",
  },
  {
    id: 6,
    medida: 0.5,
    peso: 10,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    nombre: "Charizard",
    tipo: "Flying",
    especial: "Blaze",
  },
  {
    id: 7,
    medida: 0.45,
    peso: 7.7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
    nombre: "Squirtle",
    tipo: "Water",
    especial: "Rain Dish",
  },
  {
    id: 8,
    medida: 0.7,
    peso: 7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
    nombre: "Wartortle",
    tipo: "Water",
    especial: "Torrent",
  },
  {
    id: 9,
    medida: 0.855,
    peso: 7.7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    nombre: "Blastoise",
    tipo: "Water",
    especial: "Rain Dish",
  },
  {
    id: 10,
    medida: 0.7,
    peso: 6,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
    nombre: "Caterpie",
    tipo: "Bug",
    especial: "Run Away",
  },
  {
    id: 11,
    medida: 0.45,
    peso: 7.7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
    nombre: "Metapod",
    tipo: "Bug",
    especial: "Shed Skin",
  },
  {
    id: 12,
    medida: 0.7,
    peso: 7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
    nombre: "Butterfree",
    tipo: "Flying",
    especial: "Tinted Lens",
  },
  {
    id: 13,
    medida: 0.45,
    peso: 1.2,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
    nombre: "Weedle",
    tipo: "Poison",
    especial: "Run Away",
  },
  {
    id: 14,
    medida: 0.4,
    peso: 7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
    nombre: "Kakuna",
    tipo: "Bug",
    especial: "Shed Skin",
  },
  {
    id: 15,
    medida: 0.7,
    peso: 7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
    nombre: "Beedrill",
    tipo: "Poison",
    especial: "Sniper",
  },
  {
    id: 16,
    medida: 0.7,
    peso: 6,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
    nombre: "Pidgey",
    tipo: "Flying",
    especial: "Keen Eye",
  },
  {
    id: 17,
    medida: 0.45,
    peso: 7.7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
    nombre: "Pidgeotto",
    tipo: "Normal",
    especial: "Tangled Feet",
  },
  {
    id: 18,
    medida: 3,
    peso: 3.95,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
    nombre: "Pidgeot",
    tipo: "Flying",
    especial: "Big Pecks",
  },
  {
    id: 19,
    medida: 0.45,
    peso: 7.7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
    nombre: "Rattata",
    tipo: "Normal",
    especial: "Guts",
  },
  {
    id: 20,
    medida: 0.7,
    peso: 7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    nombre: "Raticate",
    tipo: "Normal",
    especial: "Hustle",
  },
  {
    id: 21,
    medida: 0.45,
    peso: 7.7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
    nombre: "Spearow",
    tipo: "Flying",
    especial: "Sniper",
  },
  {
    id: 22,
    medida: 0.7,
    peso: 7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
    nombre: "Fearow",
    tipo: "normal",
    especial: "Keen Eye",
  },
];
export default dataPokemon;
