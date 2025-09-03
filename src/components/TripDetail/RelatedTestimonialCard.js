import React, { useEffect, useState } from "react";
// import google from "../../../assets/png/google.png";
// import star from "../../../assets/png/Vector2.png";
import "./Testimonial.css";
// import image from "../../../assets/testimonials/team_1_2.jpg";
import { IoStar } from "react-icons/io5";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosStar } from "react-icons/io";

export default function RelatedTestimonialCard({ imageUrl, response }) {
 useEffect(() => {
     // console.log("api Data", response);
    //  console.log("api url", imageUrl);
   }, [response]);
 
   return ( 
 
     
       <div className="bg-white rounded-lg border-2  flex  p-2 w-full ">
         <div className="flex-shrink-0 w-28 h-28 overflow-hidden bg-white rounded-full p-1">
           <img
                   src={`${imageUrl}`}
                   // alt={response.name}
             className="w-full h-full object-cover rounded-full"
           />
         </div>
         <div className=" flex flex-col px-2 ">
           <div className=" flex flex-row items-center justify-between  ">
             <span className="text-secondary font-semibold text-lg">{response.name}{response.id}</span>
  {/* Star Rating */}
     <div className="flex justify-center items-center gap-1 mb-2">
        {[1,2,3,4,5].map((item,index)=>(
           <span className={`${index<response.star?'text-yellow-500':'text-gray-500'} text-xl `} key={index}>< IoStar /></span>
         ))  }
         </div>
           </div>
           <div>
             <span><ImQuotesLeft className="text-lg text-[#4DA528]" />
             </span>
             <p className="text-left line-clamp-2 w-full text-[16px] text-[#6E7070] ">
              {response.text}
             </p>
           </div>
         </div>
       
 
      
     
     </div>
   );
}
