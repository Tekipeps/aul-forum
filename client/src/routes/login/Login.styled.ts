import styled from 'styled-components';
import {
    StyledContainer,
    StyledContainerHeader,
    StyledFormContainer,
    StyledFormWrapper,
    StyledInputWrapper,
    StyledButtonHolder
} from '../../styles/Form.styled';

const StyledLogin = styled(StyledContainer)`
    top: 50px;
`;

const StyledLogo = styled.div`
    margin: 20px auto 20px auto;
    position: relative;
    height: 120px;
    width: 100px;
    > img {
        width: 100%;
        height: 100%;
    }
`;

const StyledLoginButtonHolder = styled(StyledButtonHolder)`
    > button {
        &[name='login'] {
            width: 330px;
            background-color: ${({ theme }) => theme.form_purple_btn};
            cursor: pointer;
        }

        &[name='register'] {
            background: none;
            > a {
                color: ${({ theme }) => theme.blue};
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
`;

export {
    StyledLogin,
    StyledContainerHeader,
    StyledFormContainer,
    StyledFormWrapper,
    StyledLogo,
    StyledLoginButtonHolder,
    StyledInputWrapper
};
