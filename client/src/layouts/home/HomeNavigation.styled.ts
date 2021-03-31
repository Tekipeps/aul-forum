import styled from 'styled-components';

const StyledNavBar = styled.div`
    position: relative;
    padding: 30px 10px 0px 0px;
    background-color: ${({ theme }) => theme.home.postnav_bgcolor};
    display: flex;
    border-bottom: 1px solid #777;
`;

export const StyledNavButtonContainer = styled.div`
    position: relative;
    top: 1px;
    margin-left: 70px;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0px;
    padding: 0px;
`;

export const StyledSearchBarContainer = styled.div`
    margin-left: 40px;
    flex: 1;
    max-width: 400px;
    display: flex;
    padding: 4px 7px;
    height: 35px;
    > .searchIconWrapper {
        width: 28px;
        background-color: ${({ theme }) => theme.body.bgcolor};
        border-radius: 0px 10px 10px 0px;
        border-right: ${({ theme }) => theme.home.searchbar_border};
        border-top: ${({ theme }) => theme.home.searchbar_border};
        border-bottom: ${({ theme }) => theme.home.searchbar_border};
    }
    > input {
        background: ${({ theme }) => theme.body.bgcolor};
        color: ${({ theme }) => theme.body.color};
        width: 160px;
        min-width: 160px;
        padding: 6px 12px;
        font-size: 16px;
        transition: width;
        transition-duration: 100ms;
        font-family: Nunito, Arial;
        max-width: 300px;
        border-radius: 10px 0px 0px 10px;
        border-left: ${({ theme }) => theme.home.searchbar_border};
        border-top: ${({ theme }) => theme.home.searchbar_border};
        border-bottom: ${({ theme }) => theme.home.searchbar_border};
        border-right: none;
        &:focus {
            width: 70%;
        }
    }
`;

export const StyledNavButton = styled.div`
    border: 2px solid transparent;
    transition: border;
    transition-duration: 300ms;
    &:hover {
        border-bottom: 2px solid #aaa;
    }
    &.isOnFocus {
        border-bottom: 2px solid red;
    }
    a {
        color: ${({ theme }) => theme.home.nav_link_color};
        display: block;
        padding: 14px 15px;
        font-family: Nunito, Arial;
        font-size: 16px;
    }
`;

export default StyledNavBar;
