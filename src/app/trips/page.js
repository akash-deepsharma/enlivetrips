"use client";
import TourCard from "@/components/PopularTour/TourCard";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
// import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Trips() {
  const [showMore, setShowMore] = useState(false);
  const [maxHeight, setMaxHeight] = useState("96px");
  const contentRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  const tours = [
    {
      id: 1,
      title: "Greece Tour Package",
      image: "/img/tour/tour_box_1.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
      days: ["1 Mar", "2 Apr", "3 May"],
    },
    {
      id: 2,
      title: "Italy Tour Package",
      image: "/img/tour/tour_box_2.jpg",
      rating: 4.8,
      price: 9800,
      duration: "7 Days",
      days: ["5 Mar", "10 Apr", "15 May"],
    },
    {
      id: 3,
      title: "Dubai Tour Package",
      image: "/img/tour/tour_box_3.jpg",
      rating: 4.8,
      price: 9180,
      duration: "7 Days",
      days: ["1 Jan", "2 Feb", "3 Mar", "10 Jan", "20 Feb", "30 Mar"],
    },
    {
      id: 4,
      title: "Switzerland",
      image: "/img/tour/tour_box_4.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
      days: ["8 Jan", "12 Feb", "18 Mar"],
    },
    {
      id: 5,
      title: "Greece Tour Package",
      image: "/img/tour/tour_box_5.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
      days: ["1 Jun", "5 Jul", "10 Aug"],
    },
    {
      id: 6,
      title: "Italy Tour Package",
      image: "/img/tour/tour_box_5.jpg",
      rating: 4.8,
      price: 980,
      duration: "7 Days",
      days: ["2 Sep", "6 Oct", "12 Nov"],
    },
  ];

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      setTrips(tours);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (showMore && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("96px");
    }
  }, [showMore]);

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/img/bg/breadcumb-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Trips</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Trips</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Trip */}
      <div className="container my-5">
        <div className="d-flex flex-column align-items-start gap-3">
          <h2 className="fw-bold display-6 text-dark text-center text-lg-start">
            About Trip Title
          </h2>

          {/* Description with smooth expand */}
          <div
            ref={contentRef}
            style={{
              maxHeight,
              overflow: "hidden",
              transition: "max-height 0.5s ease",
            }}
          >
            <p className="text-secondary lh-lg text-justify">
              Through collaboration, diverse{" "}
              <Link href="#!" className="fw-bold text-decoration-none">
                perspectives
              </Link>{" "}
              and strengths are leveraged, resulting in more innovative
              solutions and shared success. Travelers gain deeper connections
              and unforgettable experiences while exploring new horizons.
              Adventures offer growth, resilience, and a sense of achievement,
              shaping meaningful stories to cherish for a lifetime. and
              strengths are leveraged, resulting in more innovative solutions
              and shared success. Travelers gain deeper connections and
              unforgettable experiences while exploring new horizons. Adventures
              offer growth, resilience, and a sense of achievement, shaping
              meaningful stories to cherish for a lifetime.
            </p>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            className="btn btn-secondary px-4 py-2 shadow-sm"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Trips Section */}
      <section
        className="tour-area position-relative bg-top-center  overflow-hidden "
        id="service-sec"
      >
        <div className="slider-area tour-slider">
          <div className="container th-container my-5">
            <h2 className="fw-bold mb-4 text-center">Available Trips</h2>

            {loading ? (
              <div className="text-center py-5">Loading trips...</div>
            ) : trips.length === 0 ? (
              <div className="text-center py-5">No trips found.</div>
            ) : (
              <>
                {/* Swiper for mobile (xs only) */}
                <div className="mt-4 px-3 d-md-none swiper th-slider has-shadow slider-drag-wrap position-relative z-0">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation, Autoplay, Pagination]}
                    autoplay={{ delay: 3000 }}
                    //   pagination={{ clickable: true }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    className="swiper"
                  >
                    {tours.map((tour) => (
                      <SwiperSlide key={tour.id} className="swiper-slide">
                        <TourCard data={tour} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>

                {/* Grid for sm and above */}
                <div className="d-none d-md-block mt-4">
                  <div className="row g-4">
                    {tours.map((tour) => (
                      <div
                        key={tour.id}
                        className="col-6 col-md-6 col-lg-4 col-xl-3"
                      >
                        <TourCard data={tour} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
