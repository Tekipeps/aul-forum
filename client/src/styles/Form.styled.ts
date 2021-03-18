import styled from 'styled-components';

export const StyledContainer = styled.div`
    border-radius: 2px;
    position: absolute;
    background-color: ${({ theme }) => theme.bgcolor};
    display: flex;
    flex-flow: row;
    border: 1px solid ${({ theme }) => theme.purple};
    left: 50%;
    transform: translateX(-50%);
`;

export const StyledContainerHeader = styled.div`
    position: absolute;
    top: 0px;
    left: 50px;
    background-color: ${({ theme }) => theme.bgcolor};
    z-index: 2;
    font-size: 29px;
    padding: 5px 5px;
    color: ${({ theme }) => theme.bgtext};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const StyledFormContainer = styled.div`
    margin: 20px;
    position: absolute;
    padding-top: 30px;
    padding-left: 0px;
    border-radius: 4px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.purple};
    z-index: 1;
`;

export const StyledFormWrapper = styled.div`
    padding: 3px 3px;
    display: inline-block;
`;

export const StyledInputWrapper = styled.div`
    > input {
        width: 330px;
        padding: 2px 5px;
        margin: 5px 2px 5px 2px;
        height: 35px;
        font-size: 18px;
        padding-left: 6px;
        letter-spacing: 2px;
        background-color: ${({ theme }) => theme.bgcolor};
        color: ${({ theme }) => theme.bgtext};
        border-radius: 2px 2px 0px 0px;
        border: 1px solid ${({ theme }) => theme.purple};
        transition-property: border;
        transition-duration: 0.5s;
        &:focus {
            border: 1px solid grey;
        }
    }
`;

export const StyledButtonHolder = styled.div`
    display: grid;
    button {
        margin: 0px auto;
        padding: 0;
        height: 30px;
        font-size: 18px;
        border: none;
        border-radius: 2px;
        color: white;
        margin-bottom: 5px;
        font-family: 'Times New Roman', Times, serif;
    }
`;
