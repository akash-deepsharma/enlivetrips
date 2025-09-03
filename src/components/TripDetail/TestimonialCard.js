import React, { useEffect, useState } from "react";
// import google from "../../../assets/png/google.png";
// import star from "../../../assets/png/Vector2.png";
import "./Testimonial.css";
// import image from "../../../assets/testimonials/team_1_2.jpg";
import { IoStar } from "react-icons/io5";
import { ImQuotesLeft } from "react-icons/im";
// import { IoIosStar } from "react-icons/io";



const TestimonialCard = ({ imageUrl, response, key }) => {
  useEffect(() => {
    // console.log("api Data", response);
    // console.log("api url", imageUrl);
  }, [response]);

  return (
    //   <div className="bg-white rounded-lg shadow-lg p-4 text-center relative flex flex-col justify-evenly  sm:gap-10 testinomul_card">
    //   {/* Profile Image */}
    //   <div className="w-36 h-36 sm:w-36 sm:h-36 rounded-full mx-auto overflow-hidden absolute top-[-20%] sm:top-[-25%] left-1/2 transform -translate-x-1/2">
    //     <img
    //       src={`${imageUrl}/${response?.image}`}
    //       alt={response.name}
    //       className="w-full h-full object-cover border-4 border-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
    //     />
    //   </div>

    //   {/* Testimonial Body */}
    //   <div className="bg-[#E9F6F9] rounded-lg mt-24  p-4">
    //   <div className='content-view'>
    //   <h3 className="text-base sm:text-md text-[#013900] font-semibold mt-1 pt-3">{response.name}</h3>
    //     <img src={google} alt="Google" className="mx-auto w-20 sm:w-20 my-2" />
    //     {/* Star Rating */}
    //     <div className="flex justify-center items-center gap-1 mb-2">
    //     {[1,2,3,4,5].map((item,index)=>(
    //       <span className={`${index<response.star?'text-yellow-500':'text-gray-500'} text-xl `} key={index}>< IoStar /></span>
    //     ))  }
    //     </div>
    //   </div>
    //   <div className='content-box'>
    //     <p className='text-center max-h-[140px] text-sm min-h-[100px] overflow-y-auto [&::-webkit-scrollbar]:w-2
    // [&::-webkit-scrollbar-track]:rounded-full
    // [&::-webkit-scrollbar-track]:bg-gray-100
    // [&::-webkit-scrollbar-thumb]:rounded-full
    // [&::-webkit-scrollbar-thumb]:bg-gray-300 p-2 mb-2 '>{response.text}</p>

    //   </div>
    //   </div>
    // </div>
 

    
      <div className="bg-white rounded-lg border-2  flex  p-2 w-full " key={key}>
        <div className="flex-shrink-0 w-28 h-28 overflow-hidden bg-white rounded-full p-1">
          <img
                  src={`${imageUrl}/${response?.image}`}
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
            <p className="text-left line-clamp-2 w-full text-[16px] text-[#6E7070]
">
            {response.text}
            </p>
          </div>
        </div>
      

     
    
    </div>
  );
};

export default TestimonialCard;
