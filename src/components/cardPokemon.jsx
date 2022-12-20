import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const CardPokemon = ({ medida, peso, img, nombre, tipo, especial }) => {
  const { datosCon, setDatosCon } = useContext(AuthContext);
  return (
    <div
      className="img_pokemon"
      onClick={() => {
        setDatosCon(!datosCon);
      }}
    >
      <div className="img_pokemon_titulo">
        <h6>{medida}m</h6>
        <h6>{peso}kg</h6>
      </div>
      <div className="img_pokemon_contenido">
        <img src={img} width="20%" alt="" />
        <h3>{nombre}</h3>
        <h4>{tipo}</h4>
        <h4>{especial}</h4>
      </div>
    </div>
  );
};

export default CardPokemon;
