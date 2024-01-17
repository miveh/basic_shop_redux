import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../features/cart/cartSlice";

export function ProductCard({ item }) {
  const dispatch = useDispatch();
  const handleAddToCartButton = () => {
    dispatch(addProductToCart(item));
  };
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: 340 }}
        title={item.name}
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddToCartButton} size="small">
          add
        </Button>
      </CardActions>
    </Card>
  );
}
