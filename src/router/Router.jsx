import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Part2 from "../pages/Part2";
import "../index.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage2" element={<Part2 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
