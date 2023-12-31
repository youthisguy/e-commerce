import React from 'react';
import { Container, Typography, Button, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem'; 
import useStyles from './styles';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cart, onClickUpdate, onClickRemove, onClickEmpty }) => {
  const classes = useStyles();
  const isEmpty = !cart.total_items;

  const EmptyCart = () => (
    <Typography
      variant="subtitle1"
    >
      You have no items in your shopping cart, 
      <Link to="/" className={classes.link}>
         {" "} start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id} >
            <CartItem item={item} onClickRemove={onClickRemove} onClickUpdate={onClickUpdate}  />                  
          </Grid>
        ))}
      </Grid>

      
        <div className={classes.cardDetails}>
          <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>

        <Stack direction="row" spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap">
            <Button
              variant="outlined"
              size="medium"
              type="button"
              color="error"
              className={classes.emptyCartButton}
              startIcon={<DeleteIcon />}
              onClick={onClickEmpty} >
          Empty Cart
            </Button>     
            <Button
              variant="contained"
              size="medium"
              type="button"
              className={classes.checkoutButton}
              color="primary"
              component={Link} to="/checkout" >
           Checkout
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography
        align="center"
        gutterBottom
        className={classes.title}
        variant="h4"
      >
        Your Shopping Cart:
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
