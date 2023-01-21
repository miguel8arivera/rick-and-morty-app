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
import { FC, useState } from 'react';
import { useNotification } from '../../context/notificatin.context';
import { LoginType } from '../../types/index';
import { validateLoginForm } from '../../utils/validateForm';

const initialState = {
  email: '',
  password: '',
};
export const TradicionalFormValidation: FC = function () {
  const { getError, getSuccess } = useNotification();
  const [loginData, setLoginData] = useState<LoginType>(initialState);

  const handleLogin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateLoginForm
      .validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
      })
      .catch((err) => {
        getError(err.message);
      });
  };

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
            <Box component={'form'} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                fullWidth
                name="email"
                onChange={handleLogin}
                type={'email'}
              />
              <TextField
                margin="normal"
                label="Password"
                type={'password'}
                sx={{ mt: 1.5, mb: 1.5 }}
                fullWidth
                name="password"
                onChange={handleLogin}
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
