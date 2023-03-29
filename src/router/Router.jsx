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
import { AdminContextProvider } from "../components/contexts/AdminContext";
import LoginModal from "../components/common/LoginModal";

const Router = () => {
  return (
    <AdminContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stage2" element={<Part2 />} />
            <Route path="/mypokemons" element={<Mypokemons />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginmodal" element={<LoginModal />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AdminContextProvider>
  );
};

export default Router;
