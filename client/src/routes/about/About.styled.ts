import styled from 'styled-components';

export const StyledPinnedLinks = styled.div`
    border-bottom: 1px solid black;
    background-color: ${({ theme }) => theme.navbar.bgcolor};
    .githubLink {
        display: inline-block;
        margin: 4px 50px;
        background-color: #050;
        padding: 4px 6px;
        border-radius: 3px;
        font-family: Nunito;
        font-size: 15px;
        color: white;
        :hover {
            background-color: #060;
        }
    }
`;

export const StyledTeamList = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    margin: 7% auto;
`;
