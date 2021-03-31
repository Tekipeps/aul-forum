import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface AvatarProps {
    src: string;
    className?: string;
    alt: string;
}

interface StyledAvatarProps {
    size?: number;
    src: string;
    alt: string;
}

const Avatar: FC<AvatarProps> = ({ src, className, alt }): ReactElement => <img {...{ className, src, alt }} />;

const StyledAvatar = styled(Avatar)<StyledAvatarProps>`
    --size: ${(props) => (props.size ? `${props.size}px` : '100%')};
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

export default StyledAvatar;
