import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { formatPrice } from "../../utils/utils";

function ProductItem({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <Card sx={{ width: `calc(25% - 15px)` }}>
      <CardActionArea component={Link} to={`/product/${item.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={classes.cardName}
          >
            {item.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography> */}
          <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
            {formatPrice(item.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={() => handleAddToCart(item)}>Add to card</Button>
    </Card>
  );
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
  }),
};

export default ProductItem;
