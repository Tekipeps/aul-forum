import { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../reusable/FormSideBar';
import styles from './Login.module.scss';
import Logo from '../../assets/form-images/logo.png';

export const Login: FC = (): ReactElement => (
    <div className={styles.container}>
        <div className={styles.containerHeader}>AUL Forum Login</div>
        <div className={styles.formContainer}>
            <div className={styles.logoImage}>
                <img src={Logo} alt='logo' />
            </div>
            <div className={styles.formWrapper}>
                <form>
                    <div className={styles.inputWrapper}>
                        <input name='matric-no' type='text' placeholder='Matric Number' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input name='password' type='password' placeholder='Password' />
                    </div>
                    <div className={styles.buttonHolder}>
                        <button name='login' type='button'>
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
