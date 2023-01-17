import { Container, Button, Box, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { getCharacters } from '../../api/characters';
import { CardComponent, HearderComponent } from '../../components';
import { TypeCharacter } from './interface/character.interface';

export const HomePage: FC<{}> = function () {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );
  useEffect(() => {
    getCharacters
      .getAll({ page: 1 })
      .then((res) => {
        const { data } = res;
        setAllCharacters(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <HearderComponent
        tittle="This  Home page"
        description="Welcome to Home page"
        element={
          <Button fullWidth variant="contained">
            Contact me
          </Button>
        }
      />
      {allCharacters?.length !== 0 ? (
        <Grid container spacing={2} direction={'row'}>
          {allCharacters?.map((character) => (
            <Grid item xs={3}>
              <CardComponent
                key={character.id}
                image={character.image}
                name={character.name}
                especies={character.species}
                status={character.status}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        ''
      )}
    </Container>
  );
};
