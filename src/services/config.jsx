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
    peso: 7.6,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
  {
    id: 2,
    medida: 0.8,
    peso: 7.6,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
  {
    id: 3,
    medida: 0.3,
    peso: 7.6,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
  {
    id: 4,
    medida: 0.2,
    peso: 7.4,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
  {
    id: 5,
    medida: 0.6,
    peso: 7.2,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
  {
    id: 6,
    medida: 0.5,
    peso: 7.9,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
  {
    id: 7,
    medida: 0.45,
    peso: 7.7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
  {
    id: 8,
    medida: 0.9,
    peso: 7,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
    nombre: "Charmanderz",
    tipo: "Fuego",
    especial: "Blaze",
  },
];
export default dataPokemon;
