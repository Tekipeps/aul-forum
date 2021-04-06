import { ReactElement, FC, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SideBar from '../../components/reusable/FormSideBar';
import {
    StyledLogin,
    StyledContainerHeader,
    StyledFormContainer,
    StyledFormWrapper,
    StyledLogo,
    StyledLoginButtonHolder,
    StyledInputWrapper
} from './Login.styled';
import anchorLogo from '../../assets/images/anchor-logo.png';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { login } from '../../state/auth/actions';
import { getInputError } from '../../services/form_validation';
import { LoginError } from '../../types';

export const LoginPage: FC = (): ReactElement => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<LoginError>({
        username: null,
        password: null
    });

    const history = useHistory();
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const submitLogin = async (event: FormEvent) => {
        //TODO: prevent user from logging in if there are validation errors in inputs
        event.preventDefault();
        await dispatch(login({ username, password }));
        auth.isLoggedIn && history.push('/home');
    };

    const handleBlur = async (val: string, fieldName: string) => {
        const errorMessage = val.length ? await getInputError(val, fieldName) : null;
        if (errorMessage !== errors[fieldName]) setErrors({ ...errors, [fieldName]: errorMessage });
    };

    // TODO: add notification component to display error message in auth.error.err
    return (
        <StyledLogin>
            <div>
                <StyledFormContainer>
                    <StyledContainerHeader>AUL Forum Login</StyledContainerHeader>
                    <StyledLogo>
                        <img src={anchorLogo} alt='logo' />
                    </StyledLogo>
                    <StyledFormWrapper>
                        <form onSubmit={submitLogin}>
                            <StyledInputWrapper>
                                <input
                                    value={username}
                                    onChange={({ target }) => setUsername(target.value)}
                                    onBlur={({ target }) => handleBlur(target.value, 'username')}
                                    type='text'
                                    placeholder='Username'
                                />
                                <div className='input-error'>{errors.username}</div>
                            </StyledInputWrapper>
                            <StyledInputWrapper>
                                <input
                                    value={password}
                                    onChange={({ target }) => setPassword(target.value)}
                                    onBlur={({ target }) => handleBlur(target.value, 'password')}
                                    type='password'
                                    placeholder='Password'
                                />
                                <div className='input-error'>{errors.password}</div>
                            </StyledInputWrapper>
                            <StyledLoginButtonHolder>
                                <button name='login' type='submit'>
                                    Login
                                </button>

                                <button name='register'>
                                    <Link to='/register'>Dont have an account?</Link>
                                </button>
                            </StyledLoginButtonHolder>
                        </form>
                    </StyledFormWrapper>
                </StyledFormContainer>
            </div>
            <SideBar>Keep up with news and discussions related to AUL from anywhere, at anytime</SideBar>
        </StyledLogin>
    );
};
