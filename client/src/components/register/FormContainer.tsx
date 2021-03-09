import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const FormContainer = (): ReactElement => (
    <div id='form-container'>
        <div id='form-description'>
            W'ere happy to have you sign up for our platform, please enter your information accurately.
        </div>
        <div id='form-div'>
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

                <div id='gender-option'>
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
                <div id='button-holder'>
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
);

export default FormContainer;
