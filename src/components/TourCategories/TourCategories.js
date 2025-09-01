"use client";

import CurveSlider from "./CurveSlider";

export default function TourCategories() {
  return (
    <section
      className="category-area bg-top-center py-12"
      style={{ backgroundImage: "url(/img/bg/category_bg_1.png)" }}
    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">
            Wonderful Place For You
          </span>
          <h2 className="sec-title">Tour Categories</h2>
        </div>

        {/* Slider */}
        <CurveSlider />

        {/* Pagination (Swiper auto attaches here if enabled) */}
        <div className="slider-pagination mt-6 text-center"></div>
      </div>
    </section>
  );
}
