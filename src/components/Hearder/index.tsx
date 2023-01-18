import { Box, Divider, Grid, Typography } from '@mui/material';
import { FC } from 'react';

type HeaderComponentProps = {
  tittle?: string;
  description?: string;
  element?: React.ReactNode | null;
};

export const HearderComponent: FC<HeaderComponentProps> = function ({
  tittle,
  description,
  element,
}) {
  return (
    <div>
      <Box sx={{ width: '100%', height: '100px' }}>
        <Grid
          container
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ height: '100%' }}
        >
          <Grid item xs={5}>
            <Grid
              container
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{ height: '100%' }}
            >
              <Grid item>
                <Typography variant={'h3'}>{tittle}</Typography>
              </Grid>
              <Grid sx={{ mt: 2 }} item>
                <Typography variant={'h6'}>{description}</Typography>
              </Grid>
              {element !== undefined && (
                <Grid sx={{ mt: 4, width: '100%' }} item>
                  {element}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Divider />
    </div>
  );
};
