import { FC, ReactElement } from 'react';
import CloseButtonSvg from '../../assets/svg/CloseButton.svg';
import StyledCloseButton from './CloseBtn.styled';

interface CloseButtonParams {
    onClose: () => void;
    size: number;
    fill?: string;
}

const CloseButton: FC<CloseButtonParams> = ({ onClose, size, fill = '<theme>' }): ReactElement => (
    <StyledCloseButton onClick={onClose} {...{ fill, size }}>
        <CloseButtonSvg />
    </StyledCloseButton>
);

export default CloseButton;
