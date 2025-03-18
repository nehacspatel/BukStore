import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert("Information Submitted!");
    navigate("/"); // Redirect to home page after submission
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className="close-btn">X</Link>

          <h3 className="contact-title">Contact Us</h3>

          <div className="contact-field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          <div className="contact-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="contact-field">
            <label>Mobile No</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              {...register("mobile", { 
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number"
                }
              })}
            />
            {errors.mobile && <span className="error-message">{errors.mobile.message}</span>}
          </div>

          {/* New Message Field */}
          <div className="contact-field">
            <label>Message</label>
            <textarea
              placeholder="Enter your message"
              {...register("message", { required: "Message is required" })}
              rows="4"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
