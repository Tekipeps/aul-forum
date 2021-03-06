import React from "react";

interface Member {
  name: string;
  avatarURL: string;
  bio: string;
}

const TeamMember = ({ name,avatarURL, bio }: Member) => (
  <div className="member">
    <img src={avatarURL} alt="" />
    <h3>{name}</h3>
    <p className="bio">{bio}</p>
  </div>
);

export default TeamMember;
