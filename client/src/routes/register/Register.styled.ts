import styled from 'styled-components';
import {
    StyledContainer,
    StyledContainerHeader,
    StyledFormContainer,
    StyledFormWrapper,
    StyledInputWrapper,
    StyledButtonHolder
} from '../../styles/Form.styled';
import genderOptionBG from '../../assets/images/green-tick.jpg';

const StyledRegister = styled(StyledContainer)`
    top: 100px;
`;

const StyledCaption = styled.div`
    color: ${({ theme }) => theme.bgtext};
    padding: 10px;
    font-family: Advent Pro;
    font-size: 18px;
    margin: auto;
    width: 300px;
`;

const StyledRegisterButtonHolder = styled(StyledButtonHolder)`
    > button {
        &[name='signup'] {
            width: 330px;
            background-color: ${({ theme }) => theme.form.purpleBtn};
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
        font-size: 19px;
    }
    > div {
        margin: 0px 0px 10px 10px;
    }
    label {
        display: inline-block;
        margin: 0px 3px;
        color: ${({ theme }) => theme.bgtext};
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
                border-color: gray;
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
