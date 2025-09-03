import React, { useEffect, useState } from 'react';
import Itenary from '../Tabs/Itinerary';
import InclusionsAndExclusions from '../Tabs/InclusionAndExclusion';
import Dates from '../Tabs/Dates';
import ThingsToPack from '../Tabs/ThingsToPack';
import Notes from '../Tabs/Notes';
import { useSelector } from 'react-redux';
// import DOMPurify from 'dompurify'; // Optional, only if needed

const Navigation = () => {
  const tourData = useSelector((state) => state.tours.tours);

  const [notes, setNotes] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setNotes(tourData?.packageDetail?.note || '');
  }, [tourData]);

  const tabs = [
    { title: 'Itinerary', data: <Itenary /> },
    { title: 'Inclusion & Exclusion', data: <InclusionsAndExclusions /> },
    { title: 'Things To Pack', data: <ThingsToPack /> },
    { title: 'Dates & Costing', data: <Dates /> },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-evenly items-center bg-[#EFFCE5] py-2 rounded-full w-full overflow-x-auto whitespace-nowrap h-12 scrollbar-hide">
        {tabs.map((item, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-[#013900] font-[roboto] md:text-[18px] font-semibold text-sm cursor-pointer py-1 px-3 md:py-2 md:px-4 ${
              activeIndex === index
                ? 'bg-[#013900] text-white rounded-full transition-all duration-300 ease-in-out'
                : ''
            }`}
          >
            {item.title}
          </span>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="mt-4">{tabs[activeIndex].data}</div>

      {/* Notes Section */}
      {notes && (
        <div className="mt-6">
          <h6 className="text-left text-xl font-bold mb-4">Note</h6>
          <div
            className="notes-data p-4"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(notes) }}
          />
        </div>
      )}
    </div>
  );
};

export default Navigation;
