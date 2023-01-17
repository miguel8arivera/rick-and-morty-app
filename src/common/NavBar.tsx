import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBar: FC = function () {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Logo</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => navigate('/login')} variant="outlined">
                    Login
                  </Button>
                  <Button
                    onClick={() => navigate('/register')}
                    variant="contained"
                  >
                    Register
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
