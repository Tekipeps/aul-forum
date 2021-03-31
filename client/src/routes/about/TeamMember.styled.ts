import styled from 'styled-components';

export const StyledMemberWrapper = styled.div`
    margin: 5px auto;
    padding: 5px;
`;

export const StyledMember = styled.div`
    background: linear-gradient(${({ theme }) => theme.purple} 18%, ${({ theme }) => theme.grey} 18%);
    position: relative;
    width: 240px;
    border-radius: 6px;
    padding: 4px;
    height: 280px;
    > .avatar-wrapper {
        margin: 10px 20px;
        background: none;
        width: fit-content;
    }
    > .name {
        padding: 2px 5px;
        font-size: 17px;
        font-family: Nunito;
        margin: 5px 0px;
        color: ${({ theme }) => theme.home.grey};
    }
    > .role {
        padding: 0px 3px;
        font-size: 90%;
        text-align: center;
        width: 80%;
        background-color: ${({ theme }) => theme.purple};
        color: white;
        font-weight: 500;
        margin: auto;
        border-radius: 10px;
        font-family: Nunito;
    }
    > .bio {
        font-size: 0.8rem;
        font-size: 16px;
        padding: 7px;
        margin: 5px 2px;
        font-family: Nunito;
        overflow-y: auto;
        max-height: 120px;
        color: ${({ theme }) => theme.body.color};
    }
    > .githubURL {
        width: 30px;
        position: absolute;
        top: 9px;
        left: 80%;
        img {
            width: 100%;
            border-radius: 0%;
            padding: 1px;
        }
        :hover {
            transform: scale(1.05);
        }
    }
`;
