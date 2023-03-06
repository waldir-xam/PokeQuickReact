import React from "react";
import trainerOne from "../img/trainer-red.svg";
import trainerTwo from "../img/trainer-blue.svg";

/* las clases llevan '-home' porque este footerONe esta relacionado al HOME */
const FooterOne = () => {
  return (
    <div className="mx-auto text-pokewhite lg:max-w-7xl lg:px-6">
      <h2 className="w-full py-4 text-center text-3xl font-semibold">
        Escoge tu entrenador
      </h2>
      {/* ENTRANADORES */}
      <div className="mx-auto flex justify-center rounded-2xl bg-pokeblack p-2 font-semibold gap-4 flex-wrap w-11/12">
        <div className="flex flex-col items-center justify-center hover:animate-pulso1">
          <img src={trainerOne} alt=""  className="h-24"/>
          <h4>Red</h4>
        </div>
        <div className="flex flex-col items-center justify-center hover:animate-pulso1">
          <img src={trainerTwo} alt=""  className="h-24"/>
          <h4>Blue</h4>
        </div>
        <div className="flex flex-col items-center justify-center hover:animate-pulso1">
          <img src={trainerOne} alt=""  className="h-24"/>
          <h4>Red</h4>
        </div>
        <div className="flex flex-col items-center justify-center hover:animate-pulso1">
          <img src={trainerTwo} alt="" className="h-24" />
          <h4>Blue</h4>
        </div>
        <div className="flex flex-col items-center justify-center hover:animate-pulso1">
          <img src={trainerOne} alt=""  className="h-24"/>
          <h4>Red</h4>
        </div>
        <div className="flex flex-col items-center justify-center hover:animate-pulso1">
          <img src={trainerOne} alt="" className="h-24" />
          <h4>Red</h4>
        </div>

      </div>
    </div>
  );
};

export default FooterOne;
