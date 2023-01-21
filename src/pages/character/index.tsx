import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacters } from '../../api/characters';
import { IdCharacters } from '../home/interface/character.interface';

const CharacterPage: FC = function () {
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
              <Typography sx={{ mt: 2, mb: 2 }} variant={'h3'}>
                Description :
              </Typography>
              <Divider />
              <Typography sx={{ mt: 2, mb: 2 }}>
                <b>Name:</b> {character?.name}
              </Typography>

              <Box sx={{ mt: 2, mb: 2 }}>
                status:
                <Chip
                  sx={{ ml: 2 }}
                  color="primary"
                  variant="outlined"
                  label={character?.status}
                />
              </Box>

              <Typography sx={{ mt: 2, mb: 2 }}>
                <b>species: {character?.species}</b>
              </Typography>
              <Typography sx={{ mt: 2, mb: 2 }}>
                <b>gender: {character?.gender}</b>
              </Typography>
              <Typography sx={{ mt: 2, mb: 2 }}>
                <b>origin: {character?.origin.name}</b>
              </Typography>
              <Typography sx={{ mt: 2, mb: 2 }}>
                <b>location: {character?.location.name} - </b>
              </Typography>
              <Typography sx={{ mt: 2, mb: 2 }}>
                <b>gender: {character?.gender}</b>
              </Typography>
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
export default CharacterPage;
