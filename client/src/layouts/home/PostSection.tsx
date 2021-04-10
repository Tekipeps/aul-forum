import { ReactElement, FC, useEffect } from 'react';
import Post from './Post';
import StyledPostSection from './PostSection.styled';
import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import { getAllPosts } from 'src/state/posts/actions';
import { PostType } from '../../types';

const PostSection: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const post = useAppSelector((state) => state.post);
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);
    return (
        <StyledPostSection>
            {post.isLoading ? (
                <h1>loading...</h1>
            ) : post.posts.length ? (
                post.posts.map((p: PostType) => <Post {...p} key={p.id} />)
            ) : (
                <h1>No Posts on the forum</h1>
            )}
        </StyledPostSection>
    );
};

export default PostSection;
