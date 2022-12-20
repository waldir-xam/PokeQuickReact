import React from "react";

const CardCaracteristicas = (props) => {
  return (
    <div className="container__caracteristicas">
      <div className="container__caracteristicas__item">
        <h4>Vida</h4>
        <progress max="100" value={props.vida}>
          {props.vida}%
        </progress>
        <h4>{props.vida}</h4>
      </div>
      <div className="container__caracteristicas__item">
        <h4>Ataque</h4>
        <progress max="100" value={props.ataque}>
          {props.ataque}%
        </progress>
        <h4>{props.ataque}</h4>
      </div>
      <div className="container__caracteristicas__item">
        <h4>Defensa</h4>
        <progress max="100" value={props.defensa}>
          {props.defensa}%
        </progress>
        <h4>{props.defensa}</h4>
      </div>
      <button className="container__caracteristicas__button">Comprar</button>
    </div>
  );
};

export default CardCaracteristicas;
