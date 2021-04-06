import styled from 'styled-components';

export const StyledPost = styled.div`
    border-top: 1px solid ${({ theme }) => theme.grey};
    border-right: 1px solid ${({ theme }) => theme.grey};
    border-left: 1px solid ${({ theme }) => theme.grey};
    display: flex;
    flex-direction: row;
    :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.grey};
    }
`;

export const StyledAvatarWrapper = styled.div`
    padding: 10px 1px 0px 15px;
    margin-right: 10px;
`;

export const StyledContentWrapper = styled.div`
    padding: 1px;
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
        font-size: clamp(14px, 2.4vw, 17px);
    }

    > .timestamp {
        float: right;
        color: ${({ theme }) => theme.home.grey};
        font-family: OpenSans, Arial;
        font-size: 13px;
    }
`;

export const StyledTopic = styled.div`
    font-size: clamp(17px, 2.2vw, 18px);
    margin: 5px 0px;
    padding: 0px 10px;
    color: ${({ theme }) => theme.body.color};
    font-family: OpenSans, Arial;
`;

export const StyledContent = styled.div`
    padding: 1px 12px;
    font-family: OpenSans, Arial;
    color: ${({ theme }) => theme.home.post_content_color};
    font-size: clamp(14px, 2vw, 15px);
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
