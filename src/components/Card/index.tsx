import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../app/features/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setItem } from '../../utils/localStorage';

type CardComponentProps = {
  image: string;
  name: string;
  especies: string;
  status: string;
  id: number;
};

export const CardComponent: FC<CardComponentProps> = function ({
  image,
  name,
  especies,
  status,
  id,
}) {
  const [disabledBtn, setDisableBtn] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const exitItem = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    // otra forma de hacerlo
    // setDisableBtn(exitItem.some((item) => item.id === id));

    exitItem.some((item) => item.id === id)
      ? setDisableBtn(true)
      : setDisableBtn(false);

    setItem('cart', exitItem);
  }, [exitItem, id]);

  const handleAddfavorites = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        info: status,
      })
    );
  };

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
          <Button
            onClick={() => navigate(`/character/${id}`)}
            fullWidth
            variant="contained"
            size="small"
          >
            See more
          </Button>
          <Button
            onClick={handleAddfavorites}
            fullWidth
            variant="contained"
            size="small"
            disabled={disabledBtn}
          >
            Add favorites
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
