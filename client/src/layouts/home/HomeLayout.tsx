import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import HomeNavigation from './HomeNavigation';
import SectionDescription from './PostSectionDescription';
import ThemeToggler from './ThemeToggler';
import PostSection from './PostSection';

interface LayoutParams {
    toggleTheme: () => void;
}

const StyledMain = styled.div`
    display: flex;
    margin: 2px;
`;

const Layout: FC<LayoutParams> = ({ toggleTheme }): ReactElement => (
    <div>
        <HomeNavigation />
        <SectionDescription />
        <StyledMain>
            <ThemeToggler {...{ toggleTheme }} />
            <PostSection />
        </StyledMain>
    </div>
);

export default Layout;
