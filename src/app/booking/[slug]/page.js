"use client";
import AvailableDates from "@/components/Booking/AvailableDates";
import Occupancy from "@/components/Booking/Occupancy";


export default function BookingPage() {

  return (
    <div className="booking_page">
      <div className="container th-container">
          <div className="row">
            <div className="col-lg-8">
      <AvailableDates/>
      <Occupancy/>
              
            </div>
          </div>
      </div>
    </div>
  );
}
