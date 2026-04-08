"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Glimpses.css";

const Glimpses = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        spaceBetween={100}
        slideClass="swiper-slide"
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="carouselCardContainer">
          <SwiperSlide>
            <div className="wrapper">
              <img
                className="d-block  aboutimg"
                alt=""
                src={"/assets/about_carousal/1.jpg"}
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <img className="d-block  aboutimg" alt="" src={"/assets/about_carousal/2.jpg"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <img className="d-block  aboutimg" alt="" src={"/assets/about_carousal/3.jpg"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <img className="d-block  aboutimg" alt="" src={"/assets/about_carousal/4.jpg"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <img className="d-block  aboutimg" alt="" src={"/assets/about_carousal/5.jpg"} />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Glimpses;
