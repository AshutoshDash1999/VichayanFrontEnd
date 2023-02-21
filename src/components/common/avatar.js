import { Avatar } from "@material-ui/core";
import React from "react";
export default function AvatarComp({ name = "", src }) {
  return <Avatar src={src}>{name.substring(0, 1)}</Avatar>;
}
