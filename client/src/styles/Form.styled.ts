import styled from 'styled-components';

export const StyledContainer = styled.div`
    border-radius: 2px;
    position: relative;
    background-color: ${({ theme }) => theme.body.bgcolor};
    display: flex;
    flex-flow: row;
    border: 1px solid ${({ theme }) => theme.home.grey};
    width: fit-content;
    margin: 1px auto;
`;

export const StyledFormContainer = styled.div`
    margin: 10px;
    border-radius: 4px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.home.grey};
    z-index: 1;
`;

export const StyledContainerHeader = styled.div`
    position: relative;
    width: fit-content;
    margin: 1px auto;
    background-color: ${({ theme }) => theme.body.bgcolor};
    z-index: 2;
    font-size: 24px;
    padding: 2px 8px;
    color: ${({ theme }) => theme.home.grey};
    font-family: OpenSans;
`;

export const StyledFormWrapper = styled.div`
    padding: 3px 3px;
    display: inline-block;
`;

export const StyledInputWrapper = styled.div`
    margin-bottom: 8px;
    > input {
        width: 330px;
        padding: 2px 5px;
        margin: 0px;
        height: 30px;
        font-size: 17px;
        padding-left: 6px;
        letter-spacing: 2px;
        background-color: ${({ theme }) => theme.body.bgcolor};
        color: ${({ theme }) => theme.body.color};
        border-radius: 2px 2px 0px 0px;
        border: 1px solid ${({ theme }) => theme.body.color};
        transition-property: border;
        transition-duration: 0.3s;
        font-family: Nunito;
        :focus {
            border: 1px solid grey;
        }
    }

    > .input-error {
        font-family: Nunito;
        font-size: 14px;
        width: fit-content;
        margin: auto;
        color: red;
    }
`;

export const StyledButtonHolder = styled.div`
    display: grid;
    button {
        margin: 0px auto;
        height: 30px;
        font-size: 16px;
        border: none;
        border-radius: 2px;
        margin-bottom: 5px;
        color: white;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;
