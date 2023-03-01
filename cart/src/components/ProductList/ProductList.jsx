import { Stack } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";

function ProductList({ list }) {
  return (
    <Stack direction={"row"} flexWrap='wrap' gap={'15px'} pt={'64px'}>
      {list.length > 0 &&
        list.map((item) => <ProductItem key={item.id} item={item} />)}
    </Stack>
  );
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      price: PropTypes.number,
      sold: PropTypes.number,
      star: PropTypes.number,
    })
  ),
};

export default ProductList;
