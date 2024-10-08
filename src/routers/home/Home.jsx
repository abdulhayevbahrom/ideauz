import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import {uyUchunMaishiyTexnikaData, kattaMaishiyTexnikaData, maishiyTexnika, smartfonData } from "../../data/productsData";

function Home() {
  return (
    <div>
      <Banner />
      <Products title="Sotuvlar Xiti" data={maishiyTexnika} />
      <Products title="Smartfonlar" data={smartfonData} />
      <Products title="Katta Maishiy Texnikalar" data={kattaMaishiyTexnikaData} />
      <Products title="Uy uchun kichik maishiy texnika" data={uyUchunMaishiyTexnikaData} />
    </div>
  );
}

export default Home;
