import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faBars, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import { getPagewithSection } from "@/services/pageSection";
const mainpage = await getPagewithSection(1);
export default function Header() {

  return (
  <>
    <header className="th-header header-layout1">
      {/* 🔹 Header Top */}
      <div className="header-top">
        <div className="container th-container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto d-none d-md-block">
              <div className="header-links">
                <ul>
                  <li className="d-none d-xl-inline-block">
                   <FontAwesomeIcon icon={faLocationDot} className="me-1"/>
                    <span>{mainpage.sections[0].section[0].data.Text}</span>
                  </li>
                  <li className="d-none d-xl-inline-block">
                    <FontAwesomeIcon icon={faClock} className="me-1"/>
                     <span>{mainpage.sections[0].section[1].data.Text}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 🔹 Right Side */}
            <div className="col-auto">
              <div className="header-right">
                {/* <div className="currency-menu">
                  <select className="form-select nice-select">
                    <option defaultValue="">language</option>
                    <option>CNY</option>
                    <option>EUR</option>
                    <option>AUD</option>
                  </select>
                </div> */}
                <div className="header-links">
                  <ul>
                    <li className="d-none d-md-inline-block">
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <Link href="/contact">Support</Link>
                    </li>
                    {/* <li>
                      <Link href="#login-form" className="popup-content">
                        Sign In / Register
                        <i> <FontAwesomeIcon icon={faUser}/></i>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navigation */}
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container th-container">
            <div className="row align-items-center justify-content-between">
              {/* Logo */}
              <div className="col-auto">
                <div className="header-logo">
                  <Link href="/">
                    <Image
                      src={process.env.NEXT_PUBLIC_MEDIA_PATH+mainpage.sections[1].section[0].data.image}
                      alt="Enlivetrips"
                      width={80}
                      height={80}
                      />
                  </Link>
                </div>
              </div>

              {/* Menu */}
              <div className="col-auto ms-xl-auto">
                <nav className="main-menu d-none d-xl-inline-block">
                  <ul>
                    <li>
                      <Link className="active" href="/">Treks & Trails</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/about">Spiti Valley</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/destination">Destination</Link>
                      <ul className="sub-menu">
                        <li><Link href="destination">Destination</Link></li>
                        <li>
                          <Link href="destination-details"
                            >Destination Details</Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <Link href="/service">Services</Link>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link href="/activities">Activities</Link>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <Link href="#">Shop</Link>
                          <ul className="sub-menu">
                            <li><Link href="shop">Shop</Link></li>
                            <li>
                              <Link href="shop-details">Shop Details</Link>
                            </li>
                            <li><Link href="cart">Cart Page</Link></li>
                            <li><Link href="checkout">Checkout</Link></li>
                            <li><Link href="wishlist">Wishlist</Link></li>
                          </ul>
                        </li>
                        <li><Link href="gallery">Gallery</Link></li>
                        <li><Link href="tour">Our Tour</Link></li>
                        <li><Link href="tour-details">Tour Details</Link></li>
                        <li><Link href="resort">Resort page</Link></li>
                        <li>
                          <Link href="resort-details">Resort Details</Link>
                        </li>
                        <li><Link href="tour-details">Tour Details</Link></li>
                        <li><Link href="tour-guide">Tour Guider</Link></li>
                        <li>
                          <Link href="tour-guider-details"
                            >Tour Guider Details</Link>
                        </li>
                        <li><Link href="faq">Faq Page</Link></li>
                        <li><Link href="price">Price Package</Link></li>
                        <li><Link href="error">Error Page</Link></li>
                      </ul>
                    </li> */}
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>

                {/* Mobile menu toggle */}
                <button type="button" className="th-menu-toggle d-block d-xl-none">
                  <i className="far fa-bars"> <FontAwesomeIcon icon={faBars}/></i>
                </button>
              </div>

            </div>
          </div>

          {/* Background Logo Mask */}
          <div
            className="logo-bg"
            data-mask-src={process.env.NEXT_PUBLIC_MEDIA_PATH+mainpage.sections[1].section[0].data.image}
            ></div>
        </div>
      </div>
    </header>
  </>
  );
}
