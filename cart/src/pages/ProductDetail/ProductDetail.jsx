import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import products from "../../utils/data";
import { formatPrice } from "../../utils/utils";
import useStyles from "./style";

function ProductDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const [previewImage, setPreviewImage] = useState("");
  const product = products.find((item, index) => item.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product && product.images.length > 0) {
      setPreviewImage(product.images[0])
    }
  }, [product])
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const handleChooseImage = (item) => {
    setPreviewImage(item)
  };
  return (
    <Box mt={"64px"} py={"15px"}>
      <Box py={"10px"}>
        <Link to={"/"}>Trang chủ</Link>
        <p></p>
      </Box>
      <Stack direction={"row"}>
        <Box width={"40%"} mr={4}>
          <Box className={classes.imagePreview}>
            <img
              src={previewImage}
              alt=""
              width={"100%"}
              className={classes.imagePreviewImg}
            />
          </Box>

          <ImageList className={classes.imageListContainer}>
            {product.images.map((item, index) => (
              <ImageListItem
                key={index}
                sx={{ cursor: "pointer" }}
                
              >
                <img src={item} alt="" onMouseEnter={() => handleChooseImage(item)}/>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box width={"60%"}>
          <Typography variant="h3">{product.name}</Typography>
          <Typography
            variant="span"
            color={"#1435C3"}
            fontWeight={700}
            fontSize={20}
          >
            {formatPrice(product.price)}
          </Typography>
          <Button
            sx={{
              display: "block",
            }}
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </Button>
        </Box>
      </Stack>
      <div
        dangerouslySetInnerHTML={{
          __html: product.description,
        }}
      ></div>
    </Box>
  );
}

export default ProductDetail;
