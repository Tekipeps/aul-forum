import styled from 'styled-components';

interface StyledNotificationParam {
    opacity: 0 | 1;
    transitionDuration: number;
    visibility: 'visible' | 'hidden';
}

export const StyledCloseButton = styled.div`
    cursor: pointer;
    height: 30px;
    margin: auto 30px auto 0px;
    svg {
        height: 90%;
        path {
            fill: white;
        }
    }
    :hover {
        transform: scale(1.1);
    }
`;

export const StyledNotificationContent = styled.div`
    flex: 1;
    margin: 6px 2px;
`;

const StyledNotification = styled.div<StyledNotificationParam>`
    text-align: center;
    background: linear-gradient(#181 7%, #1a1 20%, #1a1 80%, #181 100%);
    color: white;
    padding: 2px;
    font-size: clamp(14px, 2vw, 16px);
    font-family: 'Segoe UI';
    display: flex;
    opacity: ${(props) => props.opacity};
    transition: opacity;
    transition-duration: ${(props) => props.transitionDuration}s;
    visibility: ${(props) => props.visibility};
`;

export default StyledNotification;
