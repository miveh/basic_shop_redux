import { Badge, IconButton, Menu } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { productList } from "../../constant/products";
import { CartItem } from "./CartItem";
export function CartIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpenMenu = !!anchorEl;
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      >
        <Badge badgeContent={productList.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpenMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {productList.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </Menu>
    </>
  );
}
