import styled from 'styled-components';

const Styled404 = styled.div`
    font-size: 16rem;
    margin: 50px auto 10px auto;
    width: fit-content;
    font-family: Nunito;
    font-weight: 600;
    display: flex;
    div:nth-child(1) {
        transform: rotate(20deg);
        color: red;
    }
    div:nth-child(2) {
        transform: rotate(-5deg);
        color: grey;
    }
    div:nth-child(3) {
        transform: rotate(-10deg);
        color: red;
    }
`;

export const StyledMessage = styled.div`
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.bgtext};
`;

export default Styled404;
