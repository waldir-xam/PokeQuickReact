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
          <h2 className="px-6 text-left text-3xl font-semibold text-pokewhite">
            Escoge tu entrenador
          </h2>
          <div className="flex flex-row items-center justify-end gap-6">
            {/* DIALOGO DE ESCOGER POKEMON */}
            <div className="flex w-5/12 animate-pulso3 rounded-xl border-2 border-black bg-pokewhite p-3 text-center text-sm font-normal text-black md:top-56 md:w-4/12 lg:right-20 lg:w-6/12 lg:text-base">
              <span>
                Quieres elegir a <a className="text-pokered">Charmander</a>? Es
                un Pokemon tipo <a className="text-pokered">Fuego</a>
              </span>
            </div>
            {/* FIN DIALOGO DE ESCOGER POKEMON */}
            <div className="w-4/12">
              {" "}
              {/* BOTON PARA PT 2 */}
              <Link to="/stage2">
                <button className="md:bottom-78 right-0 bottom-80  flex w-10/12 animate-pulso3 items-center justify-center rounded-xl bg-pokegreen p-3 text-center font-misc text-sm font-bold text-pokewhite hover:animate-shake md:w-3/12 lg:w-11/12 lg:p-4  lg:text-lg">
                  <span className="px-1">SIGUIENTE</span>
                  <Icon css="icon" icon={faArrowRight} />
                </button>
              </Link>
              {/* FIN BOTON PARA PT 2 */}
            </div>
          </div>
        </div>
        {/* ENTRANADORES */}
        <div className="flex gap-5 overflow-scroll">
          <div className="flex flex-col items-center justify-center rounded-3xl bg-pokeblack p-5 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="" className="h-24" />
            <h4 className="py-4">Red</h4>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-pokeblack p-5 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerTwo} alt="" className="h-24" />
            <h4 className="py-4">Blue</h4>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-pokeblack p-5 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="" className="h-24" />
            <h4 className="py-4">Red</h4>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-pokeblack p-5 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerTwo} alt="" className="h-24" />
            <h4 className="py-4">Blue</h4>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-pokeblack p-5 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="" className="h-24" />
            <h4 className="py-4">Red</h4>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-pokeblack p-5 duration-100 hover:animate-pulso2 lg:p-4">
            <img src={trainerOne} alt="" className="h-24" />
            <h4 className="py-4">Red</h4>
          </div>
        </div>
        {/* ENTRANADORES */}
      </div>
    </div>
  );
};

export default FooterOne;
