import { FC, ReactElement } from 'react';
import CloseButtonSvg from '../../assets/svg/CloseButton.svg';
import StyledCloseButton from './CloseBtn.styled';

interface CloseButtonParams {
    onClick: () => void;
    size: number;
    fill?: string;
}

const CloseButton: FC<CloseButtonParams> = ({ onClick, size, fill = '<theme>' }): ReactElement => (
    <StyledCloseButton {...{ fill, size, onClick }}>
        <CloseButtonSvg />
    </StyledCloseButton>
);

export default CloseButton;
