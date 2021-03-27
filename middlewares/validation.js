const yup = require('yup');
const validate = require('../utils/validate');
const { MATRIC_REGEX, GENDER_REGEX } = require('../utils/globals');

const register = validate({
    shape: {
        username: yup.string().min(3).max(9).required('Username is required'),
        email: yup.string().email().required('Email is required'),
        password: yup.string().min(8).required('Password is required'),
        confirmPass: yup.string().test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
        gender: yup.string().matches(GENDER_REGEX).required('Gender is required'),
        matric: yup.string().matches(MATRIC_REGEX).notRequired()
    }
});

const login = validate({
    shape: {
        username: yup.string().min(3, 'User not available').max(9).required('Username is required'),
        password: yup.string().required('Password is required')
    }
});

const createUser = validate({
    username: yup.string().min(3).max(9).required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(8).required('Password is required'),
    confirmPass: yup.string().test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
    }),
    gender: yup.string().matches(GENDER_REGEX).required('Gender is required'),
    matric: yup.string().matches(MATRIC_REGEX)
});

module.exports = {
    register,
    login,
    createUser
};
