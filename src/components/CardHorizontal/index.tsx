import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  Divider,
  CardActions,
  IconButton,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeToCart } from '../../app/features/cart/cart.slice';

type CardHorizontalProps = {
  id: number | string;
  image: string;
  name: string;
  info: string;
};

export const CardHorizontalComponent: FC<CardHorizontalProps> = function ({
  id,
  image,
  name,
  info,
}) {
  const dispatch = useAppDispatch();
  const handleRemoveToCart = () => {
    dispatch(removeToCart({ id }));
  };

  return (
    <Card sx={{ display: 'flex', my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt={'Rick and Morty image'}
      />
      <Grid container sx={{ mx: 1 }}>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Divider />
            <Typography variant="h6">{info}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton onClick={handleRemoveToCart}>
              <CloseRoundedIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
