"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaRupeeSign } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { useSelector } from 'react-redux';
import axios from 'axios';
import config from '../../baseUrl';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function RelatedTrips() {
  const [showMore, setShowMore] = useState(false);
  const [related, setRelated] = useState();
  const response = useSelector((state) => state.tours.tours);

  console.log("related trips category_id:", response?.packageDetail?.category_id);

  // Fetch related trips
  const fetchData = async (id) => {
    try {
      const { data } = await axios.post(`${config.API_URL}/relatedPackage`, {
        category_id: id,
      });

      console.log("Fetched Related Trips Raw Data:", data);

      // Optional: filter out current trip title
      const filteredData = data?.data?.filter(item => item.title !== response?.packageDetail?.title);
      console.log("Filtered Related Trips (excluding current):", filteredData);

      setRelated(data);
    } catch (error) {
      console.error('Error fetching related trips:', error);
    }
  };

  useEffect(() => {
    const id = response?.packageDetail?.category_id;
    if (id) {
      fetchData(id);
    }
  }, [response]);

  const sectionRef = useRef(null);
  const scrollToSection = () => {
    setShowMore(!showMore);
    sectionRef.current.scrollIntoView({ behavior: 'smooth', top: 0 });
  };

  return (
    <div className="flex flex-col my-4 lg:mt-[24px] md:mt-16 mt-16" ref={sectionRef}>
      <h2 className="text-center mt-8 text-[#013900] font-[500] text-[32px] md:text-[48px] lg:text-[60px]">
        Related Trips
      </h2>

      {/* Grid for desktop */}
      <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container p-0 mt-4 hidden">
        {related?.data
          ?.filter((item) => item.title !== response?.packageDetail?.title)
          ?.filter((_, index) => index < 4)
          ?.map((trip, index) => (
            <Link href={`/trips-detail/${trip.slug}`} state={{ id: trip.id }} key={index}>
              <div className="relative overflow-hidden group rounded-lg cursor-pointer">
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={`${config.IMAGE_URL}/${trip.image}`}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-0 p-4 w-full flex flex-col justify-between h-full text-white">
                  <div className="flex flex-col">
                    <p className="text-xl flex justify-end items-center gap-1">
                      <GoClock />
                      {trip.duration}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                        {trip.enquiry_price && (
                          <p className="line-through text-gray-400">
                            ₹ {trip.enquiry_price}
                          </p>
                        )}
                        <p className="font-semibold text-sm flex items-center">
                          <FaRupeeSign className="mr-1" />
                          {trip.starting_price}
                        </p>
                      </div>
                    </div>
                    <h3 className="font-normal text-xl text-left">{trip.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* Show More Section */}
      {related?.data.length > 4 && (
        <div className="hidden sm:flex flex-col items-center justify-center mt-4">
          {showMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mt-5">
              {related?.data
                .filter((_, index) => index >= 4)
                .map((trip, index) => (
                  <Link href={`/trips-detail/${trip.slug}`} state={{ id: trip.id }} key={index}>
                    <div className="relative overflow-hidden group rounded-lg cursor-pointer">
                      <div className="w-full h-56 overflow-hidden">
                        <img
                          src={`${config.IMAGE_URL}/${trip.image}`}
                          alt={trip.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 p-4 w-full flex flex-col justify-between h-full text-white">
                        <div className="flex flex-col">
                          <p className="text-sm flex justify-end items-center gap-1">
                            <GoClock />
                            {trip.duration}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                              {trip.enquiry_price && (
                                <p className="line-through text-gray-400">
                                  ₹ {trip.enquiry_price}
                                </p>
                              )}
                              <p className="font-normal text-xl flex items-center">
                                <FaRupeeSign className="mr-1" />
                                {trip.starting_price}
                              </p>
                            </div>
                          </div>
                          <h3 className="font-normal text-2xl text-left">
                            {trip.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
          <span
            className="mt-3 border-[2px] border-primary bg-[#013900] flex items-center gap-2 px-3 py-2 text-white rounded-lg cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
            onClick={scrollToSection}
          >
            {showMore ? 'View Less' : 'View More'}
            <FaArrowRight />
          </span>
        </div>
      )}

      {/* Mobile Swiper */}
      <div className="flex gall sm:hidden px-2">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={10}
          navigation={true}
          rewind={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {related?.data
            .filter((item) => item.title !== response?.packageDetail?.title)
            .map((trip, index) => (
              <SwiperSlide key={index}>
                <Link href={`/trips-detail/${trip.slug}`} state={{ id: trip.id }} key={index}>
                  <div className="relative overflow-hidden group rounded-lg cursor-pointer blackish">
                    <div className="w-full h-56 overflow-hidden">
                      <img
                        src={`${config.IMAGE_URL}/${trip.image}`}
                        alt={trip.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 p-4 w-full flex flex-col justify-between h-full text-white">
                      <div className="flex flex-col">
                        <p className="text-sm flex justify-end items-center gap-1">
                          <GoClock />
                          {trip.duration}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between items-end">
                          <div className="flex flex-col">
                            {trip.enquiry_price && (
                              <p className="line-through text-gray-400">
                                ₹ {trip.enquiry_price}
                              </p>
                            )}
                            <p className="font-normal text-xl flex items-center">
                              <FaRupeeSign className="mr-1" />
                              {trip.starting_price}
                            </p>
                          </div>
                        </div>
                        <h3 className="font-normal text-2xl text-left">
                          {trip.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
