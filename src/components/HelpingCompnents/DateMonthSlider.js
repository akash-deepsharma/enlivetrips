"use client";
import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// const monthsData = [
//   { label: "Sep-25", days: [
//     { date: 2, day: "Tue" },
//     { date: 6, day: "Sat" },
//     { date: 10, day: "Wed"

//      }] },
//   { label: "Oct-25", days: [{ date: 2, day: "Thu" }, { date: 3, day: "Fri" }, { date: 4, day: "Sat" }, { date: 6, day: "Mon" }, { date: 10, day: "Fri" }, { date: 11, day: "Sat" }, { date: 14, day: "Tue" }, { date: 16, day: "Thu" }, { date: 18, day: "Sat" }, { date: 23, day: "Thu" }, { date: 24, day: "Fri" }, { date: 25, day: "Sat" }, { date: 26, day: "Sun" }, { date: 31, day: "Fri" }] },
//   { label: "Nov-25", days: [{ date: 5, day: "Wed" }, { date: 10, day: "Mon" }, { date: 15, day: "Sat" }] },
//   { label: "Dec-25", days: [{ date: 1, day: "Mon" }, { date: 12, day: "Fri" }, { date: 25, day: "Thu" }] },
//   { label: "Jan-26", days: [{ date: 5, day: "Mon" }, { date: 14, day: "Wed" }, { date: 20, day: "Tue" }] },
//   { label: "Feb-26", days: [{ date: 2, day: "Mon" }, { date: 10, day: "Tue" }, { date: 28, day: "Sat" }] },
//   { label: "Mar-26", days: [{ date: 2, day: "Mon" }, { date: 10, day: "Tue" }, { date: 18, day: "Tue" }, { date: 28, day: "Sat" }] },
// ];

export default function MonthDateSlider({ monthsData, handleDateFilter }) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDayIndex, setCurrentDayIndex] = useState(null);
  const [visibleMonths, setVisibleMonths] = useState(2);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedDate != null) {
      handleDateFilter(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const boxWidth = 120; // assumed width of one month box in px
        const fit = Math.floor(containerWidth / boxWidth);
        setVisibleMonths(fit > 1 ? fit : 2); // always show at least 2
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentMonthIndex === null) return;
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
      setSelectedDate(null);
      scrollRef.current?.scrollBy({ left: -100, behavior: "smooth" });
    } else if (currentMonthIndex > 0) {
      const prevMonth = monthsData[currentMonthIndex - 1];
      setCurrentMonthIndex(currentMonthIndex - 1);
      setCurrentDayIndex(prevMonth.days.length - 1);
      setSelectedDate(null);
    }
  };

  const handleNext = () => {
    if (currentMonthIndex === null) return;
    const currentMonth = monthsData[currentMonthIndex];
    if (currentDayIndex < currentMonth.days.length - 1) {
      setCurrentDayIndex(currentDayIndex + 1);
      setSelectedDate(null);
      scrollRef.current?.scrollBy({ left: 100, behavior: "smooth" });
    } else if (currentMonthIndex < monthsData.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
      setCurrentDayIndex(0);
      setSelectedDate(null);
    }
  };

  const currentMonth =
    currentMonthIndex !== null ? monthsData[currentMonthIndex] : null;

  return (
    <div
      className="d-flex align-items-center px-5 monthslider"
      ref={containerRef}
    >
      {/* Left Arrow */}
      <button
        className="btn btn-link text-info fs-4 me-2 btn_before"
        onClick={handlePrev}
        disabled={
          currentMonthIndex === null ||
          (currentMonthIndex === 0 && currentDayIndex === 0)
        }
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <div className="px-4 d-flex align-items-center monthslider overflow-hidden">
        {/* Previous Month */}
        {currentMonthIndex !== null && currentMonthIndex > 0 && (
          <div
            className="border rounded padding-box me-2 cursor-pointer box-width"
            onClick={() => {
              setCurrentMonthIndex(currentMonthIndex - 1);
              setCurrentDayIndex(null);
              setSelectedDate(null);
            }}
          >
            {monthsData[currentMonthIndex - 1].label}
          </div>
        )}

        {/* Current Month */}
        {currentMonth && (
          <div className="bg-info text-white rounded padding-box">
            {currentMonth.label}
          </div>
        )}

        {/* Dates of current month */}
        {currentMonth && (
          <div ref={scrollRef} className="d-flex gap-2">
            {currentMonth.days.map((d, idx) => (
              <div
                key={idx}
                className={`text-center cursor-pointer secleded ${
                  currentDayIndex === idx ? "fw-bold text-info" : ""
                }`}
                onClick={() => {
                  setSelectedDate(d.full_date);
                  setCurrentDayIndex(idx);
                }}
              >
                <div>{d.date}</div>
                <small className="text-muted">{d.day}</small>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming Months */}
        {monthsData
          .slice(
            currentMonthIndex !== null ? currentMonthIndex + 1 : 0,
            currentMonthIndex !== null
              ? currentMonthIndex + 1 + visibleMonths
              : visibleMonths
          )
          .map((month, index) => (
            <div
              key={index}
              className="border rounded padding-box ms-2 cursor-pointer box-width"
              onClick={() => {
                setCurrentMonthIndex(
                  currentMonthIndex !== null
                    ? currentMonthIndex + index + 1
                    : index
                );
                setCurrentDayIndex(null);
                setSelectedDate(null);
              }}
            >
              {month.label}
            </div>
          ))}
      </div>

      {/* Right Arrow */}
      <button
        className="btn btn-link text-info fs-4 ms-2 btn_after"
        onClick={handleNext}
        disabled={
          currentMonthIndex === null ||
          (currentMonthIndex === monthsData.length - 1 &&
            currentDayIndex === currentMonth?.days.length - 1)
        }
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}
