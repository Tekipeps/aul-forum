import React, { ReactElement } from 'react';
import FormContainer from './FormContainer';
import SideBar from '../reusable/FormSideBar';
import './Register.scss';
import '../../scss/form.scss';

export const Register = (): ReactElement => (
    <div id='container'>
        <div id='form-header'>AUL Forum Sign Up</div>
        <FormContainer />
        <SideBar
            content="Create an account to have unlimited access and contribution to content
        from AUL's forum"
        />
    </div>
);
