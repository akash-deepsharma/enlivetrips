import React, { useState, useEffect } from 'react';
import './notes.css'; // Optional: ensure you have styles here or use Tailwind

// Dummy age limit data
const dummyAgeLimit = [
  {
    id: 1,
    title: 'Adults',
    age_limit: '18 to 60 years',
  },
  {
    id: 2,
    title: 'Children',
    age_limit: '5 to 17 years',
  },
  {
    id: 3,
    title: 'Infants',
    age_limit: 'Below 5 years',
  },
];

export default function AgeLimit() {
  const [ageLimit, setAgeLimit] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setAgeLimit(dummyAgeLimit);
    console.log("Loaded dummy packageAgeLimit:", dummyAgeLimit);
  }, []);

  return (
    <div className="asdvasdvadfvasdvca">
      <h6 className="text-left text-xl font-bold mb-4 aeadc">Age Limit</h6>
      <div className="flex flex-wrap gap-4">
        {ageLimit.map((item) => (
          <div key={item.id} className="asdcasdcrw flex-grow flex-shrink p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.age_limit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
