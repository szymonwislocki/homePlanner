import { FC } from "react";
import { AppBar, Button, Container, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Nav: FC = () => {
  return (
    <AppBar sx={{ m: -1, width: "100vw" }} position="static">
      <Toolbar>
        {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cześć, {"name"}
        </Typography>
        <Button color="inherit" variant="outlined">
          Zaloguj
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
