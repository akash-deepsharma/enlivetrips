import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMapPin,
  faPhone,
  faPhoneAlt,
  faStar as faSolidStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faClock,
  faStar as faRegularStar,
} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "./PopularTour.css";

export default function TourCard({ data }) {
  const dates =
    data.package_dates
      .slice(0, 3) // pehle 3 dates hi lo
      .map((d) =>
        new Date(d.start_date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
        })
      )
      .join(", ") + (data.package_dates.length > 3 ? ", ..." : "");

  return (
    <div className="tour-box th-ani gsap-cursor">
      <div className="tour-box_img global-img">
        <Image src={data.thumbnail} alt={data.title} width={100} height={80} />
      </div>
      <div className="tour-content position-absolute bottom-0 left-0 z-2 w-100 h-100 d-flex flex-column justify-content-between">
        <div className="tour_topbar d-flex align-item-center justify-content-between">
          <Link href="#!" className="th-btn style4 rounded-1 px-2 py-1">
            <i className="d-none d-sm-block ">
              <FontAwesomeIcon icon={faLocationDot} />
            </i>{" "}
            {data.pickup} To {data.drop}
          </Link>
          <Link href="#!" className="th-btn style4 rounded-1 px-2 py-1">
            <i className="d-none d-sm-block ">
              <FontAwesomeIcon icon={faClock} />
            </i>{" "}
            {data.duration}
          </Link>
        </div>
        <div>
          <h3 className="box-title">
            <Link href={data.slug}> {data.title} </Link>
          </h3>
          <div className="tour-rating">
            <div
              className="star-rating"
              role="img"
              aria-label={`Rated 4 out of 5`}
            >
              {/* Rating */}
              {Array.from({ length: 5 }).map((_, i) => {
                const fullStars = Math.floor(4);
                const hasHalfStar = 4 % 1 !== 0;

                if (i < fullStars) {
                  return (
                    <FontAwesomeIcon
                      key={i}
                      icon={faSolidStar}
                      style={{ color: "#FFA944" }}
                    />
                  );
                } else if (i === fullStars && hasHalfStar) {
                  return (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStarHalfStroke}
                      style={{ color: "#FFA944" }}
                    />
                  );
                } else {
                  return (
                    <FontAwesomeIcon
                      key={i}
                      icon={faRegularStar}
                      style={{ color: "#FFA944" }}
                    />
                  );
                }
              })}
            </div>
            <Link href="tour-details" className="woocommerce-review-link">
              {" "}
              (<span className="count">4</span> Rating)
            </Link>
          </div>
          <h4 className="tour-box_price d-flex flex-wrap align-items-center justify-content-between w-100">
            <span>
              <i>
                <FontAwesomeIcon icon={faCalendarDays} />
              </i>
              {dates}
            </span>
            <span className="currency">
              ₹{Number(data.starting_price)}
              <span className="PerPserson"> /Person</span>
            </span>
          </h4>
        </div>
      </div>
      <div className="tour-action px-3 gap-3 mt-2 mb-2">
        <Link
          href="tel:8287828267"
          className="th-btn style4 w-auto px-xl-4 px-4"
        >
          <FontAwesomeIcon icon={faPhone} />
        </Link>
        <Link href="tel:8287828267" className="th-btn style4 th-icon w-100">
          Request CallBack
        </Link>
      </div>
    </div>
  );
}
