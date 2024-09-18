import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { maishiyTexnika } from "../../data/productsData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Products() {
  return (
    <div className="products">
      <div className="products_header">
        <h3>Sotuvlar xiti</h3>
        <Link to={"/"}>Hammasini ko'rish</Link>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={8}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {maishiyTexnika.map((item, index) => (
          <SwiperSlide className="product_item" key={index}>
            <img src={item.images[0]} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
