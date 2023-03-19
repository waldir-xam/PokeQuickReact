import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
/*   const [bgColor, setBgColor] = useState("bg-transparent");
  const [prevBgColor, setPrevBgColor] = useState(null);
 */
/*   const handleBgColorChange = () => {
    if (bgColor === "bg-transparent") {
      setPrevBgColor(bgColor);
      setBgColor("bg-pokeblack duration-500");
    } else {
      setBgColor(prevBgColor);
      setPrevBgColor(null);
    }
  }; */

  const changeBodyBackground = (color) => {
    document.body.style.backgroundColor = color;
  }

  
  return (
    <div className={`flex min-h-screen flex-col`}>
      <Header />

      <div className="hero absolute -z-20 min-h-screen w-full bg-gradient-to-r from-[#0172af] to-[#80c8a7]">
        <div className=" absolute top-0 right-0 -z-10 hidden h-1/4  w-full  rounded-b-full border-none bg-pokered md:h-1/4 md:w-8/12 lg:block lg:h-2/5 lg:w-6/12 lg:max-w-3xl"></div>
        <div className=" absolute bottom-0 -left-28 -z-10 h-1/4 w-full rounded-t-full border-none bg-pokered md:h-2/5 lg:h-3/6 lg:w-9/12 lg:max-w-4xl"></div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
