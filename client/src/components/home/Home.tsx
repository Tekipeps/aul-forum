import React from "react";
import PostsSection from "./PostsSection";
import MembersSection from "./MembersSection";
import "./Home.scss";

export const Home = () => (
  <div >
    <div id="home-content">
      <PostsSection />
    </div>
    <MembersSection />
  </div>
);
