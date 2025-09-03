import React, { useEffect, useState } from "react";
// import "./Blog.css";

import axios from "axios";
import config from "../../baseUrl";
import { animate, motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function RealatedBlogs() {
 const [response, setResponse] = useState();
   const [loading, setLoading] = useState(true);
   const fetchData = async () => {
     const data = await axios.get(`${config.API_URL}/latestBlog`);
     if (data?.status !== 200) {
       setResponse(null);
 
       return;
     }
     setResponse(data?.data);
     setLoading(false);
     // console.log("blog detail", data?.data);
   };
   useEffect(() => {
     fetchData();
   }, []);
   const formatDate = (dateString) => {
     const date = new Date(dateString);
 
     // Define options for the date format
     const options = { year: "numeric", month: "short", day: "2-digit" };
 
     // Return the formatted date string
     return date.toLocaleDateString("en-US", options);
   };
   const FadeUp = (delay) => {
     return {
       initial: {
         opacity: 0,
         x: -50,
       },
       animate: {
         opacity: 1,
         x: 0,
         transition: {
           type: "spring",
           stiffness: 100,
           duration: 0.5,
           delay: delay,
           ease: "easeInOut",
         },
       },
     };
   };
   return (
     <div className="blog_box sdafgeefdsg lg:mt-[24px]  md:mt-16 mt-16 ">
         <div className="bt-container p-0">
           <div className="blox-box-tilte text-center mb-10 text-[32px] md:text-[48px] lg:text-[60px] ">
             <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-[500]">Related Blogs</h1>
           </div>
           
           <div className="blog-row mt-2">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10">
               {loading
                 ? // Show skeleton loaders while loading
                   [...Array(4)].map((_, index) => (
                     <motion.div
                       variants={FadeUp(index / 10)}
                       initial="initial"
                       whileInView="animate"
                       className="mb-5"
                       key={index}
                     >
                       <div className="blog_right shadow-md rounded-md ">
                         <div className="blog_img w-full h-44">
                           <Skeleton height="100%" width="100%" />
                         </div>
                         <div className="blog-content h-[125px] p-4">
                           <div className="blog_tilte">
                             <ul className="flex justify-between items-center">
                               <li>
                                 <Skeleton width="80px" />
                               </li>
                               <li>
                                 <Skeleton width="100px" />
                               </li>
                             </ul>
                             <h4>
                               <Skeleton width="80%" />
                             </h4>
                           </div>
                         </div>
                       </div>
                     </motion.div>
                   ))
                 : // Render actual content when data is available
                   response?.blogDetail
                     ?.slice(1)
                     .filter((item, index) => index < 4)
                     .map((item, index) => (
                       <motion.div
                         variants={FadeUp(index / 10)}
                         initial="initial"
                         whileInView="animate"
                         className="mb-5"
                         key={index}
                       >
                         <div className="blog_right  shadow-md rounded-md">
                           <div className="blog_img w-full h-44">
                             <Link href={`/blogDetail/${item.slug}`}>
                               <img
                                 src={`${response?.imageUrl}/${
                                   item?.details === null
                                     ? item?.banner_image
                                     : item?.details?.image
                                 }`}
                                 alt="banner"
                                 className="w-full h-full object-cover sm:object-fill"
                               />
                             </Link>
                           </div>
                           <div className="blog-content h-[125px] p-4">
                             <div className="blog_tilte">
                               <ul className="flex justify-between items-center">
                                 <li>
                                   <span>EnliveTrips</span>
                                 </li>
                                 <li>
                                   <span>{formatDate(item.created_at)}</span>
                                 </li>
                               </ul>
                               <h4 className="line-clamp-2">
                                 <Link href={`/blogDetail/${item.slug}`}>
                                   {item.title}
                                 </Link>
                               </h4>
                             </div>
                           </div>
                         </div>
                       </motion.div>
                     ))}
             </div>
           </div>
 
           <div className="flex justify-center mt-2">
             <Link href="/blog">
               <button className="border-[2px] border-primary px-3 py-2 flex items-center gap-3  rounded-lg hover:text-primary text-lg bg-primary  hover:bg-transparent text-white transition-all duration-200 ease-in-out">
                 {" "}
                 View More <FaArrowRight />
               </button>
             </Link>
           </div>
         </div>
       </div>
   );
}
