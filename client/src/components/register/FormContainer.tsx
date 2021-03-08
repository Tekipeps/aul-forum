import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const FormContainer = (): ReactElement => (
    <div id='form-container'>
        <div id='form-description'>
            W'ere happy to have you sign up for our platform, please enter your information accurately.
        </div>
        <form id='signup-form'>
            <input name='matric-no' type='text' placeholder='Matriculation Number' className='long' />
            <input name='username' type='text' placeholder='Username' className='long' />
            <input name='password' type='text' placeholder='New Password' className='short' />
            <input name='confirmpassword' type='password' placeholder='Confirm Password' className='short' />
            <input name='email' type='email' placeholder='Email Address(optional)' className='long' />
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

            <button name='signup' type='button'>
                Sign Up
            </button>
            <button name='signup-later' type='button'>
                <Link to='/'>Sign Up Later</Link>
            </button>
            <button name='team-link' type='button'>
                <Link to='/team'>Want to meet our team?</Link>
            </button>
        </form>
    </div>
);

export default FormContainer;
