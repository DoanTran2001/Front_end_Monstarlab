import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { formatPrice } from "../../utils/utils";
import { deleteAProduct, updateAProduct } from "../../redux/cartSlice";

function Cart() {
  const [selectedIds, setSelectedIds] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "info", headerName: "Sản phẩm", width: 400 },
    { field: "price", headerName: "Đơn giá" },
    {
      field: "quantity",
      headerName: "Số lượng",
      renderCell: (params) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [quantity, setQuantity] = useState(params.value);
        const handleIncrement = () => {
          setQuantity((prevQuantity) => prevQuantity + 1);
          dispatch(
            updateAProduct({
              id: params.row.id,
              count: quantity + 1,
            })
          );
        };
        const handleDecrement = () => {
          setQuantity((prevQuantity) => prevQuantity - 1);
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
      },
    },
    { field: "total", headerName: "Thành tiền", width: 120 },
    {
      field: "delete",
      headerName: "Hành động",
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.row.id)}>Xóa</Button>
      ),
    },
  ];
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const cartArr = Object.values(cart);
  const rows = cartArr.map((item) => {
    return {
      id: item.id,
      info: item.name,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
    };
  });
  const handleDelete = (id) => {
    dispatch(deleteAProduct(id));
  };
  const selectedRows = rows.filter((row) => selectedIds.includes(row.id));
  const totalPrice = useMemo(() => {
    return selectedRows.reduce((prev, next) => {
      return prev + next.total;
    }, 0);
  }, [selectedRows]);

  return (
    <Box
      mt={"64px"}
      style={{ height: 400, width: "100%" }}
      sx={{ display: "flex", gap: "15px" }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          setSelectedIds(ids);
        }}
        selectionModel={selectedIds}
        sx={{ width: "70%" }}
      />
      <Box width={"30%"}>
        <Typography variant="body1" fontWeight={600}>
          Thanh toán
        </Typography>
        <Stack direction={"row"}>
          <Typography>Thành tiền: {formatPrice(totalPrice)}</Typography>
          <Typography></Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Cart;
