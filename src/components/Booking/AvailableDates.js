import React, { useState } from "react";

// Static JSON Data
const batchData = [
  { id: 1, start: "20-Sep", end: "25-Sep", status: "Filling Fast", month: "Sep" },
  { id: 2, start: "27-Sep", end: "02-Oct", status: "Filling Fast", month: "Sep" },
  { id: 3, start: "02-Oct", end: "07-Oct", status: "Available", month: "Oct" },
  { id: 4, start: "11-Oct", end: "16-Oct", status: "Available", month: "Oct" },
  { id: 5, start: "18-Oct", end: "23-Oct", status: "Available", month: "Oct" },
  { id: 6, start: "25-Oct", end: "30-Oct", status: "Available", month: "Oct" },
];

const months = ["All", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

export default function AvailableDates() {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedBatch, setSelectedBatch] = useState(1);

  const filteredBatches =
    selectedMonth === "All"
      ? batchData
      : batchData.filter((batch) => batch.month === selectedMonth);

  return (
    <div className="min_box-detail Age_limit container my-4">
      <div className="title d-flex justify-content-between gap-5">
        <h6 className="text-start fw-bold mb-4 page-title">Batches</h6>
         <div className="d-flex gap-3 mb-3 flex-wrap">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`btn btn-link text-decoration-none ${
              selectedMonth === month ? "fw-bold text-primary border-bottom border-primary" : "text-dark"
            }`}
          >
            {month}
          </button>
        ))}
      </div>
      </div>

      {/* Month Filter */}
     

      {/* Batch List */}
      <div className="row gy-3 mt-3">
        {filteredBatches.map((batch) => (
          <div key={batch.id} className="col-md-6">
            <label
              className="d-flex justify-content-between align-items-center position-relative p-3 border rounded shadow-sm w-100"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-2 ">
                <input
                  type="radio"
                  name="batch"
                  checked={selectedBatch === batch.id}
                  onChange={() => setSelectedBatch(batch.id)} style={{display:"block", visibility:"visible", opacity:"1",width:"20px", height:"20px"}}
                />
                <span className="fw-bold">
                  {batch.start} To {batch.end}
                </span>
              </div>
              <span
                className={`badge top-50 px-3 py-2 rounded-pill  ${
                  batch.status === "Filling Fast"
                    ? "bg-warning text-dark"
                    : "bg-success text-light"
                }`} style={{transform:"translateY(-50%)"}}
              >
                {batch.status}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
