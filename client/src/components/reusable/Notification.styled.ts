import styled from 'styled-components';

interface StyledNotificationParam {
    opacity: 0 | 1;
    transitionDuration: number;
    visibility: 'visible' | 'hidden';
}

export const StyledNotificationContent = styled.div`
    flex: 1;
    margin: 6px 2px;
`;

const StyledNotification = styled.div<StyledNotificationParam>`
    text-align: center;
    background: ${({ theme }) => theme.notification_bgcolor};
    border-bottom: 1px solid grey;
    color: white;
    padding: 2px;
    font-size: clamp(13px, 2vw, 15px);
    font-family: 'Segoe UI';
    display: flex;
    opacity: ${(props) => props.opacity};
    transition: opacity;
    transition-duration: ${(props) => props.transitionDuration}s;
    visibility: ${(props) => props.visibility};
`;

export default StyledNotification;
