import React from "react";
import TeamMember from "./TeamMember";
import "./Team.css";

export const Team = () => (
  <div>
    <a id="github-link" href="https://github.com/Tekipeps/aul-forum">
      Checkout this project on Github
    </a>
    <div className="team-members-heading">Team Members</div>
    <div className="team-list">
      <TeamMember
        name="Tekena Solomon"
        avatarURL={fetchAvatar("tekipeps.jpeg")}
        bio=" I'm a Software developer from Port Harcourt, Nigeria. I love building
          software to solve real world problems."
      />
      <TeamMember
        name="Emmanuel Itighise"
        avatarURL={fetchAvatar("emedit.jpeg")}
        bio="  Hi, My name is Itighise, Emmanuel Edet, and i am a Freelance Frontend
        Developer."
      />
      <TeamMember
        name="Koledoye Abidemi"
        avatarURL={fetchAvatar("bidex.jpg")}
        bio="  I'm a frontend developer. Experienced with Java, TypeScript and
        React.js, I also hate cats...seriously."
      />
       <TeamMember
        name="Osinowo Seun"
        avatarURL={fetchAvatar("seun.jpeg")}
        bio="Hi I'm Seun Osinowo. I love to write PHP for serverside and HTML/CSS
        for frontend."
      />
       

     
    </div>
  </div>
);

const fetchAvatar = (assetName: string) => (require(`../../assets/images/${assetName}`).default);
 
