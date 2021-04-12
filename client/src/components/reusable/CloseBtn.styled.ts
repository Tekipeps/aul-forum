import styled from 'styled-components';

interface StyledCloseButtonParams {
    fill: string;
    size: number;
}

const StyledCloseButton = styled.div<StyledCloseButtonParams>`
    --size: ${(props) => `${props.size}px`};
    width: var(--size);
    height: var(--size);
    cursor: pointer;
    > svg {
        height: 90%;
        path {
            fill: ${({ theme, fill }) => (fill === '<theme>' ? theme.body.color : fill)};
        }
    }
    :hover {
        transform: scale(1.1);
    }
`;

export default StyledCloseButton;
