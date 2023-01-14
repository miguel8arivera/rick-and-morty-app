import { Container, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { useNotification } from '../../context/notificatin.context';

export const HomePage: FC = function () {
  const { getError } = useNotification();
  const handleClick = () => {
    getError('Error desde HomePage');
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Typography variant="h6">Home Page</Typography>
      <Button onClick={handleClick} variant="outlined">
        Desde HomePage
      </Button>
    </Container>
  );
};
