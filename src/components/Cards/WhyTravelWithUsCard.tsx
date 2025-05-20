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
    backgroundImage: `linear-gradient(to bottom, rgba(21, 23, 29, 0) 35%, rgba(18, 18, 18) 77%), url(${data?.image})`,
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
        <HeroContent sx={{ paddingBottom: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            {data?.title}
          </Typography>
          <Typography
            component="p"
            color="gray"
            fontWeight={600}
            fontSize={18}
            mt={1}
          >
            {data?.description}
          </Typography>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default WhyTravelWithUsCard;
