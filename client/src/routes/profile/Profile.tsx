import { FC, ReactElement } from 'react';
import LeftSection from './LeftProfileSection';
import RightProfileSection from './RightProfileSection';
import styled from 'styled-components';

const StyledProfilePage = styled.div`
    display: flex;
    padding: 10px;
`;

export const ProfilePage: FC = (): ReactElement => {
    return (
        <StyledProfilePage>
            <LeftSection />
            <RightProfileSection />
        </StyledProfilePage>
    );
};
