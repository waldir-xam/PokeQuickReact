import React from "react";
import "../styles/Part2.css";
import FooterTwo from "../components/FooterTwo";

const Part2 = () => {
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

          <div class="container1">
            <div class="img_pokemon">
              <div class="img_pokemon_titulo">
                <h6>0.6m</h6>
                <h6>8.5kg</h6>
              </div>
              <div class="img_pokemon_contenido">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                  width="20%"
                  alt=""
                />
                <h3>Charmander</h3>
                <h4>Fire</h4>
                <h4>blaze</h4>
              </div>
            </div>

            <div class="img_pokemon">
              <div class="img_pokemon_titulo">
                <h6>0.6m</h6>
                <h6>8.5kg</h6>
              </div>
              <div class="img_pokemon_contenido">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                  width="20%"
                  alt=""
                />
                <h3>Charmander</h3>
                <h4>Fire</h4>
                <h4>blaze</h4>
              </div>
            </div>

            <div class="img_pokemon">
              <div class="img_pokemon_titulo">
                <h6>0.6m</h6>
                <h6>8.5kg</h6>
              </div>
              <div class="img_pokemon_contenido">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                  width="20%"
                  alt=""
                />
                <h3>Charmander</h3>
                <h4>Fire</h4>
                <h4>blaze</h4>
              </div>
            </div>

            <div class="img_pokemon">
              <div class="img_pokemon_titulo">
                <h6>0.6m</h6>
                <h6>8.5kg</h6>
              </div>
              <div class="img_pokemon_contenido">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                  width="20%"
                  alt=""
                />
                <h3>Charmander</h3>
                <h4>Fire</h4>
                <h4>blaze</h4>
              </div>
            </div>

            <div class="img_pokemon">
              <div class="img_pokemon_titulo">
                <h6>0.6m</h6>
                <h6>8.5kg</h6>
              </div>
              <div class="img_pokemon_contenido">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                  width="20%"
                  alt=""
                />
                <h3>Charmander</h3>
                <h4>Fire</h4>
                <h4>blaze</h4>
              </div>
            </div>

            <div class="img_pokemon">
              <div class="img_pokemon_titulo">
                <h6>0.6m</h6>
                <h6>8.5kg</h6>
              </div>
              <div class="img_pokemon_contenido">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                  width="20%"
                  alt=""
                />
                <h3>Charmander</h3>
                <h4>Fire</h4>
                <h4>blaze</h4>
              </div>
            </div>
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
