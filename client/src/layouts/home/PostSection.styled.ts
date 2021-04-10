import styled from 'styled-components';

const StyledPostSection = styled.div`
    max-width: 700px;
    min-width: 350px;
    padding: 10px;
    margin-bottom: 40px;
    margin: 2px auto;
    width: fit-content;
    > h1 {
        color: ${({ theme }) => theme.body.color};
        text-align: center;
        margin: 20px;
    }
`;

export default StyledPostSection;
