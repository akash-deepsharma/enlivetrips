"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Gallery() {
  const images = [
    { src: "/img/gallery/gallery_1_1.jpg", alt: "Gallery 1" },
    { src: "/img/gallery/gallery_1_2.jpg", alt: "Gallery 2" },
    { src: "/img/gallery/gallery_1_3.jpg", alt: "Gallery 3" },
    { src: "/img/gallery/gallery_1_3.jpg", alt: "Gallery 4" },
    { src: "/img/gallery/gallery_1_5.jpg", alt: "Gallery 5" },
    { src: "/img/gallery/gallery_1_6.jpg", alt: "Gallery 6" },
    { src: "/img/gallery/gallery_1_7.jpg", alt: "Gallery 7" },
    { src: "/img/gallery/gallery_2_1.jpg", alt: "Gallery 8" },
    { src: "/img/gallery/gallery_2_2.jpg", alt: "Gallery 9" },
    { src: "/img/gallery/gallery_2_3.jpg", alt: "Gallery 10" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setThumbsSwiper(null); // 🔑 Reset to avoid destroyed swiper errors
  };

  // 🔒 Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="min_box-detail Age_limit container my-4">
      <div className="title">
        <h6 className="text-start fw-bold mb-4">Gallery</h6>
      </div>
      <div className="container my-5">
        <div className="row g-2">
          {/* Large Left Image */}
          <div className="col-md-6">
            <div
              className="h-100 position-relative"
              style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden" }}
              onClick={() => openModal(0)}
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-100 h-100 img-fluid"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Grid 2x2 */}
          <div className="col-md-6 d-grid gap-2">
            <div className="row g-2">
              {images.slice(1, 5).map((img, index) => (
                <div className="col-6" key={index + 1}>
                  <div
                    className="position-relative h-100"
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      index === 3
                        ? openModal(0) // open gallery if last tile
                        : openModal(index + 1)
                    }
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-100 h-100 img-fluid"
                      style={{ objectFit: "cover" }}
                    />

                    {/* Overlay for last image */}
                    {index === 3 && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                        <span className="text-white fw-bold fs-5">+13 Photos</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal with Gallery Slider */}
        {showModal && (
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-0 d-flex flex-column align-items-center justify-content-center z-3">
            {/* Close Button */}
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>

            {/* Main Slider */}
            <div style={{ width: "80%", height: "70%" }}>
              <Swiper
                modules={[Navigation, Pagination, Thumbs, Keyboard]}
                navigation
                keyboard={{ enabled: true }}
                thumbs={{ swiper: thumbsSwiper }}
                initialSlide={currentIndex}
                className="h-100"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="img-fluid rounded"
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnails Slider */}
            <div style={{ width: "80%", height: "100px" }} className="mt-3">
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                slidesPerView={6}
                spaceBetween={10}
                watchSlidesProgress
                className="h-100"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="img-fluid rounded"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "fill",
                        cursor: "pointer",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
