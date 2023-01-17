import { Container, Button } from '@mui/material';
import { FC, useEffect } from 'react';
import { getCharacters } from '../../api/characters';
import { HearderComponent } from '../../components';

export const HomePage: FC<{}> = function () {
  useEffect(() => {
    getCharacters
      .getOneId({ id: 1 })
      .then((res) => {
        const { data } = res;
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
