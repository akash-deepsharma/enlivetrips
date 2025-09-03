"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function TripHero() {

  const tripData = {
  "packageDetail": {
    "cover_picture": "/img/bg/destination_bg_1.png",
    "title": "Manali Adventure",
    "day": 5,
    "night": 4,
    "starting_price": 12999,
    "pick_up": "Delhi",
    "dropped": "Manali"
  }
}

  return (
    <>
      {/* Hero Image Section */}
      <div className='bt-container w-full relative mt-14 z-0 !p-0'>
        <img
          className='w-full h-full object-cover'
          src={`${tripData?.packageDetail?.cover_picture || 'default.jpg'}`}
          alt={tripData?.packageDetail?.title || 'Default Title'}
        />
        <div className='absolute bottom-0 left-0 w-full z-1'>
          <div className="flex flex-col bg-black bg-opacity-30 justify-around p-1 items-center lg:flex-row md:p-6">
            {/* Title Section */}
            <div className="mb-4 md:mb-0">
              <h1 className="text-center text-white text-xl font-bold md:text-3xl">
                {tripData?.packageDetail?.title} Package
              </h1>
            </div>

            {/* Top Section with Duration, Price, and Pick-up */}
            <div className="d-flex  justify-content-around w-full gap-3 align-items-center py-2 trip-details-top">
              
              {/* Duration */}
              <div className="d-flex gap-2 flex-col detail-item items-center mb-4 md:mb-0">
                <div className="flex bg-[#4DA528] h-12 justify-center rounded-full w-12 items-center md:h-14 md:w-14">
                  <FontAwesomeIcon icon={faClock}/>
                </div>
                <p className="text-[12px] text-white font-semibold md:text-xl">Duration</p>
                <p className="text-sm text-white md:text-base">
                  {tripData?.packageDetail?.day}D / {tripData?.packageDetail?.night}N
                </p>
              </div>

              {/* Starting Price */}
              <div className="flex flex-col detail-item items-center mb-4 md:mb-0">
                <div className="flex bg-[#4DA528] h-12 justify-center rounded-full w-12 items-center md:h-14 md:w-14">
                  <FontAwesomeIcon icon={faRupeeSign}/>
                </div>
                <p className="text-[12px] text-white font-semibold md:text-xl whitespace-nowrap">Starting Price</p>
                <p className="text-sm text-white md:text-base">
                  ₹ {tripData?.packageDetail?.starting_price}/-
                </p>
              </div>

              {/* Pick-up and Drop */}
              <div className="flex flex-col detail-item items-center mb-4 md:mb-0">
                <div className="flex bg-[#4DA528] h-12 justify-center rounded-full w-12 items-center md:h-14 md:w-14">
                  <FontAwesomeIcon icon={faMapMarkerAlt}/>
                </div>
                <p className="text-[12px] text-white font-semibold md:text-xl min-w-fit sm:text-[14px] whitespace-nowrap">
                  Pick-up and Drop
                </p>
                <p className="text-sm text-white md:text-base">
                  {tripData?.packageDetail?.pick_up} to {tripData?.packageDetail?.dropped}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div>
      
    </div>


    </>
  );
}
