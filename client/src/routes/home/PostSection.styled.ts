import styled from 'styled-components';

export const StyledSectionDescription = styled.div`
    text-align: center;
    background-color: green;
    color: ${({ theme }) => theme.bgcolor};
    padding: 8px;
    font-size: 17px;
    border-bottom: 1px solid black;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const StyledPostSection = styled.div`
    margin: 0px 0% 0px 20%;
    max-width: 600px;
    min-width: 200px;
    padding: 10px;
`;
