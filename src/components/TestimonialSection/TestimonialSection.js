"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const testimonials = [
  {
    id: 1,
    name: "Maria Doe",
    role: "Traveller",
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live.",
    avatar: "/img/testimonial/testi_1_1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Andrew Simon",
    role: "Traveller",
    text: "The commitment to eco-friendly living really impressed me. It’s not just marketing—it’s genuinely built into the lifestyle here.",
    avatar: "/img/testimonial/testi_1_2.jpg",
    rating: 2.5,
  },
  {
    id: 3,
    name: "Alex Jordan",
    role: "Traveller",
    text: "Beautifully designed community with nature at its heart. I finally feel like I belong somewhere sustainable and modern.",
    avatar: "/img/testimonial/testi_1_1.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Maria Doe",
    role: "Traveller",
    text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live.",
    avatar: "/img/testimonial/testi_1_1.jpg",
    rating: 3,
  },
  {
    id: 5,
    name: "Andrew Simon",
    role: "Traveller",
    text: "The commitment to eco-friendly living really impressed me. It’s not just marketing—it’s genuinely built into the lifestyle here.",
    avatar: "/img/testimonial/testi_1_2.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Jordan",
    role: "Traveller",
    text: "Beautifully designed community with nature at its heart. I finally feel like I belong somewhere sustainable and modern.",
    avatar: "/img/testimonial/testi_1_1.jpg",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section className="testi-area overflow-hidden space" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Client Say About us</h2>
        </div>

        <div className="slider-area">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
            speed={1000}
            pagination={{ clickable: true, el: ".slider-pagination" }}
            spaceBetween={30}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2, centeredSlides: true },
              992: { slidesPerView: 2, centeredSlides: true },
              1200: { slidesPerView: 2, centeredSlides: true },
              1400: { slidesPerView: 3, centeredSlides: true },
            }}
            className="testiSlider1 has-shadow"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{item.name}</h3>
                        <span className="testi-card_desig">{item.role}</span>
                      </div>
                    </div>

                    <div className="testi-card_review ">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const fullStars = Math.floor(item.rating);
                        const hasHalfStar = item.rating % 1 !== 0;

                        if (i < fullStars) {
                          return <FontAwesomeIcon key={i} icon={faSolidStar} style={{color:"#FFA944"}} />;
                        } else if (i === fullStars && hasHalfStar) {
                          return <FontAwesomeIcon key={i} icon={faStarHalfStroke} style={{color:"#FFA944"}}/>;
                        } else {
                          return <FontAwesomeIcon key={i} icon={faRegularStar} style={{color:"#FFA944"}}/>;
                        }
                      })}
                    </div>
                  </div>

                  <p className="testi-card_text">“{item.text}”</p>

                  <div className="testi-card-quote">
                    <Image
                      src="/img/icon/testi-quote.svg"
                      alt="quote"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-pagination"></div>
        </div>
      </div>

      {/* Shapes */}
      <div
        className="shape-mockup d-none d-xl-block"
        data-bottom="-2%"
        data-right="0%"
      >
        <Image
          src="/img/shape/line2.png"
          alt="shape"
          width={200}
          height={200}
        />
      </div>
      <div
        className="shape-mockup movingX d-none d-xl-block"
        data-top="30%"
        data-left="5%"
      >
        <Image
          src="/img/shape/shape_7.png"
          alt="shape"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
