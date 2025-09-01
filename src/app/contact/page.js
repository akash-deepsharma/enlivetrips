'use client';
import Image from "next/image";

import ContactUsForm from "@/components/Contact/ContactUsForm";
import Link from "next/link";


export default function Contact() {
  return (
    <>
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
          <h1 className="breadcumb-title">Contact Us</h1>
          <ul className="breadcumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>




  
    <div className="space">
      <div className="container">
        {/* Title Area */}
        <div className="title-area text-center">
          <span className="sub-title">Get In Touch</span>
          <h2 className="sec-title">Our Contact Information</h2>
        </div>

        {/* Contact Info Grid */}
        <div className="row gy-4 justify-content-center">
          {/* Address */}
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid style2">
              <div className="about-contact-icon">
                <Image
                  src="/img/icon/location-dot2.svg"
                  alt="Address Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Our Address</h6>
                <p className="about-contact-details-text">
                  2690 Hiltona Street Victoria
                </p>
                <p className="about-contact-details-text">
                  Road, New York, Canada
                </p>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <Image
                  src="/img/icon/call.svg"
                  alt="Phone Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Phone Number</h6>
                <p className="about-contact-details-text">
                  <Link href="tel:01234567890">+01 234 567 890</Link>
                </p>
                <p className="about-contact-details-text">
                  <Link href="tel:09876543210">+09 876 543 210</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <Image
                  src="/img/icon/mail.svg"
                  alt="Email Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Email Address</h6>
                <p className="about-contact-details-text">
                  <Link href="mailto:mailinfo00@tourm.com">mailinfo00@tourm.com</Link>
                </p>
                <p className="about-contact-details-text">
                  <Link href="mailto:support24@tourm.com">support24@tourm.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



        <ContactUsForm/>
        <div className="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.9659552373755!2d77.293161!3d28.540743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59fcff78a11%3A0x84ad5505ea9a7a0a!2sEnLive%20Trip%20Experiences%20Private%20Limited!5e0!3m2!1sen!2sin!4v1747032394923!5m2!1sen!2sin" width="100%" height="450" allowFullScreen ="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}