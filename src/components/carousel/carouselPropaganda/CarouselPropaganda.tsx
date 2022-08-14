import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarouselPropaganda.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

 function CarouselPropaganda() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/C6EuPtV.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarouselPropaganda;
