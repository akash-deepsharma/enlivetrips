"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import AboutItem from "./AboutItem";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { getPagewithSection } from "@/services/pageSection";
const mainpage = await getPagewithSection(1,'trip_with_us');
export default function AboutSection() {
  const shapesRef = useRef([]);
  useEffect(() => {
    // Animate shapes on mount
    shapesRef.current.forEach(shape => {
      const top = shape.dataset.top || "0%";
      const left = shape.dataset.left || "0%";
      gsap.set(shape, { top, left, position: "absolute" });

      // Example simple floating animation
      gsap.to(shape, {
        y: 20,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <section className="about-area position-relative overflow-hidden space" id="about-sec">
      <div className="container shape-mockup-wrap">
        <div className="row align-items-center">
          {/* Left Images */}
          <div className="col-xl-6">
            <div className="img-box1">
              <div className="img1 mb-3">
                <Image src={
                      process.env.NEXT_PUBLIC_MEDIA_PATH +
                      mainpage.section[0].data.image
                    } alt="About" width={315} height={300} />
              </div>
              <div className="img2 mb-3">
                <Image src={
                      process.env.NEXT_PUBLIC_MEDIA_PATH +
                      mainpage.section[1].data.image
                    } alt="About" width={315} height={300} />
              </div>
              <div className="img3 mb-3">
                <Image src={
                      process.env.NEXT_PUBLIC_MEDIA_PATH +
                      mainpage.section[2].data.image
                    } alt="About" width={315} height={300} />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-xl-6">
            <div className="ps-xl-4 ms-xl-2">
              <div className="title-area mb-20 pe-xl-5 me-xl-5">
                <span className="sub-title style1">{mainpage.section[3].data.Text}</span>
                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                  {mainpage.section[4].data.Text}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mainpage.section[5].data.rich_text,
                  }}
                />
              </div>

              <div className="about-item-wrap">
                {mainpage.section
                    .slice(6, 8) // 6,7,8 index wale elements lega
                    .map((item, index) => (
                <AboutItem
                key={index}
                  icon={process.env.NEXT_PUBLIC_MEDIA_PATH + item.data.section[0].data.image}
                  title={item.data.section[1].data.Text}
                  text={item.data.section[2].data.content}
                />
                ))}
              </div>

              <div className="mt-35">
                <Link href={mainpage.section[8].data.button_link} className="th-btn style3 th-icon">
                    {mainpage.section[8].data.button_label}
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes with GSAP */}
        <div
          className="shape-mockup shape1 d-none d-xl-block"
          data-top="12%"
          data-left="-16%"
          ref={el => shapesRef.current[0] = el}
        >
          <Image src="/img/shape/shape_1.png" alt="shape" width={15} height={15} />
        </div>

        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-top="20%"
          data-left="-16%"
          ref={el => shapesRef.current[1] = el}
        >
          <Image src="/img/shape/shape_2.png" alt="shape" width={60} height={60} />
        </div>

        <div
          className="shape-mockup shape3 d-none d-xl-block"
          data-top="14%"
          data-left="-10%"
          ref={el => shapesRef.current[2] = el}
        >
          <Image src="/img/shape/shape_3.png" alt="shape" width={40} height={40} />
        </div>

        <div
          className="shape-mockup about-shape movingX d-none d-xxl-block"
           style={{ right: "-11%", bottom: "0%", position: "absolute" }}
        >
          <Image src="/img/normal/about-slide-img.png" alt="shape" width={225} height={200} />
        </div>

        <div
          className="shape-mockup about-rating d-none d-xxl-block"
          style={{ right: "-20%", bottom: "50%", position: "absolute" }}
        >
          <FontAwesomeIcon icon={faStar} className="fs-6 d-block m-auto " style={{color:"#EB5757"}}/> <span>4.9k</span>
        </div> 

        <div
          className="shape-mockup about-emoji d-none d-xxl-block"
         style={{ right: "5%", bottom: "25%", position: "absolute" }}
        >
          <Image src="/img/icon/emoji.png" alt="emoji" width={62} height={62} />
        </div>
      </div>
    </section>
  );
}
