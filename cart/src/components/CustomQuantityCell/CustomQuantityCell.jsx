import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { deleteAProduct, updateAProduct } from "../../redux/cartSlice";

function CustomQuantityCell({params}) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(params.value);
  const handleIncrement = (e) => {
    e.stopPropagation()
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(
      updateAProduct({
        id: params.row.id,
        count: quantity + 1,
      })
    );
  };
  const handleDecrement = (e) => {
    e.stopPropagation()
    setQuantity((prevQuantity) => prevQuantity - 1);
    if (quantity === 1) {
      dispatch(deleteAProduct(params.row.id))
    }
    dispatch(
      updateAProduct({
        id: params.row.id,
        count: quantity - 1,
      })
    );
  };

  return (
    <Box>
      <IconButton
        aria-label="reduce"
        onClick={handleDecrement}
        disabled={quantity === 0}
      >
        <RemoveIcon />
      </IconButton>
      {quantity}
      <IconButton aria-label="increase" onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </Box>
  );
}

export default CustomQuantityCell;
