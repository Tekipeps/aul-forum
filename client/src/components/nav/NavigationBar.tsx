import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/form-images/logo.png";
import "./NavigationBar.scss";

export const NavBar = () => (
  <nav className="navbar">
    <div className="logo">
      <img width="40px" height="40px" src={Logo} />
      <span>AUL Forum</span>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/team">Team</Link>
      </li>
    </ul>
  </nav>
);
