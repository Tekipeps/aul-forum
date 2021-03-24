import { FC, ReactElement, useState } from 'react';
import StyledNotification, { StyledNotificationContent, StyledCloseButton } from './Notification.styled';
import CloseButtonSvg from '../../assets/svg/CloseButton.svg';

interface NotificationParams {
    children: string;
}

interface CloseButtonParams {
    handleClick: () => void;
}

const CloseButton: FC<CloseButtonParams> = ({ handleClick }): ReactElement => (
    <StyledCloseButton onClick={handleClick}>
        <CloseButtonSvg />
    </StyledCloseButton>
);

const Notification: FC<NotificationParams> = ({ children }): ReactElement | null => {
    const [visibility, setVisibility] = useState<'visible' | 'hidden'>('visible');
    const [opacity, setOpacity] = useState<0 | 1>(1);
    const transitionDuration = 0.7;

    const handleClick = (): void => {
        if (!opacity) return;
        setOpacity(0);
        setTimeout(() => {
            setVisibility('hidden');
        }, transitionDuration * 1000);
    };

    return (
        <StyledNotification {...{ opacity, transitionDuration, visibility }}>
            <StyledNotificationContent>{children}</StyledNotificationContent>
            <CloseButton {...{ handleClick }} />
        </StyledNotification>
    );
};

export default Notification;
