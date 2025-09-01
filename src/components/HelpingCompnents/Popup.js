'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [catAndPack, setCatAndPack] = useState([
    {
      category: "Weekend Trips",
      packages: [{ title: "Auil" }, { title: "Manali" }, { title: "Jammu" }, { title: "Ladakh" }, { title: "Shimla" }],
    },
    {
      category: "Backpacking Trips",
      packages: [{ title: "Agra" }, { title: "Kerala" }, { title: "Goa" }, { title: "Ladakh" }, { title: "Shimla" }],
    },
    {
      category: "Spiti Trips",
      packages: [{ title: "Winter" }, { title: "Road Trip" }, { title: "Summer Trip" }, { title: "Ladakh" }, { title: "Shimla" }],
    },
    {
      category: "Valentine Trips",
      packages: [{ title: "Oyo" }, { title: "Manali" }, { title: "Jammu" }, { title: "Ladakh" }, { title: "Shimla" }],
    },
  ]);

  const [selectedCat, setSelectedCat] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    category: "",
    package: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (index) => {
    setSelectedCat(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {isOpen && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0 d-flex flex-column flex-md-row">

                {/* Left Image */}
                <div className="col-md-6 d-none d-md-block">
                  <Image
                    src="/img/sale.webp" 
                    alt="Left Side"
                    className="img-fluid h-100 w-100 rounded-start"
                    width={600}
                    height={800}
                  />
                </div>
                <div className="col-12 d-block d-md-none">
                  <Image
                    src="/img/sale.webp" 
                    alt="Left Side Small"
                    className="img-fluid w-100"
                    width={600}
                    height={400}
                  />
                </div>

                {/* Right Form */}
                <div className="col-md-6 p-4">
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-light rounded-circle" onClick={() => setIsOpen(false)}>
                      <FontAwesomeIcon icon={faClose}/>
                    </button>
                  </div>

                  <h4 className="mb-4 border-bottom pb-2 sec-title">Plan your Next Trip</h4>

                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control rounded-pill"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control rounded-pill"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-pill"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="number"
                        name="contact"
                        className="form-control rounded-pill"
                        placeholder="Contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <select
                        name="category"
                        className="form-select rounded-pill"
                        value={formData.category}
                        onChange={(e) => {
                          handleInputChange(e);
                          const index = e.target.selectedIndex - 1;
                          if (index >= 0) {
                            handleCategorySelect(index);
                            setFormData((prev) => ({ ...prev, package: "" }));
                          }
                        }}
                        required
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        {catAndPack.map((item, index) => (
                          <option key={index} value={item.category}>
                            {item.category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <select
                        name="package"
                        className="form-select rounded-pill"
                        value={formData.package}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>
                          Select Package
                        </option>
                        {catAndPack[selectedCat].packages.map((item, index) => (
                          <option key={index} value={item.title}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 rounded-pill">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
