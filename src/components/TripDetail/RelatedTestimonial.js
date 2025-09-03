import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Ensure you're importing useSelector
import TestimonialCard from './TestimonialCard'; 
// import bg from '../../../assets/bg/Section.png'
import './Testimonial.css'
import config from '../../baseUrl';
import RelatedTestimonialCard from './RelatedTestimonialCard';

export default function RelatedTestimonial() {
  const tourData = useSelector((state) => state.tours.tours); // Get tour data from the store
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Set testimonials data if available in tourData
    setTestimonials(tourData?.testimonials || []);
  }, [tourData]);

  // If there are no testimonials, return null to not render the section
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-10 bg-[#E9F6F9] bg-cover tetimonial-conte" style={{backgroundImage: `url($assets/bg/Section.png)`}}>
      <h1 className="text-center text-[#013900] mb-11">
        Testimonials
      </h1>
  
      {/* Testimonials Grid */}
      <div className='container grid'>
        <div className="marquee-wrapper">
          <div className="container">
            <div className="marquee-block">
              <div className="marquee-inner to-left">
                <span>
                  {testimonials.map((item, index) => (
                    <div className="marquee-item" key={index}>
                      {/* Pass the testimonial data to TestimonialCard */}
                      <RelatedTestimonialCard
                        response={item} // Pass the full testimonial object
                        imageUrl={`${config.IMAGE_URL}${item.image}`}
                        // Pass the image URL
                      />
                    </div>
                  ))}
                </span>
                <span>
                  {testimonials.map((item, index) => (
                    <div className="marquee-item" key={index}>
                      {/* Pass the testimonial data to TestimonialCard */}
                      <RelatedTestimonialCard
                        response={item} // Pass the full testimonial object
                        imageUrl={`${config.IMAGE_URL}${item.image}`} // Pass the image URL
                      />
                    </div>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
