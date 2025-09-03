import Image from "next/image";
// import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import TourCategories from "@/components/TourCategories/TourCategories";
import PopularDestination from "@/components/PopularDestination/PopularDestination";
import AboutSection from "@/components/AboutSection/AboutSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import Popup from "@/components/HelpingCompnents/Popup";
import PopularTour from "@/components/PopularTour/PopularTour";

export default function Home() {
  return (
    <>
    {/* <Popup/> */}
      <Hero />
      <TourCategories />
      <PopularDestination />
      
      <PopularTour/>
      <AboutSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
