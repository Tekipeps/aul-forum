import styled from 'styled-components';

const StyledSideBar = styled.div`
    width: 450px;
    font-family: Quantico;
    background-color: ${({ theme }) => theme.purple};
    color: white;
    position: relative;
    word-wrap: break-word;
    font-size: 49px;
    overflow: auto;
    padding: 20px;
`;

export default StyledSideBar;
