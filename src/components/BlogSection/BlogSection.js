"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/pagination";

const blogs = [
  {
    id: 1,
    date: "July 05 2024",
    readTime: "6 min read",
    title: "10 Reason why you should visit New Jersy",
    img: "/img/blog/blog_1_1.jpg",
    link: "10-Reason-why-you-should-visit-New-Jersy",
  },
  {
    id: 2,
    date: "July 06 2024",
    readTime: "7 min read",
    title: "The best time to visit japan & enjoy the cherry blossoms",
    img: "/img/blog/blog_1_2.jpg",
    link: "The-best-time-to-visit-japan-&-enjoy-the-cherry-blossoms",
  },
  {
    id: 3,
    date: "July 07 2024",
    readTime: "8 min read",
    title: "The 7 amazing destinations for adventure seekers",
    img: "/img/blog/blog_1_3.jpg",
    link: "The-7-amazing-destinations-for-adventure-seekers",
  },
  {
    id: 4,
    date: "July 09 2024",
    readTime: "9 min read",
    title: "10 Reason why you should visit New Jersy",
    img: "/img/blog/blog_1_1.jpg",
    link: "10-Reason-why-you-should-visit-New-Jersy",
  },
  {
    id: 5,
    date: "July 10 2024",
    readTime: "10 min read",
    title: "The best time to visit japan & enjoy the cherry blossoms",
    img: "/img/blog/blog_1_2.jpg",
    link: "The-best-time-to-visit-japan-&-enjoy-the-cherry-blossoms",
  },
  {
    id: 6,
    date: "July 12 2024",
    readTime: "11 min read",
    title: "The 7 amazing destinations for adventure seekers",
    img: "/img/blog/blog_1_3.jpg",
    link: "The-7-amazing-destinations-for-adventure-seekers",
  },
];

export default function BlogSection() {
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
    <section className="bg-smoke overflow-hidden space" id="blog-sec">
      <div className="container">
        <div className="mb-30 text-center text-md-start">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="title-area mb-md-0">
                <span className="sub-title">About Us Restaurant</span>
                <h2 className="sec-title">News & Articles From Tourm</h2>
              </div>
            </div>
            <div className="col-md-auto">
              <Link href="blog" className="th-btn style4 th-icon">
                See More Articles
              </Link>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="th-slider has-shadow"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className="w-100"
                    />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <Link className="author" href="blog">
                        {blog.date}
                      </Link>
                      <Link href="blog">{blog.readTime}</Link>
                    </div>
                    <h3 className="box-title">
                      <Link href={blog.link}>{blog.title}</Link>
                    </h3>
                    <Link href={`blog/${blog.link}`} className="th-btn style4 th-icon">
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
      </div>
    </section>
  );
}
