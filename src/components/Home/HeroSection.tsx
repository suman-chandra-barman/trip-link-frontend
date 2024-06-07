"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import banner from "@/assets/images/banner.jpg";
import Link from "next/link";

const HeroContainer = styled(Box)({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  backgroundImage: `url(${banner.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  },
  zIndex: 2,
});

const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 2,
});

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container maxWidth="xl">
        <HeroContent textAlign="center">
          <Typography variant="h4">Welcome to TripLink</Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
              },
              fontWeight: "bold",
            }}
          >
            Find Travel Buddies
          </Typography>
          <Typography
            variant="h5"
            sx={{ width: { sm: "100%", md: "70%" } }}
            mx="auto"
          >
            Discover a new and authentic way of traveling. Find Travel Buddies
            who fit your travel style and discover the world together.
          </Typography>

          <Link href="/trip" style={{ color: "white", textDecoration: "none" }}>
            <Button size="large" sx={{ mt: 3 }}>
              Share Your Trip
            </Button>
          </Link>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
