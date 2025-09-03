"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Autoplay, Pagination } from "swiper/modules";
import { CategoriesCard } from "./CategoriesCard";
import { homeTrips } from "@/services/tripsApi";

const CurveSlider = () => {
  const [images, setImages] = useState([
    { image: "/img/category/category_1_1.jpg", title: "Cruises" },
    { image: "/img/category/category_1_2.jpg", title: "Hiking" },
    { image: "/img/category/category_1_3.jpg", title: "Airbirds" },
    { image: "/img/category/category_1_4.jpg", title: "Wildlife" },
    { image: "/img/category/category_1_5.jpg", title: "Walking" },
  ]);

  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Force Swiper update after mount (fixes autoplay/scroll issue)
  useEffect(() => {
    const handle = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    }, 500);

    return () => clearTimeout(handle);
  }, [loading]);

  // curve effect (wheel)
  const multiplier = { translate: 0.1, rotate: 0.01 };

  useEffect(() => {
    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty =
          Math.abs(r) * multiplier.translate -
          rect.width * multiplier.translate;
        if (ty < 0) ty = 0;
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${
          -r * multiplier.rotate
        }deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    let frameId;
    const raf = () => {
      frameId = requestAnimationFrame(raf);
      calculateWheel();
    };
    raf();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className="swiper th-slider has-shadow categorySlider"
      id="categorySlider1"
      style={{
        backgroundImage: "url('/img/bg/category_bg_1.png')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // store swiper instance
        slidesPerView={5}
        loop={true}
        grabCursor={true}
        simulateTouch={true}
        draggable={true}
        spaceBetween={50}
        touchRatio={1.2}
        speed={1000}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".slider-pagination" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
          1400: { slidesPerView: 5 },
        }}
      > 
        {trips.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoriesCard image={item.image} title={item.title} />
              {/* <div className="category-card single">
                <div
                  className="box-img global-img position-relative"
                  style={{ width: "100%", height: "250px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fit-cover w-100 h-100"
                  />
                </div>
                <h3 className="box-title">
                  <Link href="destination">{item.title}</Link>
                </h3>
                <Link href="destination" className="line-btn">
                  See more
                </Link>
              </div> */}
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="slider-pagination"></div>
    </div>
  );
};

export default CurveSlider;
