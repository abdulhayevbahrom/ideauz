import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import { maishiyTexnika, smartfonData } from "../../data/productsData";

function Home() {
  return (
    <div>
      <Banner />
      <Products title="Sotuvlar Xiti" data={maishiyTexnika} />
      <Products title="Smartfonlar" data={smartfonData} />
    </div>
  );
}

export default Home;
