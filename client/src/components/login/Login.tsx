import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import "../../scss/form.scss";
import Logo from "../../assets/form-images/logo.png";

export const Login = () => (
  <div id="container">
    <div id="form-header">AUL Forum Login</div>
    <div id="form-holder">
      <div id="logo-image">
        <img src={Logo} alt="logo"/>
      </div>
      <form id="login-form">
        <input name="matric-no" type="text" placeholder="Matric Number" />
        <input name="password" type="password" placeholder="Password" />
        <button id="login-btn" type="submit">
          Login
        </button>

        <button id="register-btn">
          <Link to="/register">Dont have an account?</Link>
        </button>
      </form>
    </div>
    <div id="form-sidebar">
      <p>
        Keep up with news and discussions related to AUL from anywhere, at
        anytime
      </p>
    </div>
  </div>
);
