import { ReactElement, FC } from 'react';
import ViewsIcon from '../../layouts/home/assets/Views.svg';
import CommentsIcon from '../../layouts/home/assets/Comments.svg';
import {
    StyledCommentsHeader,
    StyledContainer,
    StyledPost,
    StyledAvatarWrapper,
    StyledContentWrapper,
    StyledHead,
    StyledTopic,
    StyledContent,
    StyledFooter,
    StyledComments
} from './PostPage.styled';
import Avatar from '../../components/reusable/Avatar';

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

export const PostPage: FC = (): ReactElement => {
    //TODO: fetch actual post data with its post id
    const authorName = 'Mark';
    const timeStamp = '5 minutes ago';
    const title = 'Happy birthday prof.dayo';
    const content =
        'Happy birthday to my lecturer prof dayo who turned 44 today. Really proud of you Sir, now... give me back those 3 marks you failed to give in cmp111 dammit you son of a...';
    const views = 12;
    const commentsLength = 14;

    return (
        <StyledContainer>
            <StyledPost>
                <StyledAvatarWrapper>
                    <Avatar src={'lol'} alt={authorName} size={90} />
                </StyledAvatarWrapper>
                <StyledContentWrapper>
                    <StyledHead>
                        <div className='author'>{authorName}</div>
                        <div className='timestamp'>{timeStamp}</div>
                    </StyledHead>
                    <StyledTopic>{title}</StyledTopic>
                    <StyledContent>
                        <p>{content}</p>
                    </StyledContent>
                    <PostFooter views={views} comments={commentsLength} />
                </StyledContentWrapper>
            </StyledPost>
            <StyledCommentsHeader>14 comments</StyledCommentsHeader>
            <StyledComments>
                <div>Wait what?</div>
                <div>You complemented... then insulted him??</div>
                <div>Idk if this user is trolling</div>
            </StyledComments>
        </StyledContainer>
    );
};
