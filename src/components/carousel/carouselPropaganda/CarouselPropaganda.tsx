import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./CarouselPropaganda.css";

// import required modules
import { Scrollbar } from "swiper";

 function CarouselPropaganda() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper3"
      >
        <SwiperSlide><img src="https://tpc.googlesyndication.com/simgad/15396217378504755094?" alt="" /></SwiperSlide>
    
      </Swiper>
    </>
  );
}

export default CarouselPropaganda;