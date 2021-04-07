import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface AvatarProps {
    src: string;
    alt: string;
    size: number;
    admin?: boolean;
}

interface StyledAvatarProps {
    size: number;
}

const StyledAvatar = styled.img<StyledAvatarProps>`
    --size: ${(props) => `${props.size}px`};
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    //if the alt ever displays
    background: #444;
    overflow: hidden;
    display: block;
    text-align: center;
    line-height: var(--size);
    color: white;
    font-size: 14px;
`;

const StyledModBadge = styled.div`
    color: white;
    width: fit-content;
    position: relative;
    top: -15px;
    left: 60%;
    padding: 1px 6px;
    border-radius: 15px;
    font-family: Nunito, OpenSans, Arial;
    font-size: 12px;
    border: 1px solid #aaa;
    background-color: ${({ theme }) => theme.purple};
`;

const Avatar: FC<AvatarProps> = ({ src, size, alt, admin = false }): ReactElement => (
    <>
        <StyledAvatar {...{ src, alt, size }} />
        {admin && <StyledModBadge>admin</StyledModBadge>}
    </>
);

export default Avatar;
