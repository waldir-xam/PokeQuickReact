import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Part2 from "../pages/Part2";
import "../index.css";
import Mypokemons from "../pages/Mypokemons";
import Pokedex from "../pages/Pokedex";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage2" element={<Part2 />} />
          <Route path="/mypokemons" element={<Part2 />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
