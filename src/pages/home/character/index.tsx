import { Box, Button, CircularProgress, Container, Grid } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacters } from '../../../api/characters';
import { IdCharacters } from '../interface/character.interface';

export const CharacterHome: FC = function () {
  const { characterId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [character, setCharacter] = React.useState<IdCharacters | null>(null);

  getCharacters
    .getOneId({ id: characterId })
    .then((res) => {
      setCharacter(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 2,
          mr: 8,
        }}
      >
        <Button type="button" onClick={() => navigate('/')} variant="contained">
          Back
        </Button>
      </Box>

      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid sx={{ mt: 4 }} container columnSpacing={2}>
            <Grid item xs={6}>
              Miguel
            </Grid>
            <Grid item xs={6}>
              <img
                src={character?.image}
                style={{ width: '100%', borderRadius: '0.5em' }}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
