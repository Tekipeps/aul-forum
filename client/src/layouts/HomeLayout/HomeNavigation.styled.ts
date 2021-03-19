import styled from 'styled-components';

const StyledNavBar = styled.div`
    position: relative;
    padding: 30px 10px 0px 0px;
    background-color: ${({ theme }) => theme.home.navcolor};
    display: flex;
`;

export const StyledRoutesWrapper = styled.div`
    margin-left: 50px;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0px;
    padding: 0px;
`;

export const StyledSearchBarContainer = styled.div`
    margin-left: 20px;
    flex: 1;
    max-width: 400px;
    display: flex;
    padding: 4px 7px;
    height: 35px;
    > .searchIconWrapper {
        width: 28px;
        background-color: ${({ theme }) => theme.bgcolor};
        border-radius: 10px 0px 0px 10px;
        border-left: 1px solid white;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    > input {
        background: ${({ theme }) => theme.bgcolor};
        color: ${({ theme }) => theme.bgtext};
        width: 160px;
        min-width: 160px;
        padding: 6px 12px;
        font-size: 16px;
        transition: width;
        transition-duration: 100ms;
        font-family: Nunito;
        max-width: 300px;
        border-radius: 0px 10px 10px 0px;
        border-right: 1px solid white;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        border-left: none;
        &:focus {
            width: 70%;
        }
    }
`;

export const StyledNavLink = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.home.navcolor};
    transition: border;
    transition-duration: 300ms;
    &:hover {
        border-bottom: 2px solid #aaa;
    }
    &.isOnFocus {
        border-bottom: 2px solid red;
    }
    a {
        color: ${({ theme }) => theme.home.navlink};
        display: block;
        padding: 14px 15px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 16px;
    }
`;

export default StyledNavBar;
