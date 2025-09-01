"use client";
// import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function about() {

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
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>


      <div
      className="about-area position-relative overflow-hidden overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="img-box3">
              <div className="img1">
                <img src="/img/normal/about_3_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="/img/normal/about_3_2.jpg" alt="About" />
              </div>
              <div className="img3 movingX">
                <img src="/img/normal/about_3_3.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ps-xl-4">
              <div className="title-area mb-20">
                <span className="sub-title style1">Welcome To Enlive Trips</span>
                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                  We are world reputeted travel agency
                </h2>
              </div>
              <p className="pe-xl-5">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words.
              </p>
              <p className="mb-30 pe-xl-5">
                Leiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt.
              </p>
              <div className="about-item-wrap">
                <div className="about-item style2">
                  <div className="about-item_img">
                    <img src="/img/icon/about_1_1.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Exclusive Trip</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div className="about-item style2">
                  <div className="about-item_img">
                    <img src="/img/icon/about_1_2.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Safety First Always</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div className="about-item style2">
                  <div className="about-item_img">
                    <img src="/img/icon/about_1_3.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Professional Guide</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35">
                <Link href="contact" className="th-btn style3 th-icon"
                  >Contact With Us</Link>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>




    </>
  );
}
