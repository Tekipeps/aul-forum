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

export const LoginPage: FC = (): ReactElement => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const submitLogin = async (event: FormEvent) => {
        event.preventDefault();
        await dispatch(login({ username, password }));
        auth.isLoggedIn && history.push('/home');
    };

    // TODO: add notification component to display error message in auth.error.err
    return (
        <StyledLogin>
            <StyledContainerHeader>AUL Forum Login</StyledContainerHeader>
            <StyledFormContainer>
                <StyledLogo>
                    <img src={anchorLogo} alt='logo' />
                </StyledLogo>
                <StyledFormWrapper>
                    <form onSubmit={submitLogin}>
                        <StyledInputWrapper>
                            <input
                                value={username}
                                onChange={({ target }) => setUsername(target.value)}
                                placeholder='Username'
                            />
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <input
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                                type='password'
                                placeholder='Password'
                            />
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
            <SideBar>Keep up with news and discussions related to AUL from anywhere, at anytime</SideBar>
        </StyledLogin>
    );
};
