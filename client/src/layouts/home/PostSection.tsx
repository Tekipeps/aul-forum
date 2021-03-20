import { ReactElement, FC } from 'react';
import Post from './Post';
import dummyData from './dummy-assets/dummyPostData.json';
import StyledPostSection from './PostSection.styled';

const PostSection: FC = (): ReactElement => {
    return (
        <StyledPostSection>
            {dummyData.map((data, i) => (
                <Post {...data} key={i} />
            ))}
        </StyledPostSection>
    );
};

export default PostSection;
