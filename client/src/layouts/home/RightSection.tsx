import { FC, ReactElement } from 'react';
import StyledRightSection, { StyledCreatePostBtn, StyledCreatePost } from './RightSection.styled';
import ParentResizeListener from '../../components/reusable/ParentResizeListener';

interface RightSectionParams {
    openModal: () => void;
}

const RightSection: FC<RightSectionParams> = ({ openModal }): ReactElement => {
    return (
        <ParentResizeListener>
            <StyledRightSection>
                <StyledCreatePost>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add your thoughts to the community by creating a new post. Posting of sensitive
                        or inappropriate content is strictly disallowed!
                    </p>
                    <StyledCreatePostBtn onClick={openModal}>Create Post</StyledCreatePostBtn>
                </StyledCreatePost>
            </StyledRightSection>
        </ParentResizeListener>
    );
};

export default RightSection;
