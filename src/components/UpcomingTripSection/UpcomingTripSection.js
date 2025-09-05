"use client";
import { allPackage } from "@/services/packageApi";
import TourCard from "../PopularTour/TourCard";
import DateMonthSlider from "@/components/HelpingCompnents/DateMonthSlider";
import { api } from "@/services/config";
import { useEffect, useMemo, useState } from "react";
const packages = await allPackage();

export default function UpcomingTripSection() {
  const [allPkg, setPackages] = useState([...packages]);
//   const [dates, setDates] = useState([]);

  const groupedDates = useMemo(() => {
    if (allPkg.length === 0) return [];

    let allDates = [];
    allPkg.forEach((pkg) => {
      pkg.package_dates.forEach((d) => {
        allDates.push(d);
      });
    });

    // Remove duplicates
    const uniqueDates = Object.values(
      allDates.reduce((acc, item) => {
        acc[item.start_date] = item;
        return acc;
      }, {})
    );

    // Group by Month-Year
    const grouped = uniqueDates.reduce((acc, item) => {
      const date = new Date(item.start_date);
      const monthYear =
        date.toLocaleString("en-US", { month: "short" }) +
        "-" +
        date.getFullYear().toString().slice(-2);

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }

      acc[monthYear].push({
        date: date.getDate(),
        day: date.toLocaleString("en-US", { weekday: "short" }),
        full_date: item.start_date,
      });

      return acc;
    }, {});

    return Object.entries(grouped).map(([month, days]) => ({
      label: month,
      days,
    }));
  }, []);

  const handleDateFilter = (date) => {
    const dateFilter = packages.filter((pkg) =>
      pkg.package_dates.some((d) => d.start_date == date)
    );
    console.log(dateFilter);
    setPackages([...dateFilter]);
  };

  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden"
      id="service-sec"
    >
      <div className="slider-area tour-slider">
        <div className="container th-container mb-5">
          {groupedDates.length != 0 && (
            <DateMonthSlider
              handleDateFilter={handleDateFilter}
              monthsData={groupedDates}
            />
          )}
          {allPkg.length === 0 ? (
            <div className="text-center py-5">No trips found.</div>
          ) : (
            <div className="mt-4">
              <div className="row g-4">
                {allPkg.map((tour) => (
                  <div key={tour.id} className="col-xxl-4 col-lg-6">
                    <TourCard data={tour} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
