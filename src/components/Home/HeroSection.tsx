"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import banner1 from "@/assets/header/header_frontpage_1.webp";
import banner2 from "@/assets/header/header_frontpage_2.webp";
import banner3 from "@/assets/header/header_frontpage_3.webp";
import banner4 from "@/assets/header/header_frontpage_4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const HeroSection = () => {
  const banners = [banner1, banner2, banner3, banner4];

  const slideContent = {
    title: "Find Travel Buddies",
    subtitle:
      "Discover a new and authentic way of traveling. Find Travel Buddies who fit your travel style and discover the world together.",
    buttonText: "Share Your Trip",
  };

  const SlideOverlay = () => (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.4)",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: "16px",
          fontSize: { xs: "2rem", md: "3.5rem" },
        }}
      >
        {slideContent.title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "32px",
          fontSize: { xs: "1rem", md: "1.5rem" },
          maxWidth: "600px",
        }}
      >
        {slideContent.subtitle}
      </Typography>
      <Button>{slideContent.buttonText}</Button>
    </Box>
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        speed={2000}
        spaceBetween={0}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
        style={{ height: "80vh", minHeight: "500px" }}
        watchSlidesProgress={true}
        allowTouchMove={true}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={banner}
                alt="TripLink Banner"
                fill
                style={{ objectFit: "cover" }}
              />
              <SlideOverlay />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
