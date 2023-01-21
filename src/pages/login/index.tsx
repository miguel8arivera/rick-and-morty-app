import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  TextField,
  Stack,
} from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import { useNotification } from '../../context/notificatin.context';
import { LoginType } from '../../types';
import { validateLoginForm } from '../../utils/validateForm';

const initialState = {
  email: '',
  password: '',
};
export const LoginPage: FC = function () {
  const { getSuccess } = useNotification();

  const formik = useFormik<LoginType>({
    initialValues: initialState,
    validationSchema: validateLoginForm,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values));
    },
  });

  return (
    <Container maxWidth={'sm'}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography margin={2} textAlign="center" variant="h4">
              Login
            </Typography>
            <Box noValidate component={'form'} onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                type={'email'}
              />
              <TextField
                margin="normal"
                label="Password"
                type={'password'}
                sx={{ mt: 1.5, mb: 1.5 }}
                fullWidth
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Stack direction="row" spacing={2} sx={{ mt: 1.5 }}>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
