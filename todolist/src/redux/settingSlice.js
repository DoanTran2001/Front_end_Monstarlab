import { createSlice } from "@reduxjs/toolkit";
import { images } from "../constants/constants";

const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    image: images[0],
    theme: '#adadad'
  },
  reducers: {
    update: (state, action) => {
      state.image = action.payload.image;
      state.theme = action.payload.theme
    }
  }
})

export const { update } = settingSlice.actions
export default settingSlice.reducer