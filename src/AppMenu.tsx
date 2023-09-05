"use client";

import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuButton, { MenuButtonProps } from "./MenuButton";

const drawerWidth = 240;

export interface AppMenuProps {
  logoUrl: string;
  logoAlt: string;
  logoWidth: string;
  navItems: MenuButtonProps[];
  mobileHeader: string;
}
export function AppMenu({ logoUrl, logoAlt, logoWidth, navItems, mobileHeader }: AppMenuProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {mobileHeader}
      </Typography>
      <Divider />
      <List sx={{ typography: "body1" }}>
        {navItems.map((item) => (
          <Fragment key={item.item.text}>
            <ListItem key={item.item.text} disablePadding>
              <ListItemButton href={item.item.destination}>{item.item.text}</ListItemButton>
            </ListItem>
            {item.subItems.map((subItem) => (
              <ListItem key={subItem.text} disablePadding>
                <ListItemButton href={subItem.destination}>{`- ${subItem.text}`}</ListItemButton>
              </ListItem>
            ))}
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="inherit" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Button href="/">
              <img src={logoUrl} alt={logoAlt} width={logoWidth}></img>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <MenuButton key={item.item.text} item={item.item} subItems={item.subItems} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
