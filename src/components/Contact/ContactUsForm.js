'use client';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    age: '',
    destination: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="space-extra2-top space-extra2-bottom "
      style={{ backgroundImage: "url('/img/bg/video_bg_1.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
    >
      <div className="container">
        <div className="row flex-row-reverse justify-content-center align-items-center">
          {/* Video Section */}
          <div className="col-lg-6">
            <div className="video-box1">
              <a
                href="https://www.youtube.com/watch?v=cQfIUPw72Dk"
                className="play-btn style2 popup-video" target="_blank"
              >
                <i className=""> <FontAwesomeIcon icon={faPlay} /></i>
                
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="col-lg-6">
            <div>
              <form
                action="#!"
                method="POST"
                className="contact-form style2 ajax-contact"
              >
                <h3 className="sec-title mb-30 text-capitalize">Book a tour</h3>
                <div className="row">
                  {/* Name */}
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name3"
                      placeholder="First Name"
                    />
                    <img src="/img/icon/user.svg" alt="" />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name3"
                      placeholder="Last Name"
                    />
                    <img src="/img/icon/user.svg" alt="" />
                  </div>

                  {/* Email */}
                  <div className="col-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email3"
                      id="email3"
                      placeholder="Your Mail"
                    />
                    <img src="/img/icon/mail.svg" alt="" />
                  </div>
                  {/* phone */}
                  <div className="col-12 form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="email3"
                      id="email3"
                      placeholder="Phone"
                    />
                    <img src="/img/icon/phone.svg" alt="" />
                  </div>
                  {/* Age */}
                  <div className="col-6 form-group">
                    <input
                      type="number"
                      className="form-control"
                      name="email3"
                      id="email3"
                      placeholder="Age"
                    />
                    <img src="/img/icon/phone.svg" alt="" />
                  </div>
                  
                  {/* Date */}
                  <div className="col-6 form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="email3"
                      id="email3"
                      placeholder="Date"
                    />
                    <img src="/img/icon/calander.svg" alt="" />
                  </div>

                  {/* Tour Type */}
                  <div className="form-group col-12">
                    <select
                      name="subject"
                      id="subject"
                      className=" form-select "
                    >
                      <option value="Select Tour Type" disabled selected>
                        Select Tour Type
                      </option>
                      <option value="Africa Adventure">Africa Adventure</option>
                      <option value="Africa Wild">Africa Wild</option>
                      <option value="Asia">Asia</option>
                      <option value="Scandinavia">Scandinavia</option>
                      <option value="Western Europe">Western Europe</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      className="form-control"
                      placeholder="Your Message"
                    ></textarea>
                    <img src="/img/icon/chat.svg" alt="" />
                  </div>

                  {/* Submit */}
                  <div className="form-btn col-12 mt-24">
                    <button type="submit" className="th-btn style3">
                      Send message
                      <img src="assets/img/icon/plane.svg" alt="" />
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
