import styled from 'styled-components';

export const StyledPost = styled.div`
    margin-bottom: 3px;
    border: 1px solid ${({ theme }) => theme.bgtext};
    display: flex;
    flex-direction: row;
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
        font-size: 17px;
        color: blue;
        font-family: Nunito;
        margin-left: 3px;
    }

    > .timestamp {
        float: right;
        color: ${({ theme }) => theme.bgtext};
        font-family: 'Trebuchet MS';
    }
`;

export const StyledTopic = styled.div`
    font-size: 17px;
    margin: 5px 0px;
    padding: 0px 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.home.grey};
    font-family: 'Trebuchet MS';
`;

export const StyledContent = styled.div`
    padding: 1px 19px;
    font-family: Nunito;
    color: ${({ theme }) => theme.bgtext};
`;

export const StyledFooter = styled.div`
    padding: 10px 30px 10px 6px;
    height: 20px;
    > .viewsCount,
    > .commentsCount {
        display: inline-block;
        display: flex;
        flex-direction: row;
        > span {
            color: ${({ theme }) => theme.home.grey};
            font-size: 16px;
            margin: 2px;
            display: inline-block;
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
