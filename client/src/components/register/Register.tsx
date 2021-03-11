import React, { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../reusable/FormSideBar';
import styles from './Register.module.scss';

export const Register: FC = (): ReactElement => (
    <div className={styles.container}>
        <div className={styles.containerHeader}>AUL Forum Sign Up</div>
        <div className={styles.formContainer}>
            <div className={styles.formCaption}>
                W'ere happy to have you sign up for our platform, please enter your information accurately.
            </div>
            <div className={styles.formWrapper}>
                <form>
                    <div className={styles.inputWrapper}>
                        <input name='matric-no' type='text' placeholder='Matriculation Number' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input name='username' type='text' placeholder='Username' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input name='password' type='text' placeholder='New Password' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input name='confirmpassword' type='password' placeholder='Confirm Password' />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input name='email' type='email' placeholder='Email Address(optional)' />
                    </div>

                    <div className={styles.genderOption}>
                        <p>Gender</p>
                        <div>
                            <label>
                                <input type='radio' name='gender' value='value' />
                                <span>Male</span>
                            </label>
                            <label>
                                <input type='radio' name='gender' value='another-value' />
                                <span>Female</span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.buttonHolder}>
                        <button name='signup' type='button'>
                            Sign Up
                        </button>
                        <button name='signup-later' type='button'>
                            <Link to='/'>Sign Up Later</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <SideBar>Create an account to have unlimited access and contribution to content from AUL's forum</SideBar>
    </div>
);
