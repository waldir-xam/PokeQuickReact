import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <layout className="flex min-h-screen flex-col">
      <Header />
      <div className="hero absolute -z-20 min-h-screen w-full bg-gradient-to-r from-teal-400 to-pokeblue">
        <div className=" absolute top-0 right-0 -z-10 h-1/4 w-full  rounded-b-full  bg-pokered border-none md:h-1/4 md:w-8/12 lg:h-2/5 lg:w-6/12"></div>
        <div className=" absolute bottom-0 -left-28 -z-10 h-1/4 w-full rounded-t-full bg-pokered border-none md:h-2/5 lg:h-3/5 lg:w-9/12"></div>
      </div>
      {children}
      <Footer />
    </layout>
  );
};

export default Layout;
