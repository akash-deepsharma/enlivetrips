import DateMonthSlider from '@/components/HelpingCompnents/DateMonthSlider'
import TourCard from '@/components/PopularTour/TourCard'
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

// This will act like your API response (static JSON for now)
const tours = [
  {
    id: 1,
    title: "Greece Tour Package",
    image: "/img/tour/tour_box_1.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["1 Mar", "2 Apr", "3 May"],
    slug:"trip-detail"
  },
  {
    id: 2,
    title: "Italy Tour Package",
    image: "/img/tour/tour_box_2.jpg",
    rating: 4.8,
    price: 9800,
    duration: "7 Days",
    days: ["5 Mar", "10 Apr", "15 May"],
  },
  {
    id: 3,
    title: "Dubai Tour Package",
    image: "/img/tour/tour_box_3.jpg",
    rating: 4.8,
    price: 9180,
    duration: "7 Days",
    days: ["1 Jan", "2 Feb", "3 Mar", "10 Jan", "20 Feb", "30 Mar"],
  },
  {
    id: 4,
    title: "Switzerland",
    image: "/img/tour/tour_box_4.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["8 Jan", "12 Feb", "18 Mar"],
  },
  {
    id: 5,
    title: "Greece Tour Package",
    image: "/img/tour/tour_box_5.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["1 Jun", "5 Jul", "10 Aug"],
  },
  {
    id: 6,
    title: "Italy Tour Package",
    image: "/img/tour/tour_box_5.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["2 Sep", "6 Oct", "12 Nov"],
  },
  {
    id: 7,
    title: "Switzerland",
    image: "/img/tour/tour_box_4.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["8 Jan", "12 Feb", "18 Mar"],
  },
  {
    id: 8,
    title: "Greece Tour Package",
    image: "/img/tour/tour_box_5.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["1 Jun", "5 Jul", "10 Aug"],
  },
  {
    id: 9,
    title: "Italy Tour Package",
    image: "/img/tour/tour_box_5.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
    days: ["2 Sep", "6 Oct", "12 Nov"],
  },
];

export default async function UpcomingTrips() {
  // simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const trips = tours; // replace with fetch() if API is available

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/img/bg/breadcumb-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Upcoming Trips</h1>
            <ul className="breadcumb-menu">
              <li><Link href="/">Home</Link></li>
              <li>Upcoming Trips</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container th-container space">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xxl-3 col-lg-4">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i><FontAwesomeIcon icon={faSearch} /></i>
                  </button>
                </form>
              </div>

              <div className="widget widget_categories">
                <h3 className="widget_title">BOOK YOUR NEXT TRIP</h3>
                <ul>
                  <li><Link href="#">Clear filter</Link><span><FontAwesomeIcon icon={faClose}/></span></li>
                  <li className='active'><Link href="#">Treks & Trails</Link><span>(8)</span></li>
                  <li><Link href="#">Holi Weekend Trip</Link><span>(6)</span></li>
                  <li><Link href="#">Christmas & New Year Tour Package From Delhi</Link><span>(2)</span></li>
                  <li><Link href="#">Tour Package</Link><span>(7)</span></li>
                  <li><Link href="#">Backpacking Trips</Link><span>(9)</span></li>
                  <li><Link href="#">Weekend trips from Delhi</Link><span>(10)</span></li>
                  <li><Link href="#">Spiti Valley</Link><span>(10)</span></li>
                </ul>
              </div>
            </aside>
          </div>

          {/* Main Content */}
          <div className="col-xxl-8 col-lg-8">
            <section
              className="tour-area position-relative bg-top-center overflow-hidden"
              id="service-sec"
            >
              <div className="slider-area tour-slider">
                <div className="container th-container mb-5">
                  <DateMonthSlider />
                  
                  {trips.length === 0 ? (
                    <div className="text-center py-5">No trips found.</div>
                  ) : (
                    <div className="mt-4">
                      <div className="row g-4">
                        {trips.map((tour) => (
                          <div
                            key={tour.id}
                            className="col-xxl-4 col-lg-6"
                          >
                            <TourCard data={tour} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
