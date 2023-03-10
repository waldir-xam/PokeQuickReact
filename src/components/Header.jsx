import {
  faBars,
  faTimes,
  faVolumeHigh,
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

  return (
    <header className="mx-auto flex w-full flex-row justify-between bg-black px-4 z-20">
      <div className="mx-auto flex w-11/12 flex-row items-center justify-between md:w-full lg:mx-auto lg:max-w-7xl lg:justify-between lg:p-2">
        {/* mx-auto flex w-full flex-row justify-between p-2 lg:max-w-7xl */}
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
            <img className="mx-auto h-16" src={pokelogo} alt="logo" />
          </figure>
          <ul className=" flex w-full  flex-col items-start py-4 md:justify-center lg:flex-col">
            <li className="w-full py-5 pl-12 text-left duration-300 hover:bg-black hover:text-pokewhite md:mr-8">
              <Link to="/" className="">
                Inicio
              </Link>
            </li>
            <li className="w-full py-5 pl-12 text-left duration-300 hover:bg-black hover:text-pokewhite md:mr-8">
              <Link to="nosotros" className="">
                Mis Pokemon
              </Link>
            </li>
            <li className="w-full py-5 pl-12 text-left duration-300 hover:bg-black hover:text-pokewhite md:mr-8">
              <Link to="servicios" className="">
                Pokedex
              </Link>
            </li>
            <li className="w-full py-5 pl-12 text-left duration-300 hover:bg-black hover:text-pokewhite md:mr-8">
              <Link to="contacto" className="">
                Contacto
              </Link>
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
        <div className="flex animate-pulso cursor-pointer flex-row items-center font-title  font-medium text-white hover:text-black">
          <span className="hidden px-2 font-semibold duration-300 hover:text-pokered md:block lg:block xl:block">
            <Icon css="icon" icon={faVolumeHigh} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
