import React, { useState } from "react";

// Static JSON Data
const occupancyData = {
  vehicle: "Tempo Traveller",
  options: [
    { id: 1, type: "Triple Occupancy", price: 23000 },
    { id: 2, type: "Double Occupancy", price: 28000 },
  ],
};

export default function Occupancy() {
  const [activeTab, setActiveTab] = useState("Triple Occupancy");
  const [quantities, setQuantities] = useState({ 1: 0, 2: 0 });
  const [open, setOpen] = useState(true);

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  return (
    <div className="min_box-detail Age_limit container my-4">
      {/* Header */}
      <div className="title d-flex justify-content-between align-items-center">
        <div>
          <h6 className="fw-bold mb-0 page-title">Occupancy</h6>
          <small className="text-muted">(Room Arrangement or Room Sharing)</small>
        </div>
        <div className="d-flex gap-4">
          {occupancyData.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveTab(opt.type)}
              className={`btn btn-link text-decoration-none ${
                activeTab === opt.type
                  ? "fw-bold text-primary border-bottom border-primary"
                  : "text-dark"
              }`}
            >
              {opt.type}{" "}
              <span className="text-muted">
                ({quantities[opt.id] || 0} member)
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Card */}
      <div className="mt-3 border rounded shadow-sm bg-light">
        {/* Only header toggles open/close */}
        <div
          className="d-flex justify-content-between align-items-center p-3"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          <h6 className="fw-bold mb-0">{occupancyData.vehicle}</h6>
          <span>{open ? "▲" : "▼"}</span>
        </div>

        {/* Options inside */}
        {open && (
          <div className="bg-white p-3 m-2 rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-muted d-block">Occupancy</small>
                <span className="fw-bold">{activeTab}</span>
              </div>
              <div className="d-flex align-items-center gap-4">
                <span className="fw-bold">
                  ₹{" "}
                  {occupancyData.options
                    .find((o) => o.type === activeTab)
                    ?.price.toLocaleString()}
                </span>
                <div className="d-flex align-items-center border rounded px-2">
                  <button
                    className="btn btn-sm btn-light"
                    onClick={() =>
                      handleQtyChange(
                        occupancyData.options.find((o) => o.type === activeTab)
                          ?.id,
                        -1
                      )
                    }
                  >
                    -
                  </button>
                  <span className="mx-2">
                    {
                      quantities[
                        occupancyData.options.find(
                          (o) => o.type === activeTab
                        )?.id
                      ] || 0
                    }
                  </span>
                  <button
                    className="btn btn-sm btn-light"
                    onClick={() =>
                      handleQtyChange(
                        occupancyData.options.find((o) => o.type === activeTab)
                          ?.id,
                        1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
