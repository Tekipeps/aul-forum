import React, { ReactElement, FC } from 'react';
import githubLogo from '../../assets/github-logo.svg';

interface Member {
    name: string;
    avatarURL: string;
    bio: string;
    role: string;
    githubURL: string;
}

const TeamMember: FC<Member> = ({ name, avatarURL, bio, role, githubURL }): ReactElement => (
    <div className='member'>
        <img className='avatar' src={avatarURL} alt={name} />
        <p className='role'>{role}</p>
        <h3 className='name'>{name}</h3>

        <p className='bio'>{bio}</p>
        <a href={githubURL}>
            <img className='githubURL' src={githubLogo} alt='github link' />
        </a>
    </div>
);

export default TeamMember;
