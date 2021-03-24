import { ReactElement, FC } from 'react';
import TeamMember from './TeamMember';
import { StyledPinnedLinks, StyledTeamList } from './About.styled';
import Notification from '../../components/reusable/Notification';
import members from './assets/team-members.json';

export const AboutPage: FC = (): ReactElement => {
    return (
        <>
            <StyledPinnedLinks>
                <a className='githubLink' href='https://github.com/Tekipeps/aul-forum' target='_blank'>
                    Check out this project on Github
                </a>
            </StyledPinnedLinks>
            <Notification>Check out the awesome crew that contributed to this project</Notification>
            <StyledTeamList>
                {members.map((member, i) => (
                    <TeamMember {...member} key={i} />
                ))}
            </StyledTeamList>
        </>
    );
};
