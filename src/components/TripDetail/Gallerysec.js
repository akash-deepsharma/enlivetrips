"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAnglesRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Gallerysec() {
  const dummyData = {
    packages_images: [
      { image: "https://www.enlivetrips.com/demoEnlivetrips/public/admin/assets/packageImage/17365941271.jpg" },
      { image: "https://www.enlivetrips.com/demoEnlivetrips/public/admin/assets/packageImage/17365941271.jpg" },
      { image: "https://www.enlivetrips.com/demoEnlivetrips/public/admin/assets/packageImage/17365941271.jpg" },
      { image: "https://www.enlivetrips.com/demoEnlivetrips/public/admin/assets/packageImage/17365941271.jpg" },
      { image: "https://www.enlivetrips.com/demoEnlivetrips/public/admin/assets/packageImage/17365941271.jpg" },
      { image: "https://www.enlivetrips.com/demoEnlivetrips/public/admin/assets/packageImage/17365941271.jpg" },
      { image: "https://www.enlivetrips.com/demoEnlivetrips/public/admin/assets/packageImage/17365941271.jpg" }
    ]
  };

  const [tripsImages, setTripsImages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTripsImages(dummyData);
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!tripsImages || tripsImages?.packages_images?.length <= 0) return null;

  return (
    <div className="bt-container mt-16 !px-0">
      {/* Desktop View */}
      <div className="sm:grid px-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 hidden">
        {tripsImages.packages_images.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "col-span-2 row-span-2 h-[60vh]" : ""
            } rounded-md h-[29vh] overflow-hidden cursor-pointer relative`}
            onClick={() => openModal(index)}
          >
            <img
              src={item.image}
              alt={`img-${index}`}
              className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all duration-200 ease-in-out"
            />
            {index === 4 && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
                <span className="text-white font-semibold text-lg flex items-center gap-2">
                  <FaAnglesRight className="text-xl" />
                  <span>{tripsImages.packages_images.length - 5} More</span>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex sm:hidden px-2">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 30 }
          }}
          modules={[Pagination, Autoplay, Navigation]}
        >
          {tripsImages.packages_images.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="swiper-slide w-full h-56 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={item.image}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-[9999]">
          <button
            className="absolute top-4 right-4 bg-white text-black rounded-full px-2 py-2 text-lg font-bold hover:bg-gray-200 transition-all"
            onClick={closeModal}
          >
            <IoMdClose />
          </button>
          <div className="flex flex-col items-center justify-evenly w-[90%] max-w-6xl">
            <div className="mb-4 max-h-[80vh] overflow-hidden">
              <img
                src={tripsImages.packages_images[currentIndex].image}
                alt="fullscreen"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            <Swiper
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              modules={[Navigation, Pagination, Keyboard, Autoplay]}
              // centeredSlides={true}
              slidesPerView={3}
              grabCursor={true}
              loop={true}
              keyboard={{ enabled: true }}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 20 }
              }}
              className="w-full"
            >
              {tripsImages.packages_images.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide rounded-lg cursor-pointer">
                    <img
                      src={item.image}
                      alt={`thumb-${index}`}
                      className="w-full h-32 object-cover border-2 border-white rounded-lg"
                      onClick={() => setCurrentIndex(index)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
