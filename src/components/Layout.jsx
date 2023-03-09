import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [prevBgColor, setPrevBgColor] = useState(null);

  const handleBgColorChange = () => {
    if (bgColor === "bg-transparent") {
      setPrevBgColor(bgColor);
      setBgColor("bg-pokeblack duration-500");
    } else {
      setBgColor(prevBgColor);
      setPrevBgColor(null);
    }
  };

  return (
    <div className={`flex min-h-screen flex-col ${bgColor}`}>
      <Header />
      <button
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={handleBgColorChange}
      >
        {bgColor === "bg-pokeblack"
          ? "Cambiar a color pokeblack"
          : "Regresar al bg transparent"}
      </button>
      <div className="hero absolute -z-20 min-h-screen w-full bg-gradient-to-r from-teal-400 to-pokeblue">
        <div className=" absolute top-0 right-0 -z-10 h-1/4 w-full  rounded-b-full  border-none bg-pokered md:h-1/4 md:w-8/12 lg:h-2/5 lg:w-6/12"></div>
        <div className=" absolute bottom-0 -left-28 -z-10 h-1/4 w-full rounded-t-full border-none bg-pokered md:h-2/5 lg:h-3/5 lg:w-9/12"></div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
