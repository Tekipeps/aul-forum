import styled from 'styled-components';

export const StyledBackground = styled.div`
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(170, 170, 170, 0.3);
    z-index: 3;
    display: flex;
`;

export const StyledModal = styled.div`
    width: clamp(300px, 60vw, 550px);
    //height: 200px;
    background: ${({ theme }) => theme.body.bgcolor};
    margin: auto auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.home.grey};
    border-radius: 10px;
    > textarea {
        color: ${({ theme }) => theme.body.color};
        background: ${({ theme }) => theme.body.bgcolor};
        font-family: Nunito, OpenSans, Arial;
        padding: 5px 10px;
        resize: none;
        border: 1px solid grey;
        font-size: 18px;
        border-radius: 10px;
        &.title {
            height: 25px;
            margin-bottom: 5px;
        }
        &.content {
            margin-bottom: 10px;
        }
    }

    > .createpost-btn {
        color: ${({ theme }) => theme.body.color};
        background: blue;
        padding: 4px 29px;
        width: fit-content;
        border-radius: 19px;
        font-size: 20px;
        font-family: Nunito;
        margin: 0px 10px 0px auto;
        cursor: pointer;
    }
`;

export const StyledCloseBtnWrapper = styled.div`
    margin-left: auto;
`;
