import * as yup from 'yup';

export const validateLoginForm = yup.object().shape({
  email: yup
    .string()
    .max(50)
    .min(8)
    .trim()
    .email()
    .required('Email is required'),
  password: yup
    .string()
    .max(20, 'max 20 character')
    .min(8, 'min 8 character')
    .trim()
    .required('Password is required'),
});

export const validateRegisterForm = yup.object().shape({
  name: yup.string().max(50).min(2).trim().required('Name is required'),
  lastName: yup
    .string()
    .max(50)
    .min(2)
    .trim()
    .required('Last name is required'),
  email: yup
    .string()
    .max(50)
    .min(8)
    .trim()
    .email()
    .required('Email is required'),
  password: yup.string().max(50).min(8).trim().required('Password is required'),
  repeatPassword: yup
    .string()
    .max(50)
    .min(8)
    .trim()
    .required('Repeat password is required'),
});
