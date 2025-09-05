"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TourCard from "./TourCard";
import { getPagewithSection } from "@/services/pageSection";
import { trendingPackage } from "@/services/packageApi";

const mainpage = await getPagewithSection(1, "popular_tour");
const trendingPkg = await trendingPackage();

export default function PopularTour() {
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
              <span className="sub-title">{mainpage.section[0].data.Text}</span>
              <h2 className="sec-title">{mainpage.section[1].data.Text}</h2>
              <p className="sec-text">
                {mainpage.section[2].data.content}
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
            {trendingPkg.map((tourpackage) => (
              <SwiperSlide  key={tourpackage.id}  className="swiper-slide">
                <TourCard data={tourpackage}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
}
