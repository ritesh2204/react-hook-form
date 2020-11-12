import React from "react";
import { useForm } from "react-hook-form";
import className from "classnames";

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    mode:"onChange"
  });

  const submit = ( values) => {
  
    console.log(values);
    alert(JSON.stringify(values))
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="mt-5">
      <div className="form-group">
        <label for="fullname">Full Name <span className="text-danger">*</span></label>
        <input
          type="text"
          name="fullname"
          className={className("form-control", {"is-invalid": errors.fullname})}
          id="fullname"
          ref={register({
            required: "This field is required",
            minLength:{
              value: 4,
              message: "Please enter fullname minimum 4 characters"
          },
        })}
        
        />
        {errors.fullname && (
          <div className="invalid-feedback">
              {errors.fullname.message}
            </div>
        )}
</div>

{/* Minimum eight characters, at least one letter, one number and one special character: */}

{/* "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" */}

      <div className="form-group">
        <label for="email" >Email address <span className="text-danger">*</span></label>
        <input
          type="email"
          name="email"
          className={className("form-control", {"is-invalid": errors.email})}
          id="email"
          ref={register({
            required: "This field is required",
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
          },
        })}
        />

        {errors.email && (
           <div className="invalid-feedback">
           {errors.email.message}
         </div>
        )}
      </div>

      <div className="form-group">
        <label for="contact">Phone Number <span className="text-danger">*</span></label>
        <input
          type="text"
          name="contact"
          className={className("form-control", {"is-invalid": errors.contact})}
          id="contact"
          ref={register({
            required: "This field is required",
            pattern:{
              value: /^\d{10}$/,
              message: "Please enter a valid 10 digit number"
            }
        })}
        />
          {errors.contact && (
           <div className="invalid-feedback">
           {errors.contact.message}
         </div>
        )}
      </div>

      <div className="form-group">
        <label for="phone">City <span className="text-danger">*</span></label>
        <input
          type="text"
          name="city"
          className={className("form-control", {"is-invalid": errors.city})}
          id="city"
          ref={register({
            required: "This field is required",
        })}
        />
            {errors.city && (
           <div className="invalid-feedback">
           {errors.city.message}
           </div>)}
      </div>

      
      <div className="form-group">
        <label for="phone">Zip code <span className="text-danger">*</span></label>
        <input
          type="text"
          name="zip"
          className={className("form-control", {"is-invalid": errors.zip})}
          id="zip"
          ref={register({
            required: "This field is required",
        })}
        />
        {errors.zip && (
           <div className="invalid-feedback">
           {errors.zip.message}
           </div>)}
      </div>

      <div className="form-group">
        <label for="password">Password <span className="text-danger">*</span></label>
        <input
          type="password"
          name="password"
          className={className("form-control", {"is-invalid": errors.password})}
          id="password"
          ref={register({
            required: "This field is required",
            pattern:{
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message: "Minimum eight characters, at least one letter, one number, one uppercase, and one special character"
            }
        })}
        />
         {errors.password && (
           <div className="invalid-feedback">
           {errors.password.message}
         </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
