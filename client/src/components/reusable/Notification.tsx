import { FC, ReactElement, useState } from 'react';
import StyledNotification, { StyledNotificationContent, StyledCloseButton } from './Notification.styled';
import CloseButtonSvg from '../../assets/svg/CloseButton.svg';

interface NotificationParams {
    transitionDuration?: number;
}

interface CloseButtonParams {
    handleClick: () => void;
}

const CloseButton: FC<CloseButtonParams> = ({ handleClick }): ReactElement => (
    <StyledCloseButton onClick={handleClick}>
        <CloseButtonSvg />
    </StyledCloseButton>
);

const Notification: FC<NotificationParams> = ({ children, transitionDuration }): ReactElement | null => {
    const [visibility, setVisibility] = useState<'visible' | 'hidden'>(children ? 'visible' : 'hidden');
    const [opacity, setOpacity] = useState<0 | 1>(1);
    const defaultTransition = 0.7;

    const handleClick = (): void => {
        if (!opacity) return;
        setOpacity(0);
        setTimeout(
            () => {
                setVisibility('hidden');
            },
            transitionDuration ? transitionDuration * 1000 : defaultTransition
        );
    };

    return (
        <StyledNotification {...{ opacity, transitionDuration: transitionDuration || defaultTransition, visibility }}>
            <StyledNotificationContent>{children}</StyledNotificationContent>
            <CloseButton {...{ handleClick }} />
        </StyledNotification>
    );
};

export default Notification;
