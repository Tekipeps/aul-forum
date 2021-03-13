import { ReactElement, FC, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SideBar from '../reusable/FormSideBar';
import styles from './Register.module.scss';
import authService from '../../services/auth_service';
import { Gender } from '../../types';


export const Register: FC = (): ReactElement => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [matric, setMatric] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState<Gender>(Gender.MALE)
    const history = useHistory();
    const submitRegister = async (event: FormEvent) => {
        event.preventDefault();
        console.log(username, password, gender);
        const response = await authService.register({ username, password, confirmPass, matric, email, gender });
        window.localStorage.setItem('token', response.token);
        history.push('/');
    };
    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>AUL Forum Sign Up</div>
            <div className={styles.formContainer}>
                <div className={styles.formCaption}>
                    W'ere happy to have you sign up for our platform, please enter your information accurately.
                </div>
                <div className={styles.formWrapper}>
                    <form onSubmit={submitRegister}>
                        <div className={styles.inputWrapper}>
                            <input onChange={({ target }) => setMatric(target.value)} value={matric} type='text' placeholder='Matriculation Number(optional)' />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input onChange={({ target }) => setUsername(target.value)} value={username} type='text' placeholder='Username' />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input onChange={({ target }) => setPassword(target.value)} value={password} type='password' placeholder='New Password' />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input onChange={({ target }) => setConfirmPass(target.value)} value={confirmPass} type='password' placeholder='Confirm Password' />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input onChange={({ target }) => setEmail(target.value)} value={email} type='email' placeholder='Email Address' />
                        </div>

                        <div className={styles.genderOption}>
                            <p>Gender</p>
                            <div>
                                <label>
                                    <input type='radio' name='gender'onChange={() => setGender(Gender.MALE)} value={Gender.MALE} />
                                    <span>Male</span>
                                </label>
                                <label>
                                    <input type='radio' name='gender' onChange={() => setGender(Gender.FEMALE)} value={Gender.FEMALE} />
                                    <span>Female</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.buttonHolder}>
                            <button name='signup' type='submit'>
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
    )

}
