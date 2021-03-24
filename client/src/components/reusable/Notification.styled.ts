import styled from 'styled-components';

interface StyledNotificationParam {
    opacity: 0 | 1;
    transitionDuration: number;
    visibility: 'visible' | 'hidden';
}

export const StyledCloseButton = styled.div`
    cursor: pointer;
    height: 30px;
    margin-right: 30px;
    :hover {
        transform: scale(1.1);
    }
`;

export const StyledNotificationContent = styled.div`
    flex: 1;
    padding: 4px;
    color: ${({ theme }) => theme.bgtext};
`;

const StyledNotification = styled.div<StyledNotificationParam>`
    text-align: center;
    background-color: ${({ theme }) => theme.notification};
    color: white;
    padding: 2px;
    font-size: clamp(14px, 2vw, 16px);
    border-bottom: 1px solid black;
    font-family: 'Segoe UI';
    display: flex;
    opacity: ${(props) => props.opacity};
    transition: opacity;
    transition-duration: ${(props) => props.transitionDuration}s;
    visibility: ${(props) => props.visibility};
`;

export default StyledNotification;
