import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const StyledDummyText = styled.div`
    text-align: center;
    font-size: 24px;
`;

export const ProfilePage: FC = (): ReactElement => {
    return <StyledDummyText>Working on the profile page...</StyledDummyText>;
};
