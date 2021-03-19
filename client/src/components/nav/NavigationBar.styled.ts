import styled from 'styled-components';

const StyledNavBar = styled.div`
    background: ${({ theme }) => theme.navbar.bgcolor};
    border-bottom: 1px solid ${({ theme }) => theme.bgtext};
    padding: 3px 3px;
    position: relative;
    min-height: 50px;
    z-index: 2;
    display: flex;
`;

export const StyledNavLogo = styled.div`
    margin: 5px 20px;
    min-width: 250px;
    display: flex;
    > div {
        padding: 1px 1px;
        margin: 0px 10px;
        font-family: Nunito;
        font-weight: 600;
        font-size: 1.8rem;
        height: 40px;
        line-height: 50px;
        color: ${({ theme }) => theme.navbar.color};
        > img {
            margin: 0;
            border-radius: 15%;
            padding: 4px;
            background-color: ${({ theme }) => theme.navbar.bgcolor};
            height: 100%;
        }
    }
`;

export const StyledNavRoutes = styled.div`
    flex: 1;
    margin: 0px 10px 0px 30px;
    overflow: hidden;
    white-space: nowrap;
    padding: 8px;
    > div {
        border-radius: 3px;
        text-align: center;
        border: 2px solid ${({ theme }) => theme.navbar.bgcolor};
        margin: 0px 10px;
        > a {
            color: ${({ theme }) => theme.navbar.linkColor};
            display: block;
            padding: 5px 25px;
            font-size: 1.2rem;
            font-family: Nunito;
        }
        &:hover {
            border: 2px solid ${({ theme }) => theme.navbar.linkColor};
        }
    }
`;

export default StyledNavBar;
