import { ReactElement, FC, useState, FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getInputError } from '../../services/form_validation';
import { register } from '../../state/auth/actions';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import SideBar from '../../components/reusable/FormSideBar';
import { Gender, RegistrationError } from '../../types';

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
    const [errors, setErrors] = useState<RegistrationError>({
        matric: null,
        username: null,
        password: null,
        confirmPassword: null,
        email: null
    });

    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const submitRegister = async (event: FormEvent) => {
        //TODO: prevent user from registering if there are validation errors in the inputs
        event.preventDefault();
        await dispatch(register({ username, password, confirmPass, matric, email, gender }));
    };

    const handleBlur = async (val: string, fieldName: string) => {
        const errorMessage = val.length ? await getInputError(val, fieldName) : null;
        if (errorMessage !== errors[fieldName]) setErrors({ ...errors, [fieldName]: errorMessage });
    };

    if (auth.isLoggedIn) {
        return <Redirect to='/home' />;
    }

    return (
        <StyledRegister>
            <div>
                <StyledFormContainer>
                    <StyledContainerHeader>AUL Forum Sign Up</StyledContainerHeader>
                    <StyledCaption>
                        W'ere happy to have you sign up for our platform, please enter your information accurately.
                    </StyledCaption>
                    <StyledFormWrapper>
                        <form onSubmit={submitRegister}>
                            <StyledInputWrapper>
                                <input
                                    onChange={({ target }) => setMatric(target.value)}
                                    onBlur={({ target }) => handleBlur(target.value, 'matric')}
                                    value={matric.toUpperCase().trim()}
                                    type='text'
                                    placeholder='Matriculation Number(optional)'
                                />
                                <div className='input-error'>{errors.matric}</div>
                            </StyledInputWrapper>
                            <StyledInputWrapper>
                                <input
                                    onChange={({ target }) => setUsername(target.value)}
                                    onBlur={({ target }) => handleBlur(target.value, 'username')}
                                    value={username.trim()}
                                    type='text'
                                    placeholder='Username'
                                />
                                <div className='input-error'>{errors.username}</div>
                            </StyledInputWrapper>
                            <StyledInputWrapper>
                                <input
                                    onChange={({ target }) => setPassword(target.value)}
                                    onBlur={({ target }) => handleBlur(target.value, 'password')}
                                    value={password.trim()}
                                    type='password'
                                    placeholder='New Password'
                                />
                                <div className='input-error'>{errors.password}</div>
                            </StyledInputWrapper>
                            <StyledInputWrapper>
                                <input
                                    onChange={({ target }) => setConfirmPass(target.value)}
                                    onBlur={({ target }) => handleBlur(target.value, 'confirmPassword')}
                                    value={confirmPass.trim()}
                                    type='password'
                                    placeholder='Confirm Password'
                                />
                                <div className='input-error'>{errors.confirmPassword}</div>
                            </StyledInputWrapper>
                            <StyledInputWrapper>
                                <input
                                    onChange={({ target }) => setEmail(target.value)}
                                    onBlur={({ target }) => handleBlur(target.value, 'email')}
                                    value={email.trim()}
                                    type='email'
                                    placeholder='Email Address'
                                />
                                <div className='input-error'>{errors.email}</div>
                            </StyledInputWrapper>

                            <StyledGenderOption>
                                <p>Gender</p>
                                <div>
                                    <label>
                                        <input type='radio' name='gender' onChange={() => setGender(Gender.MALE)} value={Gender.MALE} />
                                        <span>Male</span>
                                    </label>
                                    <label>
                                        <input type='radio' name='gender' onChange={() => setGender(Gender.FEMALE)} value={Gender.FEMALE} />
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
            </div>
            <SideBar>Create an account to have unlimited access and contribution to discussions on AUL's forum</SideBar>
        </StyledRegister>
    );
};
