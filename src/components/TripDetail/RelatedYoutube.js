import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import 
// import './notes.css';

export default function RelatedYoutube() {
//   const tourData = useSelector((state) => state.tours.tours);
//   const [youtubeVideos, setYoutubeVideos] = useState([]);

//   useEffect(() => {
//     // Assuming the youtube data is inside tourData.youtube
//     setYoutubeVideos(tourData?.youtube || []);
//     // console.log("related youtube videos", tourData?.youtube);
//   }, [tourData]);

//   // If there are no videos, return null to not render the section
//   if (youtubeVideos.length === 0) {
//     return null;
//   }
const embad =[
    {
    video: `<iframe width="100%" height="250" src="https://www.youtube.com/embed/hYsQMHECt7k" title="BSF 🇮🇳Aarakshak ⚔️Rajeev Kumar #army #bsf #soilders #bsfparade #shortvideo #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
    {
    video: `<iframe width="100%" height="250" src="https://www.youtube.com/embed/uT-irwBbnMM?si=lu6X642Tv7yXtRF2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
    {
    video: `<iframe width="100%" height="250" src="https://www.youtube.com/embed/cdeQ5d_I_ns" title="Rohit sharma and Shreyas iyer😂🤣 | #shorts #cricket #rohitsharma #shreyasiyer #dance" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
    {
    video: `<iframe width="100%" height="250" src="https://www.youtube.com/embed/hYsQMHECt7k" title="BSF 🇮🇳Aarakshak ⚔️Rajeev Kumar #army #bsf #soilders #bsfparade #shortvideo #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
]
  return (
    <div className="blog_box sdafgeefdsg lg:mt-[30px] md:mt-24 mt-24">
      <div className="bt-container p-0">
        <div className="blox-box-tilte text-center mb-16">
        <p className='flex gap-3 items-center justify-center w-auto top-t text-capitalize'> <img src="/assets/png/youtube.png" alt="" /> Travelers On  Youtube</p>
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-[500]">
          Captured Journeys
          </h2>
        </div>

        <div className="blog-row mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10">
            {embad.map((item, index) => (
              <div className="mb-5" key={index}>
                <div className="blog_right rounded-md overflow-hidden">
                  <div className="blog_img w-full ">
                    {/* Render YouTube iframe directly using dangerouslySetInnerHTML */}
                    <div
                      className="video-iframe"
                      dangerouslySetInnerHTML={{
                        __html: item.video || '',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
