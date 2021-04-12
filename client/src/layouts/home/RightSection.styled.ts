import styled from 'styled-components';

const StyledRightSection = styled.div`
    min-width: 200px;
    max-width: 300px;
    margin: 12px 25px 12px 4px;
`;

export const StyledCreatePost = styled.div`
    padding: 10px 14px;
    border: 1px solid ${({ theme }) => theme.grey};
    border-radius: 4px;
    > p {
        width: fit-content;
        margin: 10px auto;
        font-family: OpenSans;
        font-size: 14px;
        color: ${({ theme }) => theme.home.post_content_color};
    }
`;

export const StyledCreatePostBtn = styled.div`
    font-family: Nunito;
    padding: 5px;
    background-color: #00f;
    color: white;
    text-align: center;
    border-radius: 14px;
    cursor: pointer;
    transition: background-color;
    transition-duration: 300ms;
    &:hover {
        background-color: #33f;
    }
`;

export default StyledRightSection;
