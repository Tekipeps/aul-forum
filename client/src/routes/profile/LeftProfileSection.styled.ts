import styled from 'styled-components';

const StyledLeftSection = styled.div`
    margin-left: 20px;
    min-width: 200px;
    max-width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const StyledAvatarWrapper = styled.div`
    margin: 50px auto 0px auto;
    width: 60%;
`;

export const StyledUsername = styled.div`
    font-size: 19px;
    margin: 20px auto;
    font-family: OpenSans;
    color: ${({ theme }) => theme.body.color};
`;

export const StyledBasicInfo = styled.div`
    font-family: OpenSans, Nunito, Arial;
    display: flex;
    margin-top: 10px;
    color: ${({ theme }) => theme.home.post_content_color};
    span {
        margin: 0px auto;
        font-size: 14px;
        cursor: pointer;
        :hover {
            color: ${({ theme }) => theme.user_color};
        }
    }
`;

export const StyledBio = styled.div`
    max-width: 250px;
    margin: 30px auto;
    font-size: 18px;
    border-radius: 4px;
    font-family: 'Segoe UI', OpenSans, Arial;
    font-style: italic;
    color: ${({ theme }) => theme.home.post_content_color};
`;

export default StyledLeftSection;
