import React from "react";
import { Link } from "react-router-dom";

import "./auth.css";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    console.log("register button clicked!");
  };

  return (
    <div className="container-sm mt-4">
      <h1 className="text-center mb-3">Register Codigram22</h1>
      <form className="needs-validation auth" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleRegister}
            className="btn btn-primary"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <div className="text-center">
        <small>
          Have already an account? Login
          <Link to="/login"> here</Link>.
        </small>
      </div>
    </div>
  );
};

export default Register;