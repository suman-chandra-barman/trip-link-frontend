import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", pt: 6, pb: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={3}>
            <Box sx={{ maxWidth: 300 }}>
              <Link href="#" underline="none" color="inherit">
                <Typography
                  variant="h6"
                  noWrap
                  component="p"
                  sx={{
                    mr: 2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    textDecoration: "none",
                    fontSize: "25px",
                  }}
                >
                  TripLink
                </Typography>
              </Link>
              <Typography variant="body2" sx={{ mb: 2 }}>
                TripLink is designed to connect travelers looking for
                companionship on their trips.
              </Typography>
              <Typography variant="body2">Email: triplink@gmail.com</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Phone: +8801518441778
              </Typography>
              <Box>
                <IconButton href="#" color="inherit">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="#" color="inherit">
                  <TwitterIcon />
                </IconButton>
                <IconButton href="#" color="inherit">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              TRAVEL
            </Typography>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                How it works
              </Typography>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Find a trip
              </Typography>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Create a trip
              </Typography>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2">Remote working</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              JOIN MY TRIP
            </Typography>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                About Us
              </Typography>
            </Link>

            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Trustpilot reviews
              </Typography>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Terms & Conditions
              </Typography>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2">Privacy Policy</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              SUPPORT
            </Typography>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Help & FAQ
              </Typography>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Travel Insurance
              </Typography>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Contact Us
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ mt: 4, textAlign: { xs: "start", md: "center" } }}
        >
          &copy; 2024 The TripLink. Connecting You to Your Next Adventure. All
          rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
