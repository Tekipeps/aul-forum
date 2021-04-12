import { ReactElement, FC } from 'react';
import ViewsIcon from './assets/Views.svg';
import CommentsIcon from './assets/Comments.svg';
import { StyledPost, StyledAvatarWrapper, StyledContentWrapper, StyledHead, StyledTopic, StyledContent, StyledFooter } from './Post.styled';
import Avatar from '../../components/reusable/Avatar';
import { getRelativeTime } from 'src/utils/Utility';
import { PostType } from 'src/types';
import { Link } from 'react-router-dom';

interface PostFooterParams {
    views?: number;
    comments: number;
}

const PostFooter: FC<PostFooterParams> = ({ views, comments }): ReactElement => (
    <StyledFooter>
        <div className='viewsCount'>
            <ViewsIcon />
            <span>{views || 0}</span>
        </div>
        <div className='commentsCount'>
            <CommentsIcon />
            <span>{comments}</span>
        </div>
    </StyledFooter>
);

const Post: FC<PostType> = ({ author, id, createdAt, content, title, comments, views }): ReactElement => {
    const relativeTime = getRelativeTime(new Date(createdAt).getTime());

    //converts the newline sequence \n to <br/>
    // const contentArray: ReactElement[] = content.split('\n').map((line, i) => <div key={i}>{line}</div>);
    console.log(author.avatar);
    return (
        <StyledPost>
            <StyledAvatarWrapper>
                <Avatar src={author.avatar} alt={author.username} size={50} />
            </StyledAvatarWrapper>
            <StyledContentWrapper>
                <StyledHead>
                    <div className='author'>{author.username}</div>
                    <div className='timestamp'>{relativeTime}</div>
                </StyledHead>
                <StyledTopic>{title}</StyledTopic>
                <StyledContent>
                    {content.length > 340 ? (
                        <p style={{ wordBreak: 'break-word' }}>
                            {content.substring(0, 340)} <Link to={`/posts/${id}`}>...(read more)</Link>
                        </p>
                    ) : (
                        <p style={{ wordBreak: 'break-word' }}>{content}</p>
                    )}
                </StyledContent>
                <PostFooter views={views} comments={comments.length} />
            </StyledContentWrapper>
        </StyledPost>
    );
};
export default Post;
