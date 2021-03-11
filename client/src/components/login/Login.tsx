import React, { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../reusable/FormSideBar';
import styles from './Login.module.scss';
import Logo from '../../assets/form-images/logo.png';

export const Login: FC = (): ReactElement => (
<<<<<<< HEAD
    <div className={styles.container}>
        <div className={styles.containerHeader}>AUL Forum Login</div>
        <div className={styles.formContainer}>
            <div className={styles.logoImage}>
                <img src={Logo} alt='logo' />
            </div>
            <div className={styles.formWrapper}>
=======
    <div className='container login-page'>
        <div className='form-header'>AUL Forum Login</div>
        <div className='form-container'>
            <div className='logo-image'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='form-wrapper'>
>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0
                <form>
                    <div className={styles.inputWrapper}>
                        <input name='matric-no' type='text' placeholder='Matric Number' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input name='password' type='password' placeholder='Password' />
                    </div>
<<<<<<< HEAD
                    <div className={styles.buttonHolder}>
=======
                    <div className='button-holder'>
>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0
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
