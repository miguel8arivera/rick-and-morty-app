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
import { FC, useState } from 'react';
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

export const RegisterPage: FC = function () {
  const { getError, getSuccess } = useNotification();
  const [registerData, setRegisterData] = useState<RegisterType>(initialState);

  const handleRegister = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateRegisterForm
      .validate(registerData)
      .then(() => {
        getSuccess(JSON.stringify(registerData));
      })
      .catch((err) => {
        getError(err.message);
      });
  };
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
            <Box component={'form'} onSubmit={handleSubmit}>
              <TextField
                sx={{ mt: 2, mb: 1.5 }}
                margin={'normal'}
                label="Name"
                type={'text'}
                fullWidth
                name="name"
                onChange={handleRegister}
              />
              <TextField
                sx={{ mt: 2, mb: 1.5 }}
                margin={'normal'}
                label="LastName"
                type={'text'}
                fullWidth
                name="lastName"
                onChange={handleRegister}
              />
              <TextField
                sx={{ mt: 1.5, mb: 1.5 }}
                margin={'normal'}
                label="Email"
                type={'email'}
                fullWidth
                name="email"
                onChange={handleRegister}
              />
              <TextField
                sx={{ mt: 1.5, mb: 1.5 }}
                margin={'normal'}
                label="Password"
                type={'password'}
                fullWidth
                name="password"
                onChange={handleRegister}
              />
              <TextField
                sx={{ mt: 2, mb: 1.5 }}
                margin={'normal'}
                label="Repeat Password"
                type={'password'}
                fullWidth
                name="repeatPassword"
                onChange={handleRegister}
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
