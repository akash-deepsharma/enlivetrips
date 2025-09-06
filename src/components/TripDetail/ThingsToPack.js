"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function ThingsToPack() {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? `${contentRef.current.scrollHeight}px` : "400px"); // default preview height
    }
  }, [expanded]);

  // ✅ JSON Data (updated according to code)
  const data = {
    inclusions: [
      {
        icon: "/img/icon/feature_1_1.svg",
        title: "Comfortable Clothes",
        desc: "Pack lightweight and breathable clothes suitable for the trip.",
      },
      {
        icon: "/img/icon/feature_1_2.svg",
        title: "Footwear",
        desc: "Carry a pair of walking shoes and slippers for comfort.",
      },
      {
        icon: "/img/icon/feature_1_3.svg",
        title: "Toiletries",
        desc: "Personal hygiene products like toothbrush, toothpaste, etc.",
      },
      {
        icon: "/img/icon/feature_1_4.svg",
        title: "Travel Documents",
        desc: "Passport, ID proof, and travel tickets must be kept safely.",
      },
      {
        icon: "/img/icon/feature_1_5.svg",
        title: "Medication",
        desc: "Any prescribed medicines and a small first-aid kit.",
      },
      {
        icon: "/img/icon/feature_1_6.svg",
        title: "Power Bank",
        desc: "Keep your devices charged during long journeys.",
      },
    ],
  };

  return (
    <div id="ThingsToPack" className="min_box-detail Age_limit container my-4">
      <div className="title">
        <h6 className="text-start fw-bold mb-4 page-title">Things To Pack</h6>
      </div>

      <div className="tour-page-single mt-3">
        <div className="page-content">
          <div
            className="destination-checklist d-flex gap-4"
            style={{
              maxHeight: height,
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
            ref={contentRef}
          >
            {/* Inclusions */}
            <div className="checklist thinagto_pack style2 style4 flex-fill">
              <ul>
                {data.inclusions.map((item, index) => (
                  <li key={index} className="d-flex align-items-center gap-2">
                    <span>
                      <img src={item.icon} alt={item.title} />
                    </span>
                    <div>
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* View More / View Less */}
          <div className="view_more_less mt-24 d-flex justify-content-end">
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
      </div>
    </div>
  );
}
