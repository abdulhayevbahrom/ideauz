import React from "react";
import "./Banner.css";
import BannerRight from "./BannerRight";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

function Banner() {
  let bannerImages = [
    "https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FJuly2024%2FqUAnAkSeCeTe61zutP4J.png&w=3840&q=75",
    "https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FAugust2024%2F93ah7UUF3MMH5cldMUAj.png&w=3840&q=75",
    "https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FAugust2024%2F4dtoXETLlPsQEYJQBCu7.png&w=3840&q=75",
    "https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FAugust2024%2FMsaGBubeDhyjzfMMBFIg.png&w=3840&q=75",
    "https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FAugust2024%2FX7zm2NMAAh7xZCuNRbGE.png&w=3840&q=75",
    "https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FSeptember2024%2FUNq8rgci1ttcgJpv5D72.png&w=3840&q=75",
  ];
  return (
    <div className="banner">
      <div className="left">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {bannerImages?.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <BannerRight />
    </div>
  );
}

export default Banner;
