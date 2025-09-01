import { faFacebookF, faInstagram, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper footer-layout1">
      <div className="widget-area">
        <div className="container">
          {/* Newsletter */}
          <div className="newsletter-area">
            <div className="newsletter-top">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                  <h2 className="newsletter-title text-capitalize mb-0">
                    get updated the latest newsletter
                  </h2>
                </div>
                <div className="col-lg-7">
                  <form className="newsletter-form">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                    <button type="submit" className="th-btn style3">
                      Subscribe Now
                      <Image
                        src="/img/icon/plane.svg"
                        alt="subscribe"
                        width={20}
                        height={20}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Widgets Row */}
          <div className="row justify-content-between">
            {/* About */}
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link href="/">
                      <Image
                        src="/img/logo3.svg"
                        alt="Tourm"
                        width={150}
                        height={50}
                      />
                    </Link>
                  </div>
                  <p className="about-text">
                    Rapidiously myocardinate cross-platform intellectual capital
                    model. Appropriately create interactive infrastructures
                  </p>
                  <div className="th-social">
                    <a href="https://facebook.com">
                      <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                    <a href="https://twitter.com">
                      <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href="https://linkedin.com">
                      <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="https://whatsapp.com">
                      <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>
                    <a href="https://instagram.com">
                      <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <ul className="menu">
                  <li><Link href="/"><FontAwesomeIcon icon={faAngleRight}/>Home</Link></li>
                  <li><Link href="/about"><FontAwesomeIcon icon={faAngleRight}/>About us</Link></li>
                  <li><Link href="/service"><FontAwesomeIcon icon={faAngleRight}/>Our Service</Link></li>
                  <li><Link href="/terms-and-conditions"><FontAwesomeIcon icon={faAngleRight}/>Terms & Conditions</Link></li>
                  <li><Link href="/privacy-policy"><FontAwesomeIcon icon={faAngleRight}/>Privacy Policy</Link></li>
                  <li><Link href="/return-and-cancilation"><FontAwesomeIcon icon={faAngleRight}/>Return & Cancilation</Link></li>
                </ul>
              </div>
            </div>

            {/* Address */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Address</h3>
                <div className="th-widget-contact">
                  <div className="info-box_text">
                    <div className="icon">
                      <Image src="/img/icon/phone.svg" alt="phone" width={20} height={20}/>
                    </div>
                    <div className="details">
                      <p><a href="tel:+01234567890">+01 234 567 890</a></p>
                      <p><a href="tel:+09876543210">+09 876 543 210</a></p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <Image src="/img/icon/envelope.svg" alt="email" width={20} height={20}/>
                    </div>
                    <div className="details">
                      <p><a href="mailto:mailinfo00@tourm.com">mailinfo00@tourm.com</a></p>
                      <p><a href="mailto:support24@tourm.com">support24@tourm.com</a></p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <Image src="/img/icon/location-dot.svg" alt="location" width={20} height={20}/>
                    </div>
                    <div className="details">
                      <p>789 Inner Lane, Holy park, California, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Instagram Post</h3>
                <div className="sidebar-gallery">
                  {["1_1", "1_2", "1_3", "1_4", "1_5", "1_6"].map((id) => (
                    <div className="gallery-thumb" key={id}>
                      <Image
                        src={`/img/widget/gallery_${id}.jpg`}
                        alt="Gallery"
                        width={80}
                        height={80}
                      />
                      <a
                        target="_blank"
                        href="https://instagram.com"
                        className="gallery-btn"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="copyright-wrap"
        style={{ backgroundImage: "url(/img/bg/copyright_bg_1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright 2025 <Link href="/">Tourm</Link>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-card">
                <span className="title">We Accept</span>
                <Image
                  src="/img/shape/cards.png"
                  alt="cards"
                  width={150}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
