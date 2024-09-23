import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgShoppingBag } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { MdBalance } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Products({ title, data }) {
  return (
    <div className="products">
      <div className="products_header">
        <h3>{title}</h3>
        <Link to={"/"}>
          Hammasini ko'rish <FaArrowRight className="ArrowRight" />
        </Link>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide className="product_item" key={index}>
            <div className="product_icon_head">
              <MdBalance />
              <AiOutlineHeart />
            </div>

            <Link className="product_img" to={"/"}>
              <img src={item.images[0]} alt="img" />
            </Link>
            <b>{item.price} so'm</b>
            <p className="product_price_credit">
              {Math.floor(item.price / 6)} so'mdan
            </p>
            <p className="product_name">{item.name}</p>
            <span className="product_brend">
              brend:
              <Link to={"/"}>{item.brend}</Link>
            </span>
            <div className="product_actions">
              <button>Hozirni o'zidayoq xarid qilish</button>
              <button>
                <CgShoppingBag />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
