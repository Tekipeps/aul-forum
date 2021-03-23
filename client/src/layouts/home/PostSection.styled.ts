import styled from 'styled-components';

export const StyledSectionDescription = styled.div`
    text-align: center;
    background-color: green;
    color: white;
    padding: 8px;
    font-size: clamp(14px, 2vw, 16px);
    border-bottom: 1px solid black;
    font-family: 'Segoe UI';
`;

const StyledPostSection = styled.div`
    max-width: 600px;
    min-width: 350px;
    padding: 10px;
`;

export default StyledPostSection;
