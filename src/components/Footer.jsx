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
    <footer className=" flex h-16 w-full  items-center bg-black px-4 font-title text-pokewhite">
      <div className="mx-auto flex w-full flex-row justify-between p-2 lg:max-w-7xl">
        <span className="">All rights reserved. Made by Team Hackerman</span>
        <ul className="flex flex-row gap-4" style={{ fontSize: "1.2em" }}>
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
