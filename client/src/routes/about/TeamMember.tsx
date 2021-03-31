import { ReactElement, FC } from 'react';
import githubLogo from '../../assets/svg/github-logo.svg';
import { StyledMemberWrapper, StyledMember } from './TeamMember.styled';
import Avatar from '../../components/reusable/Avatar';

interface Member {
    name: string;
    avatarURL: string;
    bio: string;
    role: string;
    githubURL: string;
}

const TeamMember: FC<Member> = ({ name, avatarURL, bio, role, githubURL }): ReactElement => {
    const src: string = require(`../../assets${avatarURL}`).default;

    return (
        <StyledMemberWrapper>
            <StyledMember>
                <div className='avatar-wrapper'>
                    <Avatar src={src} alt={name} size={70} />
                </div>
                <p className='role'>{role}</p>
                <p className='name'>{name}</p>
                <p className='bio'>{bio}</p>
                <a className='githubURL' href={githubURL} target='_blank' title={`Visit ${name}'s github`}>
                    <img src={githubLogo} alt='github link' />
                </a>
            </StyledMember>
        </StyledMemberWrapper>
    );
};
export default TeamMember;
