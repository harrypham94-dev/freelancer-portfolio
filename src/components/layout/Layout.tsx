import { type ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home,
  Person,
  Work,
  Build,
  Mail,
  Article,
} from "@mui/icons-material";

interface LayoutProps {
  children: ReactNode;
}

const menuItems = [
  { text: "Home", path: "/", icon: <Home /> },
  { text: "About", path: "/about", icon: <Person /> },
  { text: "Projects", path: "/projects", icon: <Work /> },
  { text: "Services", path: "/services", icon: <Build /> },
  { text: "Blog", path: "/blog", icon: <Article /> },
  { text: "Contact", path: "/contact", icon: <Mail /> },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleCloseMobileMenu();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 }, mr: 4 }}
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open menu"
                edge="start"
                onClick={handleOpenMobileMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleCloseMobileMenu}
                keepMounted
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => handleNavigation(item.path)}
                    selected={location.pathname === item.path}
                  >
                    <Box component="span" sx={{ mr: 1, display: "flex" }}>
                      {item.icon}
                    </Box>
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  startIcon={item.icon}
                  sx={{
                    backgroundColor:
                      location.pathname === item.path
                        ? theme.palette.primary.dark
                        : "transparent",
                    "&:hover": {
                      backgroundColor:
                        location.pathname === item.path
                          ? theme.palette.primary.dark
                          : "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Stack>
          )}

          {!isMobile && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleNavigation("/contact")}
            >
              Contact Me
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
          marginTop: "64px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
