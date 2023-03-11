import React from "react";
import { Icon } from "./Icons";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className=" flex lg:h-auto w-full  items-center bg-black px-4 font-title text-pokewhite h-auto">
      <div className="mx-auto flex w-full lg:flex-row lg:justify-between lg:p-2 lg:max-w-7xl flex-col items-center h-auto">
        <div className="lg:order-1 order-2 py-2">All rights reserved. Made by Team Hackerman</div>
        <ul className="flex flex-row gap-4 lg:order-2 order-1 py-" style={{ fontSize: "1.2em" }}>
          <li className="duration-300 hover:text-pokered cursor-pointer">
            <Icon css="icon" icon={faFacebook} />
          </li>
          <li className="duration-300 hover:text-pokered cursor-pointer">
            <Icon css="icon" icon={faInstagram} />
          </li>
          <li className="duration-300 hover:text-pokered cursor-pointer">
            <Icon css="icon" icon={faTwitter} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
