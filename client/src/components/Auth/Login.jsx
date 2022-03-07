import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";

import "./auth.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("login button clicked!");
  };

  const googleSuccess = (response) => {
    console.log(response);
  };

  const googleFailure = () => {
    console.log("Fail Login with Google!");
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <GiPadlock fontSize={50} />
      </div>
      <h1 className="text-center mb-3">Login Codigram22</h1>
      <form className="needs-validation auth" noValidate>
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
            onClick={handleLogin}
            className="btn btn-primary"
            type="submit"
          >
            <BiLogIn fontSize={20} /> Login
          </button>
        </div>

        <small className="text-center">
          <p>or</p>
        </small>

        <div className="text-center">
          <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                className="btn btn-light"
                onClick={renderProps.onClick}
                // disabled={renderProps.disabled}
              >
                <FcGoogle fontSize={20} /> <small>Login with Google</small>
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
      </form>
      <div className="text-center">
        <small>
          Haven't already an account yet? Register
          <Link to="/register"> here</Link>.
        </small>
      </div>
    </div>
  );
};

export default Login;
