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
        <SwiperSlide><img src="https://thumbs.dreamstime.com/b/banner-de-propaganda-para-venda-no-dia-inicializa%C3%A7%C3%A3o-publicit%C3%A1rio-campanha-natal-design-promocional-brilhante-loja-200001187.jpg" alt="" /></SwiperSlide>
    
      </Swiper>
    </>
  );
}

export default CarouselPropaganda;