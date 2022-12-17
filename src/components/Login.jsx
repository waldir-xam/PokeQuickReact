import React from "react";
import "../styles/modal.css";
import logo_title from "../img/pngegg 1.png";

const Login = () => {
  return (
    <div className="ModalContainer">
      <div>
        <div className="logo_title">
          <img className="" src={logo_title} />
        </div>
        <div>
          <ul className="navlist">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Pokedex</a>
            </li>
            <li>
              <a href="">Mis Pokemons</a>
            </li>
            <li>
              <a href="">Mochila</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="btnContainer">
          <div className="btnbox1">
            <button className="btnregistro">Registrese</button>
          </div>
          <div className="btnbox2">
            <button className="btnlogin">Iniciar Sesión</button>
          </div>

          <h2 className="subtitle">Iniciar Sesión con:</h2>
          <div className="redes">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
