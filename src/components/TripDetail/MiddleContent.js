import React, { useEffect, useRef, useState } from "react";
// import Form from "../Form/Form";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import "./middleContent.css";
import Skeleton from "react-loading-skeleton";
import Navigation from "./Navigation";
// import Testimonials from "../../Home/Testimonial/Testimonials";
import Faq from "./Faq";
// import RelatedTestimonial from "../../Home/Testimonial/RelatedTestimonial";
import AgeLimit from "./AgeLimit";

const MiddleContent = ({ loaded }) => {
  
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    setVisible(!visible);
    if (visible) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const tripMiddle = useSelector((state) => state.tours.tours);
  useEffect(() => {
    // console.log("middleData", tripMiddle?.packageDetail);
  }, [tripMiddle]);

  const description = tripMiddle?.packageDetail?.description || "";
  const characterLimit = 600; 
  const shouldShowToggle = description.length > characterLimit;
  const firstPart = description.substring(0, characterLimit);
  const secondPart = description.substring(characterLimit);

  return (
    <div
      className=" im relative lg:flex-row flex flex-col justify-center items-start bg-cover px-3  mt-12 z-[9]"
      style={{
        backgroundImage: `url(${'/assets/bg/Section.png'})`,
        backgroundRepeat: "repeat",
      }}
    >
      {/* Left Side */}
      <div
        className="lg:container flex flex-col w-full lg:w-[70%] "
        ref={sectionRef}
      >
        {/* Description */}
        <div className="description-content mb-2">
          <h3 className="text-2xl text-[#013900] font-semibold mb-4">
            {"Description"}
          </h3>
          <hr className="w-full h-[1px] text-gray-300 mb-4" />
          <p className="text-gray-600">
            {loaded ? (
              <Skeleton count={3} />
            ) : (
              description && (
                <>
                  {/* First part of the description */}
                  <span
                    className={`${
                      shouldShowToggle && !visible ? "line-clamp-3" : ""
                    }`}
                    dangerouslySetInnerHTML={{
                      __html:
                        shouldShowToggle && !visible ? firstPart : description,
                    }}
                  />

                  {/* Second part of the description (conditionally rendered) */}
                  {shouldShowToggle && visible && (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: secondPart,
                      }}
                    />
                  )}
                </>
              )
            )}
          </p>

          {/* Toggle button */}
          {shouldShowToggle && !loaded && (
            <span
              className={`float-right text-[#013900] font-semibold flex items-center justify-center gap-1 cursor-pointer mb-4`}
              onClick={scrollToSection}
            >
              {visible ? "View Less" : "View More"}
              <IoIosArrowDown
                className={`${
                  visible
                    ? "rotate-180 transition-all duration-150 ease-in"
                    : ""
                }`}
              />
            </span>
          )}

        </div>

        {/* Navigation Component */}
        <Navigation />


        <AgeLimit />
      <div className="reviewssecDetail">
         {/* <RelatedTestimonial  /> */}
      </div>


        <Faq />
      </div>

      {/* Right Side */}
      <div className="flex sticky top-20 flex-col justify-between gap-5 w-full lg:w-[30%] mt-5 md:mt-0 md:mr-5">
        {/* <Form className="w-full" loaded={loaded} /> */}

        <div className="relative ">
          <img src="assets/png/Rectangle 7.png" alt="" className="w-full h-auto object-cover" />
          <img
            src="assets/png/My project 1.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>

        {/* Form Component */}  
      </div>
    </div>
  );
};

export default MiddleContent;
