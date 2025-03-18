import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup({modalRef}) {
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
    <div ref ={modalRef} className ="b1">
      <div className="b2" >
        <div>
            <form onSubmit={handleSubmit(onSubmit)} method ="dialogs">
            <Link to ="/" className="btt">X</Link>
           
            <h3 className="logg">Signup</h3>
        <div className = "b3">
        <span>Name</span>
        <br/>
        <input type="text" placeholder='Enter your Fullname' className = "b4"
                      {...register("name", { required: "Your name  is required" })}
/>
                    <br/>
                    {errors.name && <span className="error-message">This field is required</span>}

        </div>
        <div className = "b3">
        <span>Email</span>
        <br/>
        <input type="email" placeholder='Enter your Email' className = "b4"
                      {...register("email", { required: "Email is required" })}

        />
        <br/>
        {errors.email && <span className="error-message">This field is required</span>}

        </div>
        <div className = "b3">
        <span>Password</span>
        <br/>
        <input type="password" placeholder='Enter your password' className = "b4"
                      {...register("password", { required: "Password is required" })}
/>
<br/>
{errors.password && <span className="error-message">This field is required</span>}

        </div>
        <div className = "b5">
            <button className = "b6">Signup</button>
           <p>Have Account? <Link to ="/signup" className ="b7" onClick={()=>
            document.getElementById("my_modal_3").showModal()
           }>
            Login</Link>{" "}
            <Login/>
              </p>
        </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
