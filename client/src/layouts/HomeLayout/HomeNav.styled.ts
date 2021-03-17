import styled from 'styled-components';

const StyledHomeNav = styled.div`
    position: relative;
    padding: 2rem 2rem 0 0.8rem;
    background-color: ${({ theme }) => theme.light.purple};
    display: flex;
    justify-content: space-between;
`;

export const StyledNavLinks = styled.div`
    white-space: nowrap;
    padding: 1rem 1rem 0 1rem;
    align-items: flex-end;
    & > .home-nav-link {
        color: white;
        padding: 5px;
        font-size: 1.1rem;
        font-family: Nunito;
        margin: 10px;

        &:hover {
            border-bottom: 2px solid #aaa;
        }
        &.isOnFocus {
            border-bottom: 2px solid red;
        }
    }
`;

export const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 1rem 10px 1rem;
    & > input {
        height: 2em;
        border-radius: 20px;
        width: 160px;
        min-width: 160px;
        max-width: 170px;
        padding: 6px 2.5rem;
        border: none;
        font-size: 16px;
        transition: width;
        transition-duration: 100ms;
        font-family: Nunito;
        max-width: 300px;

        &:focus {
            width: 70%;
        }
    }
    & > img {
        position: absolute;
        width: 20px;
        color: black;
        left: 1;
        margin-left: 0.6rem;
    }
`;
export default StyledHomeNav;
