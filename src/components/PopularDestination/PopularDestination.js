"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PopularCard from "./PopularCard";

export default function PopularDestination() {
  const [images, setImages] = useState([
    { image: "/img/destination/destination_1_1.jpg", title: "Maldives", subtitle: "15 Listing" },
    { image: "/img/destination/destination_1_2.jpg", title: "Thailand", subtitle: "22 Listing" },
    { image: "/img/destination/destination_1_3.jpg", title: "Belgium", subtitle: "25 Listing" },
    { image: "/img/destination/destination_1_4.jpg", title: "Island", subtitle: "28 Listing" },
    { image: "/img/destination/destination_1_5.jpg", title: "Maldives", subtitle: "30 Listing" },
    { image: "/img/destination/destination_1_3.jpg", title: "Belgium", subtitle: "25 Listing" },
    { image: "/img/destination/destination_1_4.jpg", title: "Island", subtitle: "28 Listing" },
    { image: "/img/destination/destination_1_5.jpg", title: "Maldives", subtitle: "30 Listing" },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Top Destination</span>
          <h2 className="sec-title">Popular Destination</h2>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500 }}
          speed={1000}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 95,
            depth: 212,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
          className="th-slider destination-slider slider-drag-wrap"
        >
          {loading ? (
            <SkeletonTheme baseColor="#cccccc" highlightColor="#f7fdffa1">
              {Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="single text-black">
                    <Skeleton height={300} width={"100%"} />
                  </div>
                </SwiperSlide>
              ))}
            </SkeletonTheme>
          ) : (
            images.map((item, index) => (
              <SwiperSlide key={index}>
                <PopularCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}
