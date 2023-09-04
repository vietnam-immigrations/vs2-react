"use client";

import React, { MouseEvent, useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

export interface MenuNavItem {
  text: string;
  destination: string;
}

export interface MenuButtonProps {
  item: MenuNavItem;
  subItems: MenuNavItem[];
}

export default function MenuButton({ item, subItems }: MenuButtonProps) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  function onClick(e: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  function onClose() {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <>
      {subItems.length === 0 && <Button href={item.destination}>{item.text}</Button>}
      {subItems.length > 0 && (
        <Button onClick={onClick} endIcon={<KeyboardArrowDown />}>
          {item.text}
        </Button>
      )}
      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        <MenuItem sx={{ color: "primary.dark", fontSize: "0.9rem" }} component={Link} href={item.destination}>
          {item.text}
        </MenuItem>
        {subItems.map((subItem) => (
          <MenuItem
            sx={{ color: "primary.dark", fontSize: "0.9rem" }}
            component={Link}
            key={subItem.text}
            href={subItem.destination}
          >
            {subItem.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
