import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { maishiyTexnika } from "../../data/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgShoppingBag } from "react-icons/cg";
import { FaBalanceScale } from 'react-icons/fa';
import { AiOutlineHeart } from "react-icons/ai";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Pagination, Navigation } from "swiper/modules";

function Products() {
  return (
    <div className="products">
      <div className="products_header">
        <h3>Sotuvlar xiti</h3>
        <div className="products_header_item">

        <Link to={"/"}>Hammasini ko'rish</Link>
        <MdOutlineArrowRightAlt className="ArrowRight"/>
        </div>
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
            <div className="product_icon_head">
            <FaBalanceScale className="product_icon"/>
              <AiOutlineHeart className="product_icon"/>
            </div>
            
            <img src={item.images[0] } alt="" />
            <b>{item.price} so'm</b>
            <p className="product_i_p">{ Math.floor(item.price / 6)} so'mdan</p>
            <p className="product_i_pp">{item.name}</p>
            <span>brend: <Link className="product_brend" to={"/"}>{item.brend}</Link></span>
            <div>
              <button>Hozirni o'zidayoq xarid qilish</button>
              <button><CgShoppingBag /></button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
