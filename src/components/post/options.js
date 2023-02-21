import * as React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";

import { Delete, MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { deletePost } from "../../Redux/actions/post/postActions";
export default function BasicMenu({ id }) {
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
        className="btn-comment"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          className="d-flex items-center p-2"
          onClick={() => {
            deletePost(id);
          }}
        >
          <Delete />
          &nbsp; Delete
        </div>
      </Menu>
    </div>
  );
}
