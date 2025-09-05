import TourCard from "@/components/PopularTour/TourCard";
import AvailableTrips from "@/components/TripDetail/AvailableTrips";
import { singleTrips } from "@/services/tripsApi";
import Link from "next/link";

const getTrips = async (slug) => {
  return await singleTrips(slug);
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trips = await getTrips(slug);
  return {
    title: trips.trip.meta_title,
    description: trips.trip.meta_description,
    keywords: trips.trip.meta_description,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/trips/${slug}`,
      title: trips.trip.meta_title,
      description: trips.trip.meta_description,
      keywords: trips.trip.meta_description,
      images: [{ url: trips.trip.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: trips.trip.meta_title,
      description: trips.trip.meta_description,
      images: [trips.trip.thumbnail],
    },
  };
}

export default async function Trips({ params }) {
  const { slug } = await params;
  const trips = await getTrips(slug);
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url('${trips.trip.banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{trips.trip.heading}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{trips.trip.heading}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Trip */}
      <div className="container my-5">
        <div className="d-flex flex-column align-items-start gap-3">
          <div
                    id="tripContent"
                    dangerouslySetInnerHTML={{ __html: trips.trip.content }}
                  />
        </div>
      </div>

      {/* Trips Section */}
      <section
        className="tour-area position-relative bg-top-center  overflow-hidden "
        id="service-sec"
      >
        <div className="slider-area tour-slider">
          <div className="container th-container my-5">
            <h2 className="fw-bold mb-4 text-center">Available Trips</h2>

            <AvailableTrips trips={trips.packages}/>
          </div>
        </div>
      </section>
    </>
  );
}
