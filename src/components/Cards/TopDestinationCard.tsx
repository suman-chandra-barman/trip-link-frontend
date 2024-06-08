"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { TTopDestinationData } from "../Home/TopDesitination";

const TopDestinationCard = ({ data }: { data: TTopDestinationData }) => {
  const HeroContainer = styled(Box)({
    position: "relative",
    height: "80vh",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${data?.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
    zIndex: 2,
  });

  const HeroContent = styled(Box)({
    position: "relative",
    zIndex: 2,
  });

  return (
    <HeroContainer borderRadius={2}>
      <Container maxWidth="xl">
        <HeroContent
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "0px 10px",
            marginBottom: 3,
          }}
        >
          <Typography variant="h6" component="p" fontWeight={600}>
            {data?.country}
          </Typography>
          <Typography component="p" fontWeight={600}>
            {data?.totalTrips} Trips
          </Typography>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default TopDestinationCard;
