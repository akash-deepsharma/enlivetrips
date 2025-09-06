"use client";
import React, { useState } from "react";

export default function Itinerary() {
  // JSON data with dynamic title per day
  const itineraryData = [
    {
      day: "Day 01",
      title: "Delhi to Jibhi | Overnight Journey",
      details: [
        "As the Eiffel Tower is to Paris, the silhouette of the",
        "Curabitur pellentesque nibh nibh, at maximus ante",
        "United commitment to our excellence patent protection.",
        "As the Eiffel Tower is to Paris, the silhouette of the",
        "Maecenas vitae mattis tellus. Nullam quis imperdiet",
      ],
    },
    {
      day: "Day 02",
      title: "Exploring Jibhi Waterfalls",
      details: [
        "Breakfast at hotel, followed by guided sightseeing.",
        "Visit famous museums and local attractions.",
        "Evening free for shopping or leisure.",
      ],
    },
    {
      day: "Day 03",
      title: "Trek to Jalori Pass",
      details: [
        "Transfer to another city.",
        "Check-in at hotel.",
        "Explore local cuisine and nightlife.",
      ],
    },
    {
      day: "Day 04",
      title: "Return Journey",
      details: [
        "Morning yoga and meditation session.",
        "Visit cultural heritage site.",
        "Enjoy evening folk dance and dinner.",
      ],
    },
    
  ];

  // state to manage active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min_box-detail Age_limit container my-4">
      <div className="title">
        <h6 className="text-start fw-bold mb-4 page-title">Itinerary</h6>
      </div>

      <div className="tour-page-single mt-3">
        <div className="page-content">
          {/* Tab headers */}
          <ul className="nav nav-tabs tour-tab mt-3" role="tablist">
            {itineraryData.map((item, index) => (
              <li className="nav-item" role="presentation" key={index}>
                <button
                  className={`nav-link ${activeTab === index ? "active" : ""}`}
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab(index)}
                >
                  {item.day}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab content */}
          <div className="tab-content mt-3">
            {itineraryData.map((item, index) => (
              <div
                key={index}
                className={`tab-pane fade ${
                  activeTab === index ? "show active" : ""
                }`}
                role="tabpanel"
              >
                {/* Dynamic title */}
                <h6 className="text-start fw-bold mb-4 page-title">
                  {item.title}
                </h6>

                <div className="tour-grid-plan">
                  <div className="checklist">
                    <ul>
                      {item.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
