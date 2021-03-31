import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface AvatarProps {
    src: string;
    className?: string;
    alt: string;
}

interface StyledAvatarProps {
    size: number;
    src: string;
    alt: string;
}

const Avatar: FC<AvatarProps> = ({ src, className, alt }): ReactElement => <img {...{ className, src, alt }} />;

const StyledAvatar = styled(Avatar)<StyledAvatarProps>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 50%;
    background: grey;
    overflow: hidden;
    display: block;
    text-align: center;
    line-height: ${(props) => props.size}px;
    border: none;
`;

export default StyledAvatar;
