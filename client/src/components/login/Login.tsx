import React, { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../reusable/FormSideBar';
import './Login.scss';
import '../../scss/form.scss';
import Logo from '../../assets/form-images/logo.png';

export const Login: FC = (): ReactElement => (
    <div className='container login-page'>
        <div className='form-header'>AUL Forum Login</div>
        <div className='form-container'>
            <div className='logo-image'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='form-wrapper'>
                <form>
                    <div className='text-input'>
                        <input name='matric-no' type='text' placeholder='Matric Number' />
                    </div>
                    <div className='text-input'>
                        <input name='password' type='password' placeholder='Password' />
                    </div>
                    <div className='button-holder'>
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
