import React from "react";
import { Link } from "react-router-dom";
//import "../css/main.css";
import "./NavigationBar.css";

export const NavBar = () => (
  <nav className="navbar">
    <h3 className="logo">
      Entrepre<span>neurship</span>
    </h3>
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
