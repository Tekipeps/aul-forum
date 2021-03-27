import { ReactElement, FC, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { register } from 'src/state/auth/actions';
import { useAppDispatch, useAppSelector } from 'src/state/hooks';
import SideBar from '../../components/reusable/FormSideBar';
import { Gender } from '../../types';

import {
    StyledRegister,
    StyledContainerHeader,
    StyledFormContainer,
    StyledCaption,
    StyledFormWrapper,
    StyledGenderOption,
    StyledRegisterButtonHolder,
    StyledInputWrapper
} from './Register.styled';

export const RegisterPage: FC = (): ReactElement => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [matric, setMatric] = useState<string>('');
    const [confirmPass, setConfirmPass] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<Gender>(Gender.MALE);

    const history = useHistory();
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const submitRegister = async (event: FormEvent) => {
        event.preventDefault();
        await dispatch(register({ username, password, confirmPass, matric, email, gender }));
        auth.isLoggedIn && history.push('/home');
    };

    return (
        <StyledRegister>
            <StyledContainerHeader>AUL Forum Sign Up</StyledContainerHeader>
            <StyledFormContainer>
                <StyledCaption>
                    W'ere happy to have you sign up for our platform, please enter your information accurately.
                </StyledCaption>
                <StyledFormWrapper>
                    <form onSubmit={submitRegister}>
                        <StyledInputWrapper>
                            <input
                                onChange={({ target }) => setMatric(target.value)}
                                value={matric}
                                type='text'
                                placeholder='Matriculation Number(optional)'
                            />
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <input
                                onChange={({ target }) => setUsername(target.value)}
                                value={username}
                                type='text'
                                placeholder='Username'
                            />
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <input
                                onChange={({ target }) => setPassword(target.value)}
                                value={password}
                                type='password'
                                placeholder='New Password'
                            />
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <input
                                onChange={({ target }) => setConfirmPass(target.value)}
                                value={confirmPass}
                                type='password'
                                placeholder='Confirm Password'
                            />
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <input
                                onChange={({ target }) => setEmail(target.value)}
                                value={email}
                                type='email'
                                placeholder='Email Address'
                            />
                        </StyledInputWrapper>

                        <StyledGenderOption>
                            <p>Gender</p>
                            <div>
                                <label>
                                    <input
                                        type='radio'
                                        name='gender'
                                        onChange={() => setGender(Gender.MALE)}
                                        value={Gender.MALE}
                                    />
                                    <span>Male</span>
                                </label>
                                <label>
                                    <input
                                        type='radio'
                                        name='gender'
                                        onChange={() => setGender(Gender.FEMALE)}
                                        value={Gender.FEMALE}
                                    />
                                    <span>Female</span>
                                </label>
                            </div>
                        </StyledGenderOption>
                        <StyledRegisterButtonHolder>
                            <button name='signup' type='submit'>
                                Sign Up
                            </button>
                            <button name='signup-later' type='button'>
                                <Link to='/'>Sign Up Later</Link>
                            </button>
                        </StyledRegisterButtonHolder>
                    </form>
                </StyledFormWrapper>
            </StyledFormContainer>
            <SideBar>Create an account to have unlimited access and contribution to content from AUL's forum</SideBar>
        </StyledRegister>
    );
};
