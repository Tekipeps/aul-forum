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
        transform: rotate(-25deg);
        color: red;
    }
`;

export const StyledMessage = styled.div`
    font-size: 1.3rem;
    text-align: center;
    color: ${({ theme }) => theme.bgtext};
`;

export const Styledbackground = styled.div`

       background:linear-gradient(90deg, rgba(47,54,64,1) 23%, rgba(24,27,32,1) 100%);
`;

export default Styled404;
