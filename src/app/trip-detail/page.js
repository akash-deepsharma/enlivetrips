"use client";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import AgeLimit from "@/components/TripDetail/AgeLimit";
import Batches from "@/components/TripDetail/Batches";
import BookNow from "@/components/TripDetail/BookNow";
import Dates from "@/components/TripDetail/Dates";
import DownloadPdf from "@/components/TripDetail/DownloadPdf";
import Exclusions from "@/components/TripDetail/Exclusions";
import Faq from "@/components/TripDetail/Faq";
import Form from "@/components/TripDetail/Form";
import Gallery from "@/components/TripDetail/Gallery";
import Inclusions from "@/components/TripDetail/Inclusions";
import Instavideo from "@/components/TripDetail/Instavideo";
import Itinerary from "@/components/TripDetail/Itinerary";
import Notes from "@/components/TripDetail/Notes";
import Overview from "@/components/TripDetail/Overview";
import OverviewCont from "@/components/TripDetail/OverviewCont";
import RelatedBlogs from "@/components/TripDetail/RelatedBlogs";
import RelatedTrips from "@/components/TripDetail/RelatedTrips";
import RelatedYoutube from "@/components/TripDetail/RelatedYoutube";
import ThingsToPack from "@/components/TripDetail/ThingsToPack";
import TripBanner from "@/components/TripDetail/TripBanner";
import TripHero from "@/components/TripDetail/TripHero";
import TripInfo from "@/components/TripDetail/TripInfo";
import { useEffect, useState } from "react";



export default function Tripdetail() {

  return (
    <>
      <TripHero/>
    <div className="container th-container">
      <div className="row">
        <div className="col-xxl-8 col-lg-7">
          <TripInfo/>
            <Dates/>
            <TripBanner/>
           <OverviewCont/>
             <div id="Overview"><Overview/></div>
            <AgeLimit/>
            <Gallery/>
            <div id="Itinerary"><Itinerary/></div>
            <div id="Inclusions"><Inclusions/></div>
            <div id="Exclusions"><Exclusions/></div>
            <div id="ThingsToPack"><ThingsToPack/></div>
            <Notes/>
            <Faq/>

        </div>
        <div className="col-xxl-4 col-lg-5">
           <div className="position-sticky" style={{ top: "100px" }}>
          <BookNow/>
          <Batches/>
          <DownloadPdf/>
          </div>
        </div>
      </div>
    </div>



    
      {/* <MiddleContent /> */}
      <RelatedYoutube />
      <Instavideo />
      <TestimonialSection />
      <RelatedBlogs />
      <RelatedTrips />
    </>
  );
}
