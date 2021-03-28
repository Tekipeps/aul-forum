import * as yup from 'yup';

const MATRIC_REGEX = /AUL\/(SMS|SCI|HMU){1}\/(16|17|18|19|20){1}\/00[0-6]{1}[0-9]{2}/;

const schema = yup.object().shape({
    username: yup.string().min(3, 'Username must exceed ${min} characters').max(9, 'Username can not exceed ${max} characters'),
    email: yup.string().email('Please enter a valid email address'),
    password: yup.string().min(8, 'Password must exceed ${min} characters'),
    confirmPassword: yup.string().min(8, 'Password confirmation must exceed ${min} characters'),
    matric: yup.string().matches(MATRIC_REGEX, 'Please enter a valid matriculation number')
});

interface validationError {
    errors: Array<string>;
}

export const getInputError = async (inputValue: string, fieldName: string): Promise<string | null> => {
    let error = null;

    await schema
        .validate({
            [fieldName]: inputValue
        })
        .catch(({ errors }: validationError) => {
            error = errors[0];
        });

    return error;
};
