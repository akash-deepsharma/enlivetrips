"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

export default function Overview() {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? `${contentRef.current.scrollHeight}px` : "400px"); // default preview height
    }
  }, [expanded]);

  return (
    <div className="min_box-detail Age_limit container my-4">
      <div className="title">
        <h6 className="text-start fw-bold page-title mb-4">Overview</h6>
      </div>

      <div className="tour-page-single mt-20">
        <div
          className="page-content"
          style={{
            maxHeight: height,
            overflow: "hidden",
            transition: "max-height 0.6s ease",
          }}
          ref={contentRef}
        >
          <h2 className="box-title">Explore the Beauty of Maldives and enjoy</h2>
          <p className="box-text mb-30">
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur
          </p>
          <p className="box-text mb-50">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur
          </p>

          <h2 className="box-title">Highlights</h2>
          <p className="box-text mb-30">
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Dolorem ipsum quia dolor sit
            amet, consectetur, adipisci.
          </p>
          <div className="checklist mb-50">
            <ul>
              <li>Visit most popular location of Maldives</li>
              <li>Buffet Breakfast for all traveler with good quality.</li>
              <li>Expert guide always guide you and give informations.</li>
              <li>Best Hotel for all also great food.</li>
              <li>Helping all traveler for Money Exchange.</li>
              <li>Buffet Breakfast for all traveler with good quality..</li>
              <li>Buffet Breakfast for all traveler with good quality.</li>
            </ul>
          </div>

          <h2 className="box-title">Basic Information</h2>
          <p className="blog-text mb-35">
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Dolorem ipsum quia dolor sit
            amet, consectetur, adipisci.
          </p>
          <div className="destination-checklist mb-50">
            <div className="checklist style2">
              <ul>
                <li>Destination</li>
                <li>Departure</li>
                <li>Language</li>
                <li>Return Date</li>
                <li>Departure Date</li>
                <li>No. of Guide</li>
              </ul>
            </div>
            <div className="checklist style2">
              <ul>
                <li>Netherland</li>
                <li>Singapore Airport, Singapore</li>
                <li>English</li>
                <li>August 12, 2024</li>
                <li>Netherland</li>
                <li>25 Tour Places</li>
                <li>2 Person</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="view_more_less d-flex justify-content-end">
        <Link
          href="#"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
        >
          {expanded ? "View Less" : "View More"}
        </Link>
      </div>
    </div>
  );
}
