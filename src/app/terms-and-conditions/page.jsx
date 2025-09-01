import Link from 'next/link'
import React from 'react'

export default function TermCondition() {
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
            <h1 className="breadcumb-title">Terms and Conditions</h1>
            <ul className="breadcumb-menu">
              <li><Link href="/">Home</Link></li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>



        <section class="space">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12 col-lg-12">
            <div class="page-single">
              <div class="service-img global-img">
                <img src="assets/img/normal/resort-details.jpg" alt="" />
              </div>
              <div class="page-content d-block">
                <h3 class="box-title mt-20">
                  <Link href="resort-details">Ocean View Resort</Link>
                </h3>
                <p class="blog-text mb-30">
                  This luxury resort is set on a private island in the South
                  Pacific. The overwater bungalows and beachfront villas offer
                  stunning views of the turquoise lagoon and the surrounding
                  mountains. Highlights: Snorkeling, spa treatments, and
                  romantic dining experiences overlooking the ocean. This
                  luxurious private island resort in Tetiaroa offers pristine
                  beaches and a lagoon with incredible ocean views. It’s an
                  eco-friendly resort focused on sustainability. Highlights:
                  Snorkeling, kayaking, and luxurious spa treatments with an
                  ocean backdrop.
                </p>
                <p class="blog-text mb-35">
                  Ocean View Resort typically refers to a coastal resort that
                  provides stunning views of the ocean from its accommodations
                  and facilities. These resorts are often situated in prime
                  locations along beaches, cliffs, or coastal areas, allowing
                  guests to enjoy the natural beauty of the sea from their
                  rooms, restaurants, pools, and other areas within the
                  property.
                </p>
                <h4 class="">Children and extra beds.</h4>
                <p class="blog-text mb-35">
                  Children are welcome Kids stay free! Children stay free when
                  using existing bedding; children may not be eligible for
                  complimentary breakfast Rollaway/extra beds are available for
                  $ 10 per day.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




    </>
  )
}
