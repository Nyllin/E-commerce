import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles';

const Product = ({product,handleAddToCart}) => {
  const classes = useStyles();
  return (
    <>
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom component="h2">
            {product.name}
          </Typography>
          <Typography variant='h5' component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Add to Cart' onClick={()=>handleAddToCart(product.id,1)}>
          <AddShoppingCart/>
        </IconButton>
      </CardActions>
    </Card>

    </>
  )
}

export default Product