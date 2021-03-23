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
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 15px;
        color: white;
        &:hover {
            background-color: #060;
        }
    }
`;

export const StyledHeading = styled.div`
    font-size: clamp(18px, 3vw, 26px);
    margin: 0px 0px;
    font-family: 'Times New Roman', Times, serif;
    background-color: ${({ theme }) => theme.navbar.bgcolor};
    color: ${({ theme }) => theme.navbar.color};
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.purple};
    padding: 10px;
`;
export const StyledTeamList = styled.div`
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    margin-top: 7%;
    left: 50%;
    transform: translateX(-50%);
`;
export const StyledMemberWrapper = styled.div`
    margin: 5px auto;
    padding: 10px;
`;

export const StyledMember = styled.div`
    background: linear-gradient(${({ theme }) => theme.purple} 18%, ${({ theme }) => theme.grey} 18%);
    position: relative;
    width: 240px;
    border-radius: 6px;
    padding: 4px;
    height: 300px;
    > .avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 10px 20px;
    }
    > .name {
        padding: 2px 5px;
        font-size: 17px;
        font-family: Advent Pro;
        font-weight: 600;
        margin: 5px 0px;
        color: ${({ theme }) => theme.bgtext};
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
        border-radius: 5%;
    }
    > .bio {
        font-size: 0.8rem;
        font-size: 16px;
        padding: 7px;
        margin: 5px 2px;
        font-family: Nunito;
        overflow-y: auto;
        max-height: 120px;
        color: ${({ theme }) => theme.bgtext};
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
    }
    &:hover {
        box-shadow: 2px 2px grey;
    }
`;
