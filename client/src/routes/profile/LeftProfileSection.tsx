import { FC, ReactElement } from 'react';
import Avatar from '../../components/reusable/Avatar';
import StyledLeftSection, { StyledUsername, StyledBasicInfo, StyledAvatarWrapper, StyledBio } from './LeftProfileSection.styled';
import TekipepsAvatar from '../../assets/avatars/team/tekipeps.jpeg';

const LeftSection: FC = (): ReactElement => {
    return (
        <StyledLeftSection>
            <StyledAvatarWrapper>
                <Avatar src={TekipepsAvatar} size={130} alt='tekipeps' admin />
            </StyledAvatarWrapper>
            <StyledUsername>Tekipeps</StyledUsername>
            <StyledBasicInfo>
                <span>27 posts</span>
                <span>57 followers</span>
                <span>19 following</span>
            </StyledBasicInfo>
            <StyledBio> Hi im tekena solomon, An aul student studying computer science, I contributed to this wonderful app.</StyledBio>
        </StyledLeftSection>
    );
};

export default LeftSection;
