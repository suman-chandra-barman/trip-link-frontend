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
import { getUserInfo } from "@/services/auth.service";
import { TAuthUser } from "@/types";
import { Divider, ListItemIcon } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import HistoryIcon from "@mui/icons-material/History";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";

function Navbar() {
  const [user, setUser] = useState<TAuthUser>();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorElUser);
  let pages = [
    { route: "/", page: "Home" },
    { route: "about", page: "About Us" },
    { route: "login", page: "Login" },
    { route: "register", page: "Register" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfo = getUserInfo();
      setUser(userInfo);
    }
  }, []);

  //add page base user
  if (user && user?.email) {
    pages = [
      { route: "/", page: "Home" },
      { route: "about", page: "About Us" },
      { route: "dashboard", page: "Dashboard" },
    ];
  }

  console.log(user);

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

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                fontSize: "25px",
              }}
            >
              Trip
              <Box component="span" sx={{ color: "primary.main" }}>
                Link
              </Box>
            </Typography>
          </Link>

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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
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
                  {page.page}
                </Link>
              </Typography>
            ))}
          </Box>

          {user?.username && (
            <>
              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="My Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user?.username.toUpperCase()}
                      src="/static/images/avatar/2.jpg"
                      sx={{
                        backgroundColor: "primary.main",
                        fontSize: "20px",
                        width: 30,
                        height: 30,
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Box onClick={handleCloseUserMenu}>
                    <MenuItem>
                      <Link href="/my-profile">
                        <Typography>My Profile</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Typography>Logout</Typography>
                    </MenuItem>
                  </Box>
                </Menu>
              </Box> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
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
                      sx={{ width: 32, height: 32 }}
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  Travel Posts
                </MenuItem>
                <Link href="/profile/travel-request">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <HistoryIcon />
                    </ListItemIcon>
                    Travel Requests
                  </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={handleCloseUserMenu}>
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
