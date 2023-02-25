import { Box, ImageList, ImageListItem } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../constants/constants";
import { update } from "../redux/settingSlice";

function Setting() {
  const setting = useSelector((state) => state.setting);
  const [theme, setTheme] = useState(setting.theme);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTheme(e.target.value);
    dispatch(
      update({
        theme: e.target.value,
        image: setting.image,
      })
    );
  };
  return (
    <Box
      sx={{
        border: "1px solid #eee",
        borderRadius: 20,
      }}
    >
      <form action="">
        <ImageList sx={{ width: "100%", cursor: "pointer" }} cols={5} gap={8}>
          {images.map((item) => (
            <ImageListItem
              sx={{
                border: item === setting.image ? `3px solid ${theme}` : "",
              }}
              onClick={() =>
                dispatch(
                  update({
                    theme: theme,
                    image: item,
                  })
                )
              }
            >
              <img src={item} alt="" />
            </ImageListItem>
          ))}
        </ImageList>
        <input type="color" value={theme} onChange={handleChange} />
      </form>
    </Box>
  );
}

export default Setting;
