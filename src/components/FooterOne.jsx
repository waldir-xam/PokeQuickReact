import React from "react";
import trainerOne from "../img/trainer-red.svg";
import trainerTwo from "../img/trainer-blue.svg";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* las clases llevan '-home' porque este footerONe esta relacionado al HOME */
const FooterOne = () => {
  return (
    <div className="mx-auto text-pokewhite lg:max-w-7xl lg:px-2">
      <div className="mx-auto flex w-10/12 flex-row flex-wrap justify-center gap-4 rounded-2xl py-6 font-semibold">
        <div className="m-auto flex w-full flex-row items-center justify-around">
          <h2 className="px-6 text-left text-xl font-semibold text-pokewhite lg:text-3xl">
            Escoge tu entrenador
          </h2>
          <div className="flex w-full flex-row items-center justify-end gap-2 lg:gap-6">
            {/* DIALOGO DE ESCOGER POKEMON */}
            <div className="flex w-6/12 animate-pulso3 rounded-xl border-2 border-black bg-pokewhite p-3 text-center text-sm font-normal text-black md:top-56 md:w-4/12 lg:right-20 lg:w-6/12 lg:text-base">
              <span>
                Quieres elegir a <a className="text-pokered">Charmander</a>? Es
                un Pokemon tipo <a className="text-pokered">Fuego</a>
              </span>
            </div>
            {/* FIN DIALOGO DE ESCOGER POKEMON */}
            <div className="w-9/12 lg:w-4/12">
              {/* BOTON PARA PT 2 */}
              <Link to="/stage2">
                <button className="flex w-10/12 animate-pulso3 items-center justify-center rounded-xl bg-pokegreen px-6 py-3 text-center font-misc text-sm font-bold text-pokewhite hover:animate-shake md:w-3/12 lg:w-11/12 lg:p-4  lg:text-lg">
                  <span className="px-3">SIGUIENTE</span>
                  <Icon css="icon" icon={faArrowRight} />
                </button>
              </Link>
              {/* FIN BOTON PARA PT 2 */}
            </div>
          </div>
        </div>
        {/* ENTRANADORES */}
        <div className="h-26 flex flex-row gap-3 overflow-x-hidden lg:gap-5">
          <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red1</h4>
          </div>
          <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerTwo} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Blue2</h4>
          </div>
          <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red3</h4>
          </div>
          <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerTwo} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Blue4</h4>
          </div>
          <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red5</h4>
          </div>
          <div className="flex w-4/12 flex-col items-center justify-center rounded-3xl bg-pokeblack p-3 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="trainer" className="h-18 lg:h-24" />
            <h4 className="py-4">Red6</h4>
          </div>
        </div>
        {/* ENTRANADORES */}
      </div>
    </div>
  );
};

export default FooterOne;
