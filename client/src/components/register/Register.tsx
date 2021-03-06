import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import "../../css/form.css";

export const Register = () => (
  <div id="container">
    <div id="form-header">AUL Forum Sign Up</div>
    <div id="form-holder">
      <div id="form-description">
        W'ere happy to have you sign up for our platform, please enter your
        information accurately.
      </div>
      <form id="signup-form">
        <input
          name="matric-no"
          type="text"
          placeholder="Matriculation Number"
        />
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="text" placeholder="New Password" />
        <input
          name="confirmpassword"
          type="password"
          placeholder="Confirm Password"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address(optional)"
        />
        <div id="gender-option">
          <p>Gender</p>
          <div>
            <label>
              <input type="radio" name="gender" value="value" />
              <span>Male</span>
            </label>
            <label>
              <input type="radio" name="gender" value="another-value" />
              <span>Female</span>
            </label>
          </div>
        </div>

        <button name="signup" type="button">
          Sign Up
        </button>
        <button name="signup-later" type="button">
          <Link to="/">Sign Up Later</Link>
        </button>
        <button name="team-link" type="button">
          <Link to="/team">Want to meet our team?</Link>
        </button>
      </form>
    </div>
    <div id="form-sidebar">
      <p>
        Create an account to have unlimited access and contribution to content
        from AUL's forum
      </p>
    </div>
  </div>
);
