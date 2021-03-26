import styled from 'styled-components';

export const StyledPost = styled.div`
    border: 1px solid ${({ theme }) => theme.bgtext};
    border-bottom: none;
    display: flex;
    flex-direction: row;
    :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.bgtext};
    }
`;

export const StyledAvatarWrapper = styled.div`
    padding: 10px 1px 0px 15px;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

export const StyledContentWrapper = styled.div`
    padding: 1px;
`;

export const StyledHead = styled.div`
    padding: 14px 15px 1px 5px;
    margin: 0;
    > .author,
    > .timestamp {
        display: inline-block;
    }
    > .author {
        color: blue;
        margin-left: 3px;
        font-family: 'Trebuchet MS';
        font-size: clamp(14px, 2.4vw, 17px);
    }

    > .timestamp {
        float: right;
        color: ${({ theme }) => theme.bgtext};
        font-family: Nunito;
        font-size: clamp(14px, 2vw, 16px);
    }
`;

export const StyledTopic = styled.div`
    font-size: clamp(17px, 2.4vw, 19px);
    margin: 5px 0px;
    padding: 0px 10px;
    color: ${({ theme }) => theme.bgtext};
    font-family: Nunito;
`;

export const StyledContent = styled.div`
    padding: 1px 19px;
    font-family: 'Segoe UI';
    color: ${({ theme }) => theme.bgtext};
    font-size: clamp(14px, 2vw, 15px);
`;

export const StyledFooter = styled.div`
    padding: 10px 30px 10px 6px;
    height: 20px;
    > .viewsCount,
    > .commentsCount {
        display: flex;
        > span {
            color: ${({ theme }) => theme.home.grey};
            font-size: 16px;
            margin: 2px;
            font-family: Nunito;
        }
    }
    > .viewsCount {
        float: left;
    }
    > .commentsCount {
        float: right;
    }
`;
