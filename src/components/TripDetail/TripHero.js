"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
// import "./TripHero.css"; // custom styles

export default function TripHero() {
  const tripData = {
    packageDetail: {
      cover_picture: "/img/bg/destination_bg_1.png",
      title: "Manali Adventure",
      day: 5,
      night: 4,
      starting_price: 12999,
      pick_up: "Delhi",
      dropped: "Manali",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="trip-hero position-relative">
        {/* Background Image */}
        <img
          className="img-fluid w-100 trip-hero-img"
          src={tripData?.packageDetail?.cover_picture || "default.jpg"}
          alt={tripData?.packageDetail?.title || "Default Title"}
        />

        {/* Overlay Content */}
        <div className="trip-hero-overlay position-absolute bottom-0 w-100">
            <div className="bg-dark bg-opacity-75 p-3 rounded text-white">
              <div className="container th-container">
                <div className="row align-items-center">
                {/* Title */}
                <div className=" col-lg-5 text-center text-lg-start mb-3 mb-lg-0">
                  <h1 className="h3 fw-bold mb-0 sec-title text-white">
                    {tripData?.packageDetail?.title} Package
                  </h1>
                </div>

                {/* Details */}
                <div className="col-lg-7">
                  <div className="row text-center">
                    {/* Duration */}
                    <div className="col-4 ">
                      <div className="icon-circle mb-2">
                        <FontAwesomeIcon icon={faClock} />
                      </div>
                      <p className="small mb-1 fw-semibold text-white">Duration</p>
                      <p className="mb-0 text-white">
                        {tripData?.packageDetail?.day}D /{" "}
                        {tripData?.packageDetail?.night}N
                      </p>
                    </div>

                    {/* Price */}
                    <div className="col-4">
                      <div className="icon-circle mb-2">
                        <FontAwesomeIcon icon={faRupeeSign} />
                      </div>
                      <p className="small mb-1 fw-semibold text-white">Starting Price</p>
                      <p className="mb-0 text-white">
                        ₹ {tripData?.packageDetail?.starting_price}/-
                      </p>
                    </div>

                    {/* Pickup & Drop */}
                    <div className="col-4">
                      <div className="icon-circle mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <p className="small mb-1 fw-semibold text-white">Pick-up & Drop</p>
                      <p className="mb-0 text-white">
                        {tripData?.packageDetail?.pick_up} →{" "}
                        {tripData?.packageDetail?.dropped}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Details */}
              </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
