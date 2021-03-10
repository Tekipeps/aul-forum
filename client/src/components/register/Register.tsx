import React, { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../reusable/FormSideBar';
import './Register.scss';
import '../../scss/form.scss';

export const Register: FC = (): ReactElement => (
    <div className='container register-page'>
        <div className='form-header'>AUL Forum Sign Up</div>
        <div className='form-container'>
            <div className='form-description'>
                W'ere happy to have you sign up for our platform, please enter your information accurately.
            </div>
            <div className='form-wrapper'>
                <form>
                    <div className='text-input'>
                        <input name='matric-no' type='text' placeholder='Matriculation Number' />
                    </div>
                    <div className='text-input'>
                        <input name='username' type='text' placeholder='Username' />
                    </div>
                    <div className='text-input short'>
                        <input name='password' type='text' placeholder='New Password' />
                    </div>
                    <div className='text-input short'>
                        <input name='confirmpassword' type='password' placeholder='Confirm Password' />
                    </div>
                    <div className='text-input'>
                        <input name='email' type='email' placeholder='Email Address(optional)' />
                    </div>

                    <div className='gender-option'>
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
                    <div className='button-holder'>
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
