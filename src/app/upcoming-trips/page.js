import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import UpcomingTripSection from "@/components/UpcomingTripSection/UpcomingTripSection";
import { getPagewithSection } from "@/services/pageSection";
const mainpage = await getPagewithSection(4);

export async function generateMetadata({ params }) {
  // const { slug } = await params;
  return {
    title: mainpage.meta_title,
    description: mainpage.meta_description,
    keywords: mainpage.meta_description,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/upcoming-trips`,
      title: mainpage.meta_title,
      description: mainpage.meta_description,
      keywords: mainpage.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: mainpage.meta_title,
      description: mainpage.meta_description
    },
  };
}

export default async function UpcomingTrips() {
  
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_MEDIA_PATH +
            mainpage.sections[0].section[0].data.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{mainpage.sections[0].section[1].data.Text}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{mainpage.sections[0].section[1].data.Text}</li>
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
                    <i>
                      <FontAwesomeIcon icon={faSearch} />
                    </i>
                  </button>
                </form>
              </div>

              <div className="widget widget_categories">
                <h3 className="widget_title">BOOK YOUR NEXT TRIP</h3>
                <ul>
                  <li>
                    <Link href="#">Clear filter</Link>
                    <span>
                      <FontAwesomeIcon icon={faClose} />
                    </span>
                  </li>
                  <li className="active">
                    <Link href="#">Treks & Trails</Link>
                    <span>(8)</span>
                  </li>
                  <li>
                    <Link href="#">Holi Weekend Trip</Link>
                    <span>(6)</span>
                  </li>
                  <li>
                    <Link href="#">
                      Christmas & New Year Tour Package From Delhi
                    </Link>
                    <span>(2)</span>
                  </li>
                  <li>
                    <Link href="#">Tour Package</Link>
                    <span>(7)</span>
                  </li>
                  <li>
                    <Link href="#">Backpacking Trips</Link>
                    <span>(9)</span>
                  </li>
                  <li>
                    <Link href="#">Weekend trips from Delhi</Link>
                    <span>(10)</span>
                  </li>
                  <li>
                    <Link href="#">Spiti Valley</Link>
                    <span>(10)</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          {/* Main Content */}
          <div className="col-xxl-9 col-lg-8">
            <UpcomingTripSection/>
          </div>
        </div>
      </div>
    </>
  );
}
