import { Container, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { HearderComponent } from '../../components';

export const HomePage: FC = function () {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <HearderComponent
        tittle="Kamila"
        description="Welcome to Home page"
        element={
          <Button fullWidth variant="contained">
            Contact me
          </Button>
        }
      />
    </Container>
  );
};
