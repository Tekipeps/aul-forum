import styled from 'styled-components';

export const StyledContainer = styled.div`
    max-width: 700px;
    margin: auto;
    min-width: 300px;
    padding: 0px 50px;
`;

export const StyledPost = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    border-right: 1px solid ${({ theme }) => theme.grey};
    border-left: 1px solid ${({ theme }) => theme.grey};
    display: flex;
    flex-direction: row;
`;

export const StyledAvatarWrapper = styled.div`
    padding: 10px 1px 0px 15px;
    margin-right: 10px;
`;

export const StyledContentWrapper = styled.div`
    padding: 1px;
    flex: 1;
    a {
        color: ${({ theme }) => theme.user_color};
    }
`;

export const StyledHead = styled.div`
    padding: 14px 15px 1px 5px;
    > .author,
    > .timestamp {
        display: inline-block;
    }
    > .author {
        color: ${({ theme }) => theme.user_color};
        margin-left: 3px;
        font-family: OpenSans, Arial;
        font-size: clamp(15px, 2.4vw, 19px);
    }

    > .timestamp {
        float: right;
        color: ${({ theme }) => theme.home.grey};
        font-family: OpenSans, Arial;
        font-size: 15px;
    }
`;

export const StyledTopic = styled.div`
    font-size: clamp(20px, 2.5vw, 24px);
    margin: 5px 0px;
    padding: 0px 10px;
    color: ${({ theme }) => theme.body.color};
    font-family: OpenSans, Arial;
`;

export const StyledContent = styled.div`
    padding: 1px 12px;
    font-family: OpenSans, Arial;
    color: ${({ theme }) => theme.home.post_content_color};
    font-size: clamp(16px, 2.2vw, 18px);
    word-spacing: 1px;
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
            font-family: OpenSans, Arial;
        }
    }
    > .viewsCount {
        float: left;
    }
    > .commentsCount {
        float: right;
    }
`;

export const StyledCommentsHeader = styled.div`
    color: ${({ theme }) => theme.user_color};
    padding: 5px 35px;
    border-left: 1px solid ${({ theme }) => theme.grey};
    border-right: 1px solid ${({ theme }) => theme.grey};
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    font-size: 18px;
    font-family: OpenSans;
    background: ${({ theme }) => theme.body.lighter_bgcolor};
`;

export const StyledComments = styled.div`
    border-left: 1px solid ${({ theme }) => theme.grey};
    border-right: 1px solid ${({ theme }) => theme.grey};
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    padding: 10px;
    > div {
        margin: 30px 10px;
        color: ${({ theme }) => theme.body.color};
    }
`;
