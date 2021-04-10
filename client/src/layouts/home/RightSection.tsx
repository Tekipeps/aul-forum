import { FC, ReactElement } from 'react';
import StyledRightSection, { StyledCreatePostBtn, StyledCreatePost } from './RightSection.styled';

interface RightSectionParams {
    openModal: () => void;
}

const RightSection: FC<RightSectionParams> = ({ openModal }): ReactElement => {
    return (
        <StyledRightSection>
            <StyledCreatePost>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add your thoughts to the community by creating a new post. Please check out our
                    content creation guidelines if you haven't before posting
                </p>
                <StyledCreatePostBtn onClick={openModal}>Create Post</StyledCreatePostBtn>
            </StyledCreatePost>
        </StyledRightSection>
    );
};

export default RightSection;
