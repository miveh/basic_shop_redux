import { Badge, IconButton, Menu } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { productList } from "../../constant/products";
import { CartItem } from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

export function CartIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpenMenu = !!anchorEl;
  const count = useSelector((state) => state.cart.length);
  const productList = useSelector((state) => state.cart);
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  console.log(count);
  console.log(productList);

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      >
        <Badge badgeContent={count} color="error">
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
        {count === 0 ? (
          <div>سبد خرید شما خالی است</div>
        ) : (
          productList.map((item) => (
            <CartItem product={item.product} key={item.product.id} />
          ))
        )}
      </Menu>
    </>
  );
}
