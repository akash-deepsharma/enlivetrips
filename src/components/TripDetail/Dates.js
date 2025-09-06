import React, { useState, useEffect } from "react";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const staticData = {
  packageDateRanges: [
    {
      id: 1,
      start_date: "2025-01-10",
      end_date: "2025-01-15",
    },
    {
      id: 2,
      start_date: "2025-12-30",
      end_date: "2026-01-02",
    },
  ],
  activity_cost: [
    { id: 1, date_range_id: 1, activity: "Adventure Trek", cost: 5000 },
    { id: 2, date_range_id: 1, activity: "Camping", cost: 3000 },
    { id: 3, date_range_id: 2, activity: "New Year Party", cost: 8000 },
    { id: 4, date_range_id: 2, activity: "Luxury Stay", cost: 12000 },
  ],
};

function Dates() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setResponse(staticData);
  }, []);

  // Convert date format for display
  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  // Group activities by date_range_id
  const groupActivitiesByDateRange = (activities) => {
    return activities.reduce((acc, activity) => {
      if (!acc[activity.date_range_id]) {
        acc[activity.date_range_id] = [];
      }
      acc[activity.date_range_id].push(activity);
      return acc;
    }, {});
  };

  const groupedActivities = groupActivitiesByDateRange(
    response?.activity_cost || []
  );

  return (
    <div className="min_box-detail Age_limit container my-6 mt-45">
    <div className="dates-section container my-5">
      {/* Regular Dates */}
      <h3 className="section-title d-flex align-items-center border-bottom pb-2 mb-4">
        <img src="/img/icon/regular_date.png" alt="Regular Date" className="me-2" />
        Regular Date
      </h3>
      <div className="row justify-content-center">
        {response?.packageDateRanges?.length > 0 ? (
          response.packageDateRanges.slice(0, 1).map((dateItem, index) => (
            <div key={index} className="col-12 mb-4">
              <div className="row g-4">
                {groupedActivities[dateItem.id]?.map((activity, idx) => (
                  <div key={idx} className="col-auto">
                    <div className="activity-card shadow-sm">
                      <h3 className="activity-title">{activity.activity}</h3>
                      <p className="activity-cost">
                        <FontAwesomeIcon icon={faIndianRupee} /> {activity.cost}{" "}
                        + 5% GST
                      </p>
                    </div>
                  </div>
                ))}
                {groupedActivities[dateItem.id]?.length === 0 && (
                  <p>No activity costs available for this date range</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No dates available</p>
        )}
      </div>

      {/* Special Dates */}
      <h3 className="section-title d-flex align-items-center border-bottom pb-2 mb-4 mt-5">
        <img src="/img/icon/party_emoji.png" alt="Special Dates" className="me-2" />
        Special Dates
      </h3>
      <div className="row justify-content-center">
        {response?.packageDateRanges?.length > 0 ? (
          response.packageDateRanges.map((dateItem, index) => (
            <div key={index} className="col-12 mb-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="date-range">
                  {convertDate(dateItem.start_date)} -{" "}
                  {convertDate(dateItem.end_date)}
                </p>
                <span className="festival-tag">New Year</span>
              </div>
              <div className="row g-4">
                {groupedActivities[dateItem.id]?.map((activity, idx) => (
                  <div key={idx} className="col-auto">
                    <div className="activity-card shadow-sm">
                      <h3 className="activity-title">{activity.activity}</h3>
                      <p className="activity-cost">
                        <FontAwesomeIcon icon={faIndianRupee} /> {activity.cost}{" "}
                        + 5% GST
                      </p>
                    </div>
                  </div>
                ))}
                {groupedActivities[dateItem.id]?.length === 0 && (
                  <p>No activity costs available for this date range</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No dates available</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default Dates;
