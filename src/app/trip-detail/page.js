"use client";
import Instavideo from "@/components/TripDetail/Instavideo";
import TripHero from "@/components/TripDetail/TripHero";
import { useEffect, useState } from "react";


// import TripHero from "../componets/TripDetail/TripHero";
// import Gallerysec from "../componets/TripDetail/Gallerysec";
// import RelatedYoutube from "../componets/TripDetail/RelatedYoutube";
// import Instavideo from "../componets/TripDetail/Instavideo";
// import RelatedTrips from "../componets/TripDetail/RelatedTrips";
// import RealatedBlogs from "../componets/TripDetail/RealatedBlogs";
// import MiddleContent from "../componets/TripDetail/MiddleContent";

export default function Tripdetail() {

  return (
    <>
      <TripHero/>
      {/* <MiddleContent /> */}
      {/* <Gallerysec /> */}
      {/* <RelatedYoutube /> */}
      <Instavideo />
      {/* <RelatedTrips /> */}
      {/* <RealatedBlogs /> */}
    </>
  );
}
