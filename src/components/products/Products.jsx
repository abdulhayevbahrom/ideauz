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
import { addToHeart, removeFromHeart } from "../../context/heartSlice";
import { addToCart, removeFromCart } from "../../context/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

function Products({ title, data }) {
  const dispatch = useDispatch();
  const heartData = useSelector((ombor) => ombor.heart);
  const cartData = useSelector((ombor) => ombor.cart);
  console.log("savatcha>>>>>", cartData);

  function addToFavorites(product) {
    dispatch(addToHeart(product));
  }

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
              {heartData?.some((i) => i.id === item.id) ? (
                <FaHeart
                  className="redHeart"
                  onClick={() => dispatch(removeFromHeart(item.id))}
                />
              ) : (
                <AiOutlineHeart onClick={() => addToFavorites(item)} />
              )}
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
              {cartData.some((i) => i.id === item.id) ? (
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="product_item_orangeBtn"
                >
                  <IoMdCheckmark />
                </button>
              ) : (
                <button onClick={() => dispatch(addToCart(item))}>
                  <CgShoppingBag />
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
