"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import TourCard from "./TourCard";

export default function PopularTour() {
const tours = [
  {
    id: 1,
    title: "Greece Tour Package",
    image: "/img/tour/tour_box_1.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["1 Mar", "2 Apr", "3 May"]
  },
  {
    id: 2,
    title: "Italy Tour Package",
    image: "/img/tour/tour_box_2.jpg",
    rating: 4.8,
    price: 9800,
    duration: "7 Days",
    days: ["5 Mar", "10 Apr", "15 May"]
  },
  {
    id: 3,
    title: "Dubai Tour Package",
    image: "/img/tour/tour_box_3.jpg",
    rating: 4.8,
    price: 9180,
    duration: "7 Days",
    days: ["1 Jan", "2 Feb", "3 Mar","10 Jan", "20 Feb", "30 Mar"]
  },
  {
    id: 4,
    title: "Switzerland",
    image: "/img/tour/tour_box_4.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["8 Jan", "12 Feb", "18 Mar"]
  },
  {
    id: 5,
    title: "Greece Tour Package",
    image: "/img/tour/tour_box_5.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["1 Jun", "5 Jul", "10 Aug"]
  },
  {
    id: 6,
    title: "Italy Tour Package",
    image: "/img/tour/tour_box_5.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["2 Sep", "6 Oct", "12 Nov"]
  }
];



  return (
<>
    <div
        className="shape-mockup movingCar d-none d-xxl-block z-2 right-0 top-0 mt-60"
      >
        <Image src="/img/shape/car_1.png" alt="shape" width={200} height={200} style={{transform:"scaleX(-1)"}} />
      </div>
    <section
      className="tour-area position-relative bg-top-center  overflow-hidden space"
      id="service-sec"
      style={{ backgroundImage: `url('/img/bg/tour_bg_1.jpg')` }}
    >
      
      <div className="container th-container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <span className="sub-title">Best Place For You</span>
              <h2 className="sec-title">Most Popular Tour</h2>
              <p className="sec-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="slider-area tour-slider">
          <Swiper
            modules={Autoplay}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            className="swiper th-slider has-shadow slider-drag-wrap"
          >
            {tours.map((tour) => (
              <SwiperSlide  key={tour.id}  className="swiper-slide">
                <TourCard data={tour}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
}
