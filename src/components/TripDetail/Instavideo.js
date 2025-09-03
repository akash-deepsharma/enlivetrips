"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Instavideo() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const instraVideos = [
    {
      instagram_link: `https://www.instagram.com/reel/DGN1r9eyxXH/embed`,
      thumb: "/img/gallery/gallery_9_1.jpg",
    },
    {
      instagram_link: `https://www.instagram.com/reel/DGN1r9eyxXH/embed`,
      thumb: "/img/gallery/gallery_9_2.jpg",
    },
    {
      instagram_link: `https://www.instagram.com/reel/DGN1r9eyxXH/embed`,
      thumb: "/img/gallery/gallery_9_3.jpg",
    },
    {
      instagram_link: `https://www.instagram.com/reel/DGN1r9eyxXH/embed`,
      thumb: "/img/gallery/gallery_9_4.jpg",
    },
  ];

  return (
    <div
      className="sidebar-gallery-area bg-smoke space position-relative"
      style={{
        backgroundImage: "url(/img/bg/shape_bg_1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-fluid">
        <div className="title-area text-center">
          <span className="sub-title">We Are On Instagram</span>
          <h2 className="sec-title">
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>{" "}
            Follow Us
          </h2>
        </div>

        <div className="slider-area">
          <Swiper
            loop={true}
            touchRatio={1.2}
            speed={1000}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1400: { slidesPerView: 6 },
            }}
            className="has-shadow"
          >
            {instraVideos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-thumb2">
                  <img
                    src={video.thumb}
                    alt={`Instagram Video ${index + 1}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedVideo(video.instagram_link)}
                  />
                  <i
                    className="gallery-btn"
                    role="button"
                    onClick={() => setSelectedVideo(video.instagram_link)}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Popup Modal */}
        {selectedVideo && (
          <div id="login-form" class="popup-login-register mfp-hide" onClick={() => setSelectedVideo(null)} >
             <div className=" bg-white rounded-xl overflow-hidden w-[90%] max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <button class="closeButton border-0" onClick={() => setSelectedVideo(null)} >
                <FontAwesomeIcon icon={faTimes}/>
              </button>
              <iframe
                src={selectedVideo}
                width="100%"
                height="500"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div> 
          </div>
        )}
      </div>
    </div>
  );
}
