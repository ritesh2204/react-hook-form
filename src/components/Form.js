import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const submit = (e, values) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubit={handleSubmit(submit)}>
      <div className="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          name="fullname"
          className="form-control"
          id="fullname"
          ref={register}
        />
      </div>
      <div className="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          ref={register}
        />
      </div>
      <div className="form-group">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          name="contact"
          className="form-control"
          id="phone"
          ref={register}
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          ref={register}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
