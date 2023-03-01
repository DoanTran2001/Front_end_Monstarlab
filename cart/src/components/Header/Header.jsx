import React, { useState } from "react";
import { AppBar, Badge, IconButton, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/cartSlice";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

function Header() {
  const [search, setSearch] = useState('')
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()
  const cartCount = Object.keys(cart).length;
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    dispatch(setSearchValue(e.target.value))
  }
  return (
    <AppBar>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={handleChangeSearch}
          />
        </Search>

        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Link to={"/cart"} >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
