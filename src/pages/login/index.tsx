import { Container, Typography, Button } from '@mui/material';
import { FC } from 'react';

export const LoginPage: FC = function () {
  return (
    <Container maxWidth={'xl'} sx={{ mt: 10 }}>
      <Typography variant="h6">Login Page</Typography>
      <Button variant="outlined">Desde loginPage</Button>
    </Container>
  );
};
