import { ReactElement, FC, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SideBar from '../../components/reusable/FormSideBar';
import styles from './Login.module.scss';
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

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>AUL Forum Login</div>
            <div className={styles.formContainer}>
                <div className={styles.logoImage}>
                    <img src={anchorLogo} alt='logo' />
                </div>
                <div className={styles.formWrapper}>
                    <form onSubmit={submitLogin}>
                        <div className={styles.inputWrapper}>
                            <input
                                value={username}
                                onChange={({ target }) => setUsername(target.value)}
                                placeholder='Username'
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                                type='password'
                                placeholder='Password'
                            />
                        </div>
                        <div className={styles.buttonHolder}>
                            <button name='login' type='submit'>
                                Login
                            </button>

                            <button name='register'>
                                <Link to='/register'>Dont have an account?</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SideBar>Keep up with news and discussions related to AUL from anywhere, at anytime</SideBar>
        </div>
    );
};
