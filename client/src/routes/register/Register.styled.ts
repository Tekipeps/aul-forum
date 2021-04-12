import styled from 'styled-components';
import {
    StyledContainer,
    StyledContainerHeader,
    StyledFormContainer,
    StyledFormWrapper,
    StyledInputWrapper,
    StyledButtonHolder
} from '../../styles/Form.styled';
import genderOptionBG from '../../assets/images/green-tick.png';

const StyledRegister = styled(StyledContainer)`
    top: 30px;
`;

const StyledCaption = styled.div`
    color: ${({ theme }) => theme.body.color};
    padding: 10px;
    font-family: OpenSans;
    font-size: 15px;
    margin: auto;
    width: 300px;
`;

const StyledRegisterButtonHolder = styled(StyledButtonHolder)`
    > button {
        &[name='signup'] {
            width: 330px;
            background-color: ${({ theme }) => theme.form_purple_btn};
            cursor: pointer;
        }
        &[name='signup-later'] {
            background: none;
            a {
                color: ${({ theme }) => theme.blue};
            }
        }
    }
`;

const StyledGenderOption = styled.div`
    margin-left: 10px;
    > p {
        margin: 5px 0px;
        color: ${({ theme }) => theme.home.grey};
        font-size: 17px;
        font-family: Nunito;
    }
    > div {
        margin: 0px 0px 10px 10px;
    }
    label {
        display: inline-block;
        margin: 0px 3px;
        color: ${({ theme }) => theme.body.color};
        font-family: Nunito;
        > input[type='radio'] {
            display: none;
            + span::before {
                content: '';
                display: inline-block;
                vertical-align: middle;
                width: 1rem;
                height: 1rem;
                margin-right: 0.3rem;
                border-radius: 10%;
                border-style: solid;
                border-width: 0.1rem;
                border-color: grey;
            }
        }
        > input[type='radio']:checked + span::before {
            background-image: url(${genderOptionBG});
            background-size: 100% 80%;
            border-color: green;
            background-repeat: no-repeat;
            background-position: center;
            background-color: none;
        }
    }
`;

export {
    StyledRegister,
    StyledContainerHeader,
    StyledFormContainer,
    StyledCaption,
    StyledFormWrapper,
    StyledGenderOption,
    StyledRegisterButtonHolder,
    StyledInputWrapper
};
