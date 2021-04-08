import { FC, ReactElement, useState, useEffect } from 'react';
import CloseBtn from './CloseBtn';
import StyledNotification, { StyledNotificationContent } from './Notification.styled';

interface NotificationParams {
    transitionDuration?: number;
    children: string;
}

const Notification: FC<NotificationParams> = ({ children, transitionDuration }): ReactElement | null => {
    const [visibility, setVisibility] = useState<'visible' | 'hidden'>(children ? 'visible' : 'hidden');
    const [opacity, setOpacity] = useState<0 | 1>(1);
    const defaultTransitionDuration = 0.5;
    const displayDuration = 10;

    //hides the notification after <displayDuration> seconds
    useEffect(() => {
        const timeout = setTimeout(closeNotification, displayDuration * 1000);
        return () => clearTimeout(timeout);
    }, []);

    const closeNotification = (): void => {
        if (!opacity) return;
        setOpacity(0);
        setTimeout(
            () => {
                setVisibility('hidden');
            },
            transitionDuration ? transitionDuration * 1000 : defaultTransitionDuration * 1000
        );
    };

    return (
        <StyledNotification {...{ opacity, transitionDuration: transitionDuration || defaultTransitionDuration, visibility }}>
            <StyledNotificationContent>{children}</StyledNotificationContent>
            <CloseBtn size={30} fill='#fff' onClose={closeNotification} />
        </StyledNotification>
    );
};

export default Notification;
