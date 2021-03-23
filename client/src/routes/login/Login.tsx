import { ReactElement, FC, FormEvent, useState, useEffect } from 'react';
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
import authService from '../../services/auth_service';

export const Login: FC = (): ReactElement => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();
    const submitLogin = async (event: FormEvent) => {
        event.preventDefault();
        console.log(username, password);
        const response = await authService.login({ username, password });
        window.localStorage.setItem('token', response.token);
        history.push('/home');
    };

    useEffect(() => {
        const token = String(window.localStorage.getItem('token'));
        const validateToken = async (t: string) => {
            const { isValidToken } = await authService.isValidToken(t);
            return isValidToken;
        };
        if (token && validateToken(token)) {
            history.push('/home');
        }
    }, []);

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
