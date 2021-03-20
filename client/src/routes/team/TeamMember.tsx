import { ReactElement, FC } from 'react';
import githubLogo from '../../assets/svg/github-logo.svg';
import { StyledMemberWrapper, StyledMember } from './Team.styled';

interface Member {
    name: string;
    avatarURL: string;
    bio: string;
    role: string;
    githubURL: string;
}

const TeamMember: FC<Member> = ({ name, avatarURL, bio, role, githubURL }): ReactElement => (
    <StyledMemberWrapper>
        <StyledMember>
            <img className='avatar' src={avatarURL} alt={name} />
            <p className='role'>{role}</p>
            <h3 className='name'>{name}</h3>
            <p className='bio'>{bio}</p>
            <a className='githubURL' href={githubURL} target='_blank' title={`Visit ${name}'s github`}>
                <img src={githubLogo} alt='github link' />
            </a>
        </StyledMember>
    </StyledMemberWrapper>
);

export default TeamMember;
