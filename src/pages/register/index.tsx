import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import { useNotification } from '../../context/notificatin.context';
import { RegisterType } from '../../types/index';
import { validateRegisterForm } from '../../utils/validateForm';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const RegisterPage: FC = function () {
  const { getSuccess } = useNotification();
  const msgSucces: string = 'Register success';

  const formik = useFormik<RegisterType>({
    initialValues: initialState,
    validationSchema: validateRegisterForm,
    onSubmit: (values: RegisterType) => {
      getSuccess(JSON.stringify(msgSucces));
    },
  });

  return (
    <Container sx={{ mt: 4, mb: 2 }} maxWidth={'sm'}>
      <Grid
        container
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ height: '100vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography margin={2} textAlign={'center'} variant={'h5'}>
              Register
            </Typography>
            <Box noValidate component={'form'} onSubmit={formik.handleSubmit}>
              <TextField
                sx={{ mt: 2, mb: 1.5 }}
                margin={'normal'}
                label="Name"
                type={'text'}
                fullWidth
                name="name"
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                onChange={formik.handleChange}
              />
              <TextField
                sx={{ mt: 2, mb: 1.5 }}
                margin={'normal'}
                label="LastName"
                type={'text'}
                fullWidth
                name="lastName"
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              <TextField
                sx={{ mt: 1.5, mb: 1.5 }}
                margin={'normal'}
                label="Email"
                type={'email'}
                fullWidth
                name="email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <TextField
                sx={{ mt: 1.5, mb: 1.5 }}
                margin={'normal'}
                label="Password"
                type={'password'}
                fullWidth
                name="password"
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
              />
              <TextField
                sx={{ mt: 2, mb: 1.5 }}
                margin={'normal'}
                label="Repeat Password"
                type={'password'}
                fullWidth
                name="repeatPassword"
                value={formik.values.repeatPassword}
                error={
                  formik.touched.repeatPassword &&
                  Boolean(formik.errors.repeatPassword)
                }
                helperText={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
                onChange={formik.handleChange}
              />
              <Stack direction={'row'} spacing={2} sx={{ mt: 1.5 }}>
                <Button
                  sx={{ color: 'white', fontWeight: 'bold' }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Register
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default RegisterPage;
