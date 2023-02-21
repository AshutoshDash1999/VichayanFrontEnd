import * as React from "react";

import { Button, Menu, MenuItem } from "@material-ui/core";

import { useState } from "react";
import { logOutUser } from "../../Redux/actions/authActions";

export default function BasicMenu({ history }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="btn-comment-new"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        User settings
        {/* <img style={{ textDecoration: "none" }} src="https://img.icons8.com/material-rounded/32/ffffff/settings.png" alt="new" /> */}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="mt-4"
      >
        <MenuItem
          onClick={(e) => {
            handleClose(e);
            logOutUser(history);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
