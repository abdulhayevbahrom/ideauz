import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Compare from "./routers/compare/Compare";
import Home from "./routers/home/Home";
import Footer from "./components/footer/Footer";
import Cart from "./routers/cart/Cart";
import Heart from "./routers/heart/Heart";
// import Bosh from "./components/bo'sh/Bo'sh";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Bosh /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
