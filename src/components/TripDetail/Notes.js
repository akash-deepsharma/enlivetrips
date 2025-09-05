import React, { useEffect, useState } from "react";
// import "./Notes.css";

// Static JSON data (instead of Redux)
const staticData = {
  packageDetail: {
    note: `
      <ul>
        <li>Bring valid ID proof during the trip.</li>
        <li>All bookings are non-refundable once confirmed.</li>
        <li>Meals will be provided as per itinerary.</li>
        <li>Follow safety guidelines during activities.</li>
      </ul>
    `,
  },
};

const Notes = () => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setNotes(staticData?.packageDetail?.note);
  }, []);

  return (

    <div className="min_box-detail Age_limit container my-6 mt-40 mb-60">
      <div className="title">
        <h6 className="text-start fw-bold mb-4 page-title">
          Notes
        </h6>
      </div>
      <div
        className="notes-data p-3"
        dangerouslySetInnerHTML={{ __html: notes }}
      />
    </div>
  );  
};

export default Notes;
