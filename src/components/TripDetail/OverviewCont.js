"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function OverviewCont() {
  const [activeSection, setActiveSection] = useState("Overview");

  const sections = [
    { id: "Overview", label: "Overview" },
    { id: "Itinerary", label: "Itinerary" },
    { id: "Inclusions", label: "Inclusions" },
    { id: "Exclusions", label: "Exclusions" },
    { id: "ThingsToPack", label: "Things To Pack" }, // placeholder section
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = section.id;
          }
        }
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 236, // adjust for sticky header height
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="min_box-detail Age_limit container my-4"
      style={{
        position: "sticky",
        top: "100px",
        zIndex: 3,
        background: "#fff",
        padding: "10px 0",
      }}
    >
      <div className="tour-page-single mt-3">
        <div className="page-content">
          <ul className="over_vontent d-flex list-unstyled align-items-center justify-content-around py-3">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className={activeSection === section.id ? "active fw-bold" : ""}
                  onClick={(e) => handleClick(e, section.id)}
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
