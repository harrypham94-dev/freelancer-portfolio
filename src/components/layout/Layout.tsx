import { type ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  Person,
  Build,
  Mail,
  Work,
} from "@mui/icons-material";

interface LayoutProps {
  children: ReactNode;
}

const menuItems = [
  { text: "Home", path: "/", icon: <Home /> },
  { text: "About", path: "/about", icon: <Person /> },
  { text: "Projects", path: "/projects", icon: <Work /> },
  { text: "Services", path: "/services", icon: <Build /> },
  // { text: "Blog", path: "/blog", icon: <Article /> },
  { text: "Contact", path: "/contact", icon: <Mail /> },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileDrawerOpen(false);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h6">Hieu Pham</Typography>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              sx={{
                justifyContent: "flex-start",
                px: 3,
                py: 1.5,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "primary.contrastText",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color:
                    location.pathname === item.path
                      ? "inherit"
                      : "primary.main",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 1,
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              alt="Hieu Pham"
              src="https://media.licdn.com/dms/image/v2/D5603AQHBSXx7N3WxsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683522547294?e=1755129600&v=beta&t=l8tNcEZVFR2D5qaNPwoB0N8hTigE6q6X5LAAxzb28pg"
              sx={{ width: 40, height: 40 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: { xs: 1, md: 0 }, color: "primary.main" }}
            >
              Hieu Pham
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => handleNavigation(item.path)}
                  startIcon={item.icon}
                  color={
                    location.pathname === item.path ? "primary" : "inherit"
                  }
                  variant={
                    location.pathname === item.path ? "contained" : "text"
                  }
                  sx={{
                    borderRadius: 2,
                    minWidth: 100,
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={isMobile && mobileDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 360,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          mt: "56px",
          "@media (min-width:0px)": {
            mt: "48px",
          },
          "@media (min-width:600px)": {
            mt: "64px",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
