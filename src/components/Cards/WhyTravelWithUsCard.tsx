"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { TWhyWithUsData } from "../Home/WhyTravelWithUs";

const WhyTravelWithUsCard = ({ data }: { data: TWhyWithUsData }) => {
  const HeroContainer = styled(Box)({
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    color: "#fff",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${data?.image})`,
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
    <HeroContainer>
      <Container maxWidth="xl">
        <HeroContent sx={{ paddingBottom: 2 }}>
          <Typography variant="h6">{data?.title}</Typography>
          <Typography component="p" color="gray">
            {data?.description}
          </Typography>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default WhyTravelWithUsCard;
