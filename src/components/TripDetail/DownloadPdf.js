import React from 'react'

export default function 
() {
  return (
    <div className='min_box-detail Age_limit container my-6 mt-40'>  
 <div className="d-flex align-items-center justify-content-center gap-3">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919876543210" // Replace with your number
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center justify-content-center rounded-circle"
    style={{
      width: "50px",
      minWidth:"50px",
      height: "50px",
      backgroundColor: "#e9f9ee",
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      style={{ width: "24px", height: "24px" }}
    />
  </a>

  {/* Send Query Button */}
  <button className="btn btn-primary w-100 px-4 py-2 rounded-pill fw-semibold">
    Send Query
  </button>

  {/* Get PDF Button */}
  <button className="btn btn-primary w-100 px-4 py-2 rounded-pill fw-semibold">
    Get PDF
  </button>
</div>

    </div>
  )
}
