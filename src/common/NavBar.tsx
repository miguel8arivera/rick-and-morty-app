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

export const NavBar: FC = function () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
                  <Button variant="outlined">Login</Button>
                  <Button variant="contained">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
