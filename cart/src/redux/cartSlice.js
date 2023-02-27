import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: {},
  search: ''
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {id, name, image, price} = action.payload;
      state.cart[id] = {
        id,
        name, 
        image,
        price,
        quantity: state.cart[id]?.quantity + 1 || 1
      };
    },
    deleteAProduct: (state, action) => {
      delete state.cart[action.payload]
    },
    updateAProduct: (state, action) => {
      const {id, count} = action.payload
      state.cart[id].quantity = count
    },
    setSearchValue: (state, action) => {
      state.search = action.payload
    }
  },
});

export const { addToCart, setSearchValue, deleteAProduct, updateAProduct } = cardSlice.actions;
export default cardSlice.reducer;
