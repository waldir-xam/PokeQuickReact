import React, { useEffect, useState, useContext } from "react";
import "../styles/Part2.css";
import FooterTwo from "../components/FooterTwo";
import searchPokemon from "../services/pokeapi";
import { useParams } from "react-router-dom";
import CardPokemon from "../components/cardPokemon";
import dataPokemon, { getLocal } from "../services/config";
import ColeccionPokemon from "../components/coleccionPokemon";
import CardCaracteristicas from "../components/CardCaracteristicas";
import { AuthContext } from "../context/UserContext";

const Part2 = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const { datosCon } = useContext(AuthContext);
  const [newLocal, setNewLocal] = useState([]);
  const [datos, setDatos] = useState([]);
  const [search, setSearch] = useState("");

  const [estado, setEstado] = useState(false);

  // const fetchPoke = async (pokemon) => {
  //   const data = await searchPokemon(pokemon);
  //   console.log(data);
  // };

  const searchr = (e) => {
    setSearch(e.target.value);
  };

  let resultado = [];
  if (!search) {
    resultado = datos;
  } else {
    resultado = datos.filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    setNewLocal(getLocal("poke.user"));
    setDatos(dataPokemon);
    // fetchPoke(1);
  }, [datos]);

  return (
    <div className="body__container">
      <div className="main">
        <div className="main__container1">
          <div className="main__container1__titulo">
            <i className="fa-solid fa-rotate-left"></i>
            <input
              className="main__container1__titulo__input"
              type="text"
              placeholder="Escribe el nombre del pokemon a buscar"
              value={search}
              onChange={searchr}
            />
          </div>
          <div className="container1">
            {resultado.map((resultado) => {
              return (
                <CardPokemon
                  key={resultado.id}
                  medida={resultado.medida}
                  peso={resultado.peso}
                  img={resultado.img}
                  nombre={resultado.nombre}
                  tipo={resultado.tipo}
                  especial={resultado.especial}
                />
              );
            })}
          </div>
        </div>

        <div className="main__container2">
          <figure>
            <img src="./src/img/MisPokemons.svg" alt="" />
          </figure>
          <div className="container2">
            <div className="container2__pokemon">
              {newLocal.map((resultado, index) => {
                return <ColeccionPokemon key={index} pokemon={resultado.img} />;
              })}
            </div>
            {datosCon && (
              <CardCaracteristicas
                vida={getRandomInt(100)}
                ataque={getRandomInt(99)}
                defensa={getRandomInt(98)}
              />
            )}
            <div className="container2__entrenador">
              <img src="src/img/entrenador.svg" alt="" />
            </div>

            <div className="container2__pokemon">
              <div className="container2__pokemon__lleno">
                <img src="./src/img/pngwing4.svg" alt="" />
                <img src="./src/img/charmander.svg" alt="" />
              </div>

              <div className="container2__pokemon__lleno">
                <img src="./src/img/pngwing4.svg" alt="" />
                <img src="./src/img/charmander.svg" alt="" />
              </div>

              <div className="container2__pokemon__lleno">
                <img src="./src/img/pngwing4.svg" alt="" />
                <img src="./src/img/charmander.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </div>
  );
};
export default Part2;
