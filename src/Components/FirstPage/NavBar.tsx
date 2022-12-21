import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

type PageType = {
  label: string;
  route: string;
};

const pages: PageType[] = [
  { label: "Home", route: "/" },
  { label: "Crie sua conta", route: "/cadastro" },
  { label: "Login", route: "/login" },
];

function NavBar() {
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = (page: PageType) => {
    setAnchorElNav(null);
    navigate(page.route);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="rgb(0, 172, 238)"
            sx={{ flexGrow: 1 }}
          >
            Minha página de recados
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu({ label: "", route: "#" })}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.route}
                  onClick={() => handleCloseNavMenu(page)}
                >
                  <Typography textAlign="end">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.route}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "rgb(0, 172, 238)", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
