import {
  Drawer,
  Box,
  Stack,
  Divider,
  Typography,
  IconButton,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FC } from 'react';
import { CardHorizontalComponent } from '../components/CardHorizontal';
import { useAppSelector } from '../app/hooks';

interface CardComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

export const CartComponent: FC<CardComponentProps> = function ({
  open,
  handleStateViewDrawer,
}) {
  const items = useAppSelector((state) => state.cartReducer);
  let msgError: string = 'Not items in the cart';
  return (
    <>
      <Drawer anchor={'right'} open={open}>
        <Box sx={{ width: '25em', p: 2 }}>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="h2"> Cart</Typography>
            <IconButton color="primary" onClick={() => handleStateViewDrawer()}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <Divider sx={{ my: 1.5 }} />
          {items.length > 0 ? (
            items.map(({ id, image, info, name }) => (
              <CardHorizontalComponent
                key={id}
                id={id}
                image={image}
                info={info}
                name={name}
              />
            ))
          ) : (
            <Typography variant="h5">{msgError}</Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
};
