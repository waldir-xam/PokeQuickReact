import {
  faBars,
  faPause,
  faPlay,
  faTimes,
  faVolumeHigh,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";
import { useState } from "react";
import pokelogo from "../img/poke-logo.png";
import { Icon } from "./Icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuOpenBtn = document.querySelector(".menu-open-btn");
  const menuCloseBtn = document.querySelector(".menu-close-btn");
  const offcanvasMenu = document.querySelector(".offcanvas-menu");

  const handleBgColorChange = () => {
    if (bgColor === "bg-transparent") {
      setPrevBgColor(bgColor);
      setBgColor("bg-pokeblack");
    } else {
      setBgColor(prevBgColor);
      setPrevBgColor(null);
    }
  };
  /* AUDIO */
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("https://vgmsite.com/soundtracks/pokemon-game-boy-pok-mon-sound-complete-set-play-cd/vfywpihuos/1-01.%20Opening.mp3");
  /* FIN AUDIO */
  return (
    <header className="z-20 mx-auto flex w-full flex-row justify-between bg-black px-4">
      <div className="mx-auto flex w-11/12 flex-row items-center justify-between md:w-full lg:mx-auto lg:max-w-7xl lg:justify-between lg:p-2">
        <div>
          <button
            className="animate animate-pulso-custom h-12 w-12 animate-pulso rounded bg-pokeball bg-cover bg-no-repeat duration-300 hover:animate-shake"
            id="menuBtn"
            onClick={() => {
              setShowMenu(!showMenu);
              handleBgColorChange();
            }}
          >
            {showMenu ? (
              <button className="menu-close-btn" css="icon" />
            ) : (
              <button className="menu-open-btn" css="icon" />
            )}
          </button>
        </div>
        {/* NAV OFF CANVAS */}
        <nav
          className={`${
            showMenu ? "block" : "hidden"
          } offcanvas-menu fixed top-0 left-0 flex h-screen w-7/12 translate-x-0 flex-col items-start justify-center border-r-2 border-black bg-pokered font-title font-semibold text-white shadow md:w-3/12 lg:w-3/12 xl:w-3/12`}
        >
          <span className="absolute top-4 right-6">
            <button
              className="menu-close-btn hover:text-yellow-mam cursor-pointer bg-pokered text-white duration-300 hover:text-black lg:block"
              style={{ fontSize: "1.8em" }}
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <Icon className="menu-close-btn" css="icon" icon={faTimes} />
              ) : (
                <Icon className="menu-open-btn" css="icon" icon={faBars} />
              )}
            </button>
          </span>
          <figure className="w-full">
            <Link to="/">
              <img className="mx-auto h-16" src={pokelogo} alt="logo" />
            </Link>
          </figure>
          <ul className=" flex w-full  flex-col items-start py-4 md:justify-center lg:flex-col">
            <Link to="/" className=" w-full">
              <li className="w-full py-5 pl-12 text-left duration-300 hover:bg-black hover:text-pokewhite md:mr-8">
                Inicio
              </li>
            </Link>
            <Link to="/mypokemons" className="w-full">
              <li className="w-full py-5 pl-12 text-left duration-300 hover:bg-black hover:text-pokewhite md:mr-8">
                Mis Pokemon
              </li>
            </Link>

            <Link to="pokedex" className="w-full">
              <li className="w-full py-5 pl-12 text-left duration-300 hover:bg-black hover:text-pokewhite md:mr-8">
                Pokedex
              </li>
            </Link>
          </ul>
          <ul className=" flex w-full flex-col justify-center gap-3">
            <li className="mx-auto w-6/12 rounded-2xl border-2 bg-transparent p-2 px-4 text-center duration-300 hover:bg-black hover:text-pokered">
              <Link to="/login">Iniciar Sesion</Link>
            </li>
            <li className="mx-auto w-6/12 rounded-2xl border-2 bg-transparent p-2 px-4 text-center duration-300 hover:bg-black hover:text-pokered">
              <Link to="/signup">Registrate</Link>
            </li>
          </ul>
          <ul className="mx-auto flex w-9/12 flex-row justify-around py-4 md:w-6/12 md:justify-around lg:w-7/12 lg:justify-around">
            <li className="bg-yellow-mam flex h-9 w-9 cursor-pointer items-center justify-center text-white duration-300 hover:bg-black">
              <Icon css="icon" icon={faFacebookF} />
            </li>
            <li className="bg-yellow-mam flex h-9 w-9 cursor-pointer items-center justify-center text-white duration-300 hover:bg-black">
              <Icon css="icon" icon={faTwitter} />
            </li>
            <li className="bg-yellow-mam flex h-9 w-9 cursor-pointer items-center justify-center text-white duration-300 hover:bg-black">
              <Icon css="icon" icon={faLinkedinIn} />
            </li>
            <li className="bg-yellow-mam flex h-9 w-9 cursor-pointer items-center justify-center text-white duration-300 hover:bg-black">
              <Icon css="icon" icon={faYoutube} />
            </li>
          </ul>
        </nav>
        {/* fin NAV OFF CANVAS */}
        <figure className="">
          <Link to="/">
            <img className="h-14" src={pokelogo} alt="logo" />
          </Link>
        </figure>
        <div className="flex animate-pulso cursor-pointer flex-row items-center font-title  font-medium text-white">
          <div className="flex gap-4 font-semibold duration-300">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-pokered"
            >
              {isPlaying ? (
                <Icon css="icon" icon={faPause} />
              ) : (
                <Icon css="icon" icon={faPlay} />
              )}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-pokered"
            >
              {isMuted ? (
                <Icon css="icon" icon={faVolumeMute} />
              ) : (
                <Icon css="icon" icon={faVolumeUp} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
