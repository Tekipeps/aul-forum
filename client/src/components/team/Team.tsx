import React, { ReactElement } from 'react';
import TeamMember from './TeamMember';
import './Team.scss';

export const Team = (): ReactElement => (
    <div>
        <a id='github-link' href='https://github.com/Tekipeps/aul-forum'>
            Checkout this project on Github
        </a>
        <div id='heading'>Meet The Awesome Crew That Contributed To This Project.</div>
        <div id='team-list'>
            <TeamMember
                name='Tekena Solomon'
                avatarURL={fetchAvatar('tekipeps.jpeg')}
                bio=' Software developer from Port Harcourt, Nigeria. Loves building
          software to solve real world problems.'
                role='Lead backend developer'
                githubURL='https://github.com/Tekipeps'
            />
            <TeamMember
                name='Koledoye Abidemi'
                avatarURL={fetchAvatar('bidex.jpg')}
                bio='  Frontend developer experienced with Java, TypeScript and
        Reactjs, develops web games with webcanvas, hates cats!'
                role='Lead Frontend developer'
                githubURL='https://github.com/BidemiEnoch'
            />
            <TeamMember
                name='Emmanuel Itighise'
                avatarURL={fetchAvatar('emedit.jpeg')}
                bio='Freelance Frontend
        Developer, familiar with Reactjs, loves learning. Addicted to political issues.'
                role='Frontend support'
                githubURL='https://github.com/EmeditWeb'
            />

            <TeamMember
                name='Osinowo Seun'
                avatarURL={fetchAvatar('seun.jpeg')}
                bio={'Loves to write PHP for serverside development, freelancer, big nerd...fine!! medium nerd.'}
                role='Frontend support'
                githubURL='https://github.com/seunosinowo'
            />
        </div>
    </div>
);

const fetchAvatar = (assetName: string) => require(`../../assets/images/${assetName}`).default;
