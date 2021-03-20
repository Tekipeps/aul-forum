import styled from 'styled-components';

const StyledSideBar = styled.div`
    width: 450px;
    font-family: Quantico;
    background-color: ${({ theme }) => theme.purple};
    color: white;
    position: relative;
    > p {
        margin-left: 30px;
        position: absolute;
        width: 90%;
        height: 80%;
        word-wrap: break-word;
        font-size: 46px;
    }
`;

export default StyledSideBar;
