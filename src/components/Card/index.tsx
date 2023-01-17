import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import { FC } from 'react';

type CardComponentProps = {
  image: string;
  name: string;
  especies: string;
  status: string;
};

export const CardComponent: FC<CardComponentProps> = function ({
  image,
  name,
  especies,
  status,
}) {
  return (
    <>
      <Card>
        <CardMedia
          component={'img'}
          alt={'image'}
          height={'194'}
          image={image}
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            {' '}
            {name}
          </Typography>
          <Divider />
          <Typography sx={{ mt: 1.5 }} variant="body2" color={'text.secondary'}>
            especie: {especies}
          </Typography>
          <Typography sx={{ mt: 1.5 }} variant="body2" color={'text.secondary'}>
            status: {status}
          </Typography>
        </CardContent>

        <CardActions>
          <Button fullWidth variant="contained" size="small">
            See more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
