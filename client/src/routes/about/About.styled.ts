import styled from 'styled-components';

export const StyledHeader = styled.div`
    margin: 40px 40px 10px 40px;
    padding: 5px 20px;
    font-family: Nunito;
    font-size: 17px;
    max-width: 700px;
    border: 1px solid ${({ theme }) => theme.grey};
    border-radius: 6px;
    #about-header {
        font-size: 20px;
        margin: 0;
        width: fit-content;
        padding: 3px 10px;
        border-radius: 17px;
        border: 1px solid ${({ theme }) => theme.grey};
        color: ${({ theme }) => theme.body.color};
    }
    #about-content {
        padding: 0px 10px;
        color: ${({ theme }) => theme.body.color};
        a {
            color: #00f;
        }
    }
`;

export const StyledMainWrapper = styled.div`
    display: flex;
    padding: 40px 5px 10px 40px;
    margin-bottom: 20px;
`;

export const StyledTeamListWrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.grey};
    border-radius: 6px;
    overflow: hidden;
    margin: 0px 0px;
    max-width: 600px;
    float: right;
    width: fit-content;
`;

export const StyledTeamList = styled.div`
    display: flex;
    flex-flow: row wrap;
`;
