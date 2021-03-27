import { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import TeamMember from './TeamMember';
import { StyledHeader, StyledTeamList, StyledMainWrapper, StyledTeamListWrapper } from './About.styled';
import WindowResizeListener from '../../components/reusable/WindowResizeListener';
import Notification from '../../components/reusable/Notification';
import ContributionChart from './ContributionChart';
import members from './assets/team-members.json';

export const AboutPage: FC = (): ReactElement => (
    <>
        <StyledHeader>
            <p id='about-header'>About</p>
            <p id='about-content'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AUL forum is a platform designed for the purpose
                of connecting anchor students, here... you can discuss about issues and topics related or unrelated to
                AUL. So how is this different from say... twitter? facebook? here, you're surrounded by an awesome
                community of AUL students. Amazing right? Well... you're amazing too😉😉. So quit reading this message,
                head over to the <Link to='/home'>home</Link> page, or <Link to='/register'>register</Link> if you
                haven't and add some spark to the community !
            </p>
        </StyledHeader>
        <StyledMainWrapper>
            <WindowResizeListener minWidth={900}>
                <ContributionChart />
            </WindowResizeListener>
            <StyledTeamListWrapper>
                <Notification>Check out the awesome crew that contributed to this project</Notification>

                <StyledTeamList>
                    {members.map((member, i) => (
                        <TeamMember {...member} key={i} />
                    ))}
                </StyledTeamList>
            </StyledTeamListWrapper>
        </StyledMainWrapper>
    </>
);