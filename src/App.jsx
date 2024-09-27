import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Compare from "./routers/compare/Compare";
import Home from "./routers/home/Home";
import Footer from "./components/footer/Footer";
import Cart from "./routers/cart/Cart";
import Heart from "./routers/heart/Heart";
import Search from "./routers/search/Search";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
