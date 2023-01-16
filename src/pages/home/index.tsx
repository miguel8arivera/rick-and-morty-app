import { Container, Typography, Button } from '@mui/material';
import { FC } from 'react';

export const HomePage: FC = function () {
  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Typography variant="h6" color={'black'} fontWeight={'semi-bold'}>
        Home Page
      </Typography>
      <Button variant="outlined">Desde HomePage</Button>
    </Container>
  );
};
