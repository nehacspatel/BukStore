import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";

function Login({ modalRef }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting form...");
    console.log("Form Data:", data);
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <dialog ref={modalRef} id="my_modal_3" className="modal">
      <div className="modal_box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className="btt" onClick={closeModal}>X</Link>
          <h3 className="log">Login</h3>

          <div className="d1">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="design"
              {...register("email", { required: "Email is required" })}
            />
            <br/>
            {errors.email && <span className="error-message">This field is required</span>}
          </div>

          <div className="d1">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="design"
              {...register("password", { required: "Password is required" })}
            />
            <br/>
            {errors.password && <span className="error-message">This field is required</span>}
          </div>

          <div className="d2">
            <button type="submit" className="d3">Login</button>
            <p>
              Not registered? 
              <Link to="/signup" className="d4">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
