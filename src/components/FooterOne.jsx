import React from "react";
import trainerOne from "../img/trainer-red.svg";
import trainerTwo from "../img/trainer-blue.svg";

import "../styles/FooterOne.css";
/* las clases llevan '-home' porque este footerONe esta relacionado al HOME */
const FooterOne = () => {
  return (
    <div>
      <div class="main__container2-home">
        <h3>Escoge tu entrenador</h3>
        <div class="container2-home">
          <div class="trainer-1-home">
            <img src={trainerOne} alt="" />
            <h4>Red</h4>
          </div>
          <div class="trainer-2-home">
            <img src={trainerTwo} alt="" />
            <h4>Blue</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
