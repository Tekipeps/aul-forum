import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import HomeNavigation from './HomeNavigation';
import SectionDescription from './PostSectionDescription';
import PostSection from './PostSection';
import RightSection from './RightSection';

const StyledMain = styled.div`
    display: flex;
`;

const Layout: FC = (): ReactElement => (
    <div>
        <HomeNavigation />
        <SectionDescription />
        <StyledMain>
            <PostSection />
            <RightSection />
        </StyledMain>
    </div>
);

export default Layout;
