import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarouselProduto.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import CardProdutos from "../../card/cardProdutos/CardProdutos";
import CardProdutos2 from "../../card/cardProdutos/cardProdutos2";
import CardProdutos3 from "../../card/cardProdutos/CardProdutos3";
import CardProdutos4 from "../../card/cardProdutos/CardProdutos4";
import CardProdutos5 from "../../card/cardProdutos/CardProdutos5";
import CardProdutos6 from "../../card/cardProdutos/CardProdutos6";
import CardProduto from "../../card/cardProdutos/CardProduto";

function CarouselProduto() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide> <CardProduto/> </SwiperSlide>
        <SwiperSlide> <CardProduto/> </SwiperSlide>
        <SwiperSlide> <CardProdutos3/> </SwiperSlide>
        <SwiperSlide> <CardProdutos4/> </SwiperSlide>
        <SwiperSlide> <CardProdutos5/> </SwiperSlide>
        <SwiperSlide> <CardProdutos6/> </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarouselProduto;