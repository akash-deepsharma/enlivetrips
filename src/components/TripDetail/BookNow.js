import React from 'react'

export default function BookNow() {
  return (
    <div className="min_box-detail Age_limit container my-6 mt-80">
  {/* <!-- Title --> */}
  <div className="d-flex justify-content-between align-items-center mb-2">
    <span className="fw-semibold text-secondary">Starting From 
      <i className="bi bi-info-circle ms-1"></i>
  {/* <!-- Price --> */}
  <h3 className="fw-bold text-primary mb-4">
    ₹ 23,000
  </h3>
    </span>
    <span className=" bg-light text-dark rounded-pill px-3 py-2">
      Per Person
    </span>
  </div>


  {/* <!-- Button --> */}
<div className='d-flex align-items-center justify-content-between  gap-4'>
    <a href='/booking/asdfasdgah' className="btn btn-primary w-100 py-2 rounded-pill fw-semibold">
    Book Now
  </a>
   <button className="btn btn-primary w-100 py-2 rounded-pill fw-semibold" onClick={() => alert("Send Query Clicked!")}>
    Send Inquiry
  </button>
</div>
</div>

  )
}
