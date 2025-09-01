"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const CategoriesCard = ({ image, title }) => {
    console.log("CategoriesCard" , image)
  return (
    // <div className="destination-box gsap-cursor">
    //   <div
    //     className="destination-img position-relative"
    //     style={{ width: "100%", height: "250px" }}
    //   >
    //     <Image
    //       src={image}
    //       alt={title}
    //       fill
    //       className="object-fit-cover w-100 h-100 rounded"
    //     />
    //     <div className="destination-content absolute bottom-3 left-3 text-white">
    //       <div className="media-left">
    //         <h4 className="box-title text-lg font-semibold">{title}</h4>
    //         <span className="destination-subtitle text-sm">{subtitle}</span>
    //       </div>
    //       <div className="mt-2">
    //         <Link
    //           href="/trips"
    //           className="th-btn style2 th-icon bg-white text-black px-3 py-1 rounded text-sm"
    //         >
    //           View All
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>


               <div className="category-card single">
                <div
                  className="box-img global-img position-relative"
                  style={{ width: "100%", height: "250px" }}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-fit-cover w-100 h-100"
                  />
                </div>
                <h3 className="box-title">
                  <Link href="destination">{title}</Link>
                </h3>
                <Link href="destination" className="line-btn">
                  See more
                </Link>
              </div> 
  );
};
