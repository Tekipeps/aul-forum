import { ReactElement, FC } from 'react';
import ViewsIcon from './assets/Views.svg';
import CommentsIcon from './assets/Comments.svg';
import { StyledPost, StyledAvatarWrapper, StyledContentWrapper, StyledHead, StyledTopic, StyledContent, StyledFooter } from './Post.styled';

interface PostParams {
    authorName: string;
    avatarURL: string;
    timeStamp: string;
    topic: string;
    content: string;
    views: number;
    comments: number;
}

interface PostFooterParams {
    views: number;
    comments: number;
}

const PostFooter: FC<PostFooterParams> = ({ views, comments }): ReactElement => {
    return (
        <StyledFooter>
            <div className='viewsCount'>
                <ViewsIcon />
                <span>{views}</span>
            </div>
            <div className='commentsCount'>
                <CommentsIcon />
                <span>{comments}</span>
            </div>
        </StyledFooter>
    );
};

const Post: FC<PostParams> = ({ authorName, timeStamp, content, topic, comments, views, avatarURL }): ReactElement => {
    const avatar: string = require(`./dummy-assets/${avatarURL}`).default;

    //converts the newline sequence \n to <br/>
    const contentArray: ReactElement[] = content.split('\n').map((line, i) => <div key={i}>{line}</div>);

    return (
        <StyledPost>
            <StyledAvatarWrapper>
                <img src={avatar} alt={authorName} />
            </StyledAvatarWrapper>
            <StyledContentWrapper>
                <StyledHead>
                    <div className='author'>{authorName}</div>
                    <div className='timestamp'>{timeStamp}</div>
                </StyledHead>
                <StyledTopic>{topic}</StyledTopic>
                <StyledContent>{contentArray}</StyledContent>
                <PostFooter views={views} comments={comments} />
            </StyledContentWrapper>
        </StyledPost>
    );
};
export default Post;
