import {
  Container,
  Button,
  Box,
  Grid,
  CircularProgress,
  Pagination,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react';
import { FC, useEffect, useState } from 'react';
import { getCharacters } from '../../api/characters';
import { CardComponent, HearderComponent } from '../../components';
import { TypeCharacter } from './interface/character.interface';

export const HomePage: FC<{}> = function () {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    setLoading(true);
    getCharacters
      .getAll({ page: page })
      .then((res) => {
        setTotalPages(res.data.info.pages);

        const { data } = res;
        setAllCharacters(data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  return (
    <Container sx={{ my: -2 }} maxWidth="xl">
      <HearderComponent description="This app the rick and morty" />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {allCharacters?.length !== 0 ? (
            <Grid sx={{ my: 2 }} container spacing={2} direction={'row'}>
              {allCharacters?.map((character) => (
                <Grid key={character.id} item xs={3}>
                  <CardComponent
                    image={character.image}
                    name={character.name}
                    especies={character.species}
                    status={character.status}
                    id={character.id}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            ''
          )}
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Pagination
              variant="outlined"
              shape="rounded"
              color="primary"
              size="medium"
              count={totalPages}
              page={page}
              onChange={handleChange}
              sx={{ mt: 2, mb: 2 }}
            />
          </Box>
        </div>
      )}
    </Container>
  );
};
