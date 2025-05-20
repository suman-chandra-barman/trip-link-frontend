"use client";

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { deleteUser, getUserInfo } from "@/services/auth.service";
import { TAuthUser } from "@/types";
import { Button, Divider, ListItemIcon } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import HistoryIcon from "@mui/icons-material/History";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png";
import Image from "next/image";

function Navbar() {
  const [user, setUser] = useState<TAuthUser>();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const router = useRouter();
  const open = Boolean(anchorElUser);

  //pages
  let pages = [
    { route: "trip", page: "All Trips" },
    { route: "trip/post-trip", page: "Create a Trip" },
    { route: "about", page: "About Us" },
    { route: "login", page: "Login" },
    { route: "register", page: "Join TripLink" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfo = getUserInfo();
      setUser(userInfo);
    }
  }, []);

  //add page based on user
  if (user && user?.email) {
    pages = [
      { route: "trip", page: "All Trips" },
      { route: "trip/post-trip", page: "Create A Trip" },
      { route: "about", page: "About Us" },
    ];
  }
  //if user role admin
  if (user && user?.role === "admin") {
    pages.push({ route: "dashboard", page: "Dashboard" });
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //logout
  const handleLogout = () => {
    deleteUser();
    router.push("/login");
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black", py: "5px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo  */}
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <Box
              justifyContent="center"
              alignItems="center"
              sx={{ display: "flex" }}
            >
              <Image width={40} src={logo} alt="Logo" />
              <Typography
                variant="h6"
                noWrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "cursive",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  textDecoration: "none",
                  fontSize: "25px",
                }}
              >
                Trip
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontFamily: "cursive" }}
                >
                  Link
                </Box>
              </Typography>
            </Box>
          </Link>

          {/* small device navbar start */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                  <Link
                    href={`/${page.route}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Typography textAlign="center">{page.page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                fontSize: "22px",
              }}
            >
              TripLink
            </Typography>
          </Link>
          {/* small device navbar end */}

          {/* medium device navbar start */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page.route}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 1, color: "black", display: "block" }}
              >
                <Link
                  href={`/${page.route}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {page.page == "Join TripLink" ? (
                    <Button>Join</Button>
                  ) : (
                    page.page
                  )}
                </Link>
              </Typography>
            ))}
          </Box>
          {/* medium device navbar end  */}

          {/* User Profile */}
          {user?.username && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      alt={user?.username.toUpperCase()}
                      sx={{ width: 32, height: 32, backgroundColor:"primary.main", color:"black", fontSize:"16px" }}
                    >
                      {user?.username.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorElUser}
                id="account-menu"
                open={open}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                    "& a": {
                      textDecoration: "none",
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link href="/profile/edit-profile">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    Edit Profile
                  </MenuItem>
                </Link>
                <Link href="/profile/change-password">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <LockIcon />
                    </ListItemIcon>
                    Change Password
                  </MenuItem>
                </Link>
                <Divider />
                <Link href="/trip/post-trip">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    Create A Trip
                  </MenuItem>
                </Link>
                <Link href="/profile/travel-post">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <PostAddIcon />
                    </ListItemIcon>
                    Travel Posts
                  </MenuItem>
                </Link>
                <Link href="/profile/travel-request">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <HistoryIcon />
                    </ListItemIcon>
                    Travel Requests
                  </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
