"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper"; // ✅ correct type import
import "swiper/swiper-bundle.css";
import "./Hero.css";

import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { getPagewithSection } from "@/services/pageSection";

const mainpage = await getPagewithSection(1, "hero");
export default function Hero() {
  const arr = mainpage.section[2].data.content.split("|");
  let newArr = arr.reduce((acc, item, index) => {
    acc.push(item);
    acc.push(1000); // index ke hisaab se nayi value
    return acc;
  }, []);
  const dummyDestinations = [
    { id: 1, slug: "manali-trip", title: "Manali" },
    { id: 2, slug: "goa-beach", title: "Goa" },
    { id: 3, slug: "kerala-tour", title: "Kerala" },
    { id: 4, slug: "andaman-escape", title: "Andaman" },
    { id: 5, slug: "himachal-heights", title: "Himachal" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // const handleVideoEnd = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext();
  //     swiperRef.current.autoplay.start();
  //   }
  // };

  const filteredItems = dummyDestinations.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="position-relative w-100 z-2" style={{ height: "90vh" }}>
      {/* Swiper */}
      <Swiper
        // modules={[Autoplay, EffectFade]}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        // speed={1000}
        // effect="fade"
        // loop={true}
        // onSwiper={(swiper) => {
        //   swiperRef.current = swiper;   // ✅ works fine now
        // }}
        // slidesPerView={1}
        className="h-100"
      >
        <SwiperSlide className="position-relative">
          <video
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            src={
              process.env.NEXT_PUBLIC_MEDIA_PATH +
              mainpage.section[6].data.video
            }
            autoPlay
            muted
            playsInline
          />
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        effect="fade"
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;   // ✅ works fine now
        }}
        slidesPerView={1}
        className="h-100"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="position-relative">
            {slide.type === "video" ? (
              <video
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                src={slide.src}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
            ) : (
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundImage: `url(${slide.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper> */}

      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 z-1"></div>

      {/* Hero Content */}
      <div className=" main_ct_box  px-3">
        <div className="main_ct_contentin">
          <p className="sub-title mb-3">{mainpage.section[0].data.Text}</p>
          <h1 className="sec-title display-4 fw-bold mb-3">
            {mainpage.section[1].data.Text}
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={newArr}
            wrapper="span"
            speed={50}
            className="fs-3 text-warning d-block mb-4"
            repeat={Infinity}
          />

          {/* Search Bar */}
          <div className="position-relative w-100 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill ps-4 pe-5"
              placeholder="Search Destination"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-success position-absolute top-50 end-0 translate-middle-y rounded-pill px-4">
              {/* <FaSearch /> */}
              <FontAwesomeIcon icon={faSearch} />
            </button>

            {searchQuery && (
              <ul className="list-group position-absolute top-100 start-0 w-100 mt-1 shadow">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/trip-detail/${item.slug}`}
                      className="list-group-item list-group-item-action"
                    >
                      {item.title}
                    </Link>
                  ))
                ) : (
                  <li className="list-group-item text-muted">
                    No results found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className=" statsas container-fluid mt-5">
          <div className="row text-center">
            {mainpage.section
              .slice(3, 6) // 6,7,8 index wale elements lega
              .map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_MEDIA_PATH +
                        item.data.section[0].data.image
                      }
                      alt="Owl"
                      height={80}
                      width={80}
                    />
                  </div>
                  <h3>
                    <CountUp
                      end={Number(item.data.section[1].data.Text)}
                      duration={3}
                    />
                    +
                  </h3>
                  <p>{item.data.section[2].data.Text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
