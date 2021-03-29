import styled from 'styled-components';

const StyledNavBar = styled.div`
    background: ${({ theme }) => theme.navbar.bgcolor};
    padding: 0px 3px;
    position: relative;
    min-height: 50px;
    z-index: 2;
    display: flex;
    border-bottom: 1px solid grey;
`;

export const StyledNavLogo = styled.div`
    margin: 5px 0px 5px 15px;
    padding-right: 15px;
    display: flex;
    > #logo-text {
        padding-left: 1vw;
        margin: 0px 5px;
        font-family: Quantico, sans-serif;
        font-size: clamp(20px, 2.5vw, 32px);
        min-height: 40px;
        line-height: 50px;
        color: ${({ theme }) => theme.navbar.route_color};
        word-spacing: 2px;
    }

    > #logo-image-wrapper {
        height: 40px;
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
    margin-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    padding: 11px 8px 8px 8px;
    > #route-btn {
        border-radius: 3px;
        text-align: center;
        border: 1px solid ${({ theme }) => theme.navbar.bgcolor};
        margin: 0px 0.5vw;
        > a {
            color: ${({ theme }) => theme.navbar.route_color};
            display: block;
            padding: 5px 25px;
            font-size: clamp(16px, 2vw, 20px);
            font-family: Nunito;
        }
        &:hover {
            border: 1px solid ${({ theme }) => theme.navbar.route_color};
        }
    }
`;

export default StyledNavBar;
