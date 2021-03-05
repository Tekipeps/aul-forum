import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/nav/NavigationBar";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Team } from "./components/team/Team";
import "./App.css";
export const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/team" component={Team} />
        </main>
      </div>
    </Router>
  );
};
