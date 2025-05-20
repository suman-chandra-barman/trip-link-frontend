"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import image from "@/assets/travel-world/travel_world.png";
import bg from "@/assets/travel-world/travel_world_bg.png";
import Image from "next/image";

const TravelWorldwide = () => {
  return (
    <Box my="100px">
      <Box sx={{ backgroundColor: "primary.main" }}>
        <Box
          sx={{
            padding: { sm: 4, md: 8 },
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <Container maxWidth="xl">
            <Box textAlign="center">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image width={500} src={image} alt="Find travel worldwide" />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  width: { sm: "100%", md: "70%" },
                  fontWeight: 600,
                  marginTop: "20px",
                }}
                mx="auto"
              >
                Travel the world together using our website - find your travel
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box mt={6} textAlign="center">
        <Link
          href="/trip"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button size="large">Find Trips</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TravelWorldwide;
