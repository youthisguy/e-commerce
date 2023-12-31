import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onClickUpdate, onClickRemove }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onClickUpdate(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onClickRemove(lineItemId);

  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" variant="outlined" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography style={{ padding: '1em' }}>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" variant="outlined" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;