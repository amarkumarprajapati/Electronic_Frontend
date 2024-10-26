// src/Router.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Products2 from "../components/Products/Products2";
import TopProducts from "../components/Products/TopProducts";
import Banner from "../components/Banner/Banner";
import Suscribe from "../components/Banner/Suscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/top-products" element={<TopProducts />} />
        <Route path="/products2" element={<Products2 />} />
        <Route path="/subscribe" element={<Suscribe />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Banner />
      <Footer />
    </Router>
  );
}

export default AppRouter;
