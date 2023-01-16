import * as yup from 'yup';

export const validateLoginForm = yup.object().shape({
  email: yup
    .string()
    .max(50)
    .min(25)
    .trim()
    .email()
    .required('Email is required'),
  password: yup
    .string()
    .max(50)
    .min(25)
    .trim()
    .required('Password is required'),
});
