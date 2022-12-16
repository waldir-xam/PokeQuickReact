import React, { useEffect } from "react";
import "../styles/Part2.css";
import FooterTwo from "../components/FooterTwo";
import searchPokemon from "../services/pokeapi";
import { useParams } from "react-router-dom";
import CardPokemon from "../components/cardPokemon";
import dataPokemon, { getLocal } from "../services/config";
import ColeccionPokemon from "../components/coleccionPokemon";

const Part2 = () => {
  const fetchPoke = async (pokemon) => {
    const data = await searchPokemon(pokemon);
    console.log(data);
  };

  const Datos = () => {
    return dataPokemon;
  };

  const newLocal = getLocal("poke.user");

  useEffect(() => {
    fetchPoke(1);
  }, []);

  const newDatos = Datos();

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
            />
          </div>
          <div className="container1">
            {newDatos.map((resultado) => {
              return (
                <CardPokemon
                  key={resultado.id}
                  medida={resultado.medida}
                  peso={resultado.peso}
                  img={resultado.img}
                  nombre="Charmander"
                  tipo="Fuego"
                  especial="Blaze"
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
            <div
              className="container__caracteristicas"
              /*               style="background-color:white ;"
               */
            >
              <div className="container__caracteristicas__item">
                <h4>Vida</h4>
                <progress max="100" value="70">
                  70%
                </progress>
                <h4>70</h4>
              </div>
              <div className="container__caracteristicas__item">
                <h4>Vida</h4>
                <progress max="100" value="55">
                  55%
                </progress>
                <h4>55</h4>
              </div>
              <div className="container__caracteristicas__item">
                <h4>Vida</h4>
                <progress max="100" value="68">
                  68%
                </progress>
                <h4>68</h4>
              </div>
              <div className="container__caracteristicas__item">
                <h4>Vida</h4>
                <progress max="100" value="90">
                  90%
                </progress>
                <h4>90</h4>
              </div>
              <button className="container__caracteristicas__button">
                Comprar
              </button>
            </div>

            <div className="container2__pokemon">
              {newLocal.map((resultado, index) => {
                console.log(
                  "🚀 ~ file: Part2.jsx:102 ~ {newLocal.map ~ resultado",
                  resultado
                );
                return <ColeccionPokemon key={index} pokemon={resultado.img} />;
              })}
            </div>

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
