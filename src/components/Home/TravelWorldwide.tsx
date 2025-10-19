import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assets/travel-world/travel_world.png";
import banner from "@/assets/bg_invite.png";
import PrimaryButton from "../Buttons/PrimaryButton";

const TravelWorldwide = () => {
  return (
    <Box
      sx={{
        padding: { sm: 4, md: 8 },
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            maxWidth: { xs: 300, sm: 400, md: 500 },
            mx: "auto",
            height: { xs: 200, sm: 250, md: 300 },
            mb: 1,
          }}
        >
          <Image
            src={image}
            alt="Find travel worldwide"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 600px) 300px, (max-width: 900px) 400px, 500px"
            priority
          />
        </Box>
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Travel the world together using our website - find your travel
            partner
          </Typography>
          <PrimaryButton btnName="Join Now" />
        </Box>
      </Box>
    </Box>
  );
};

export default TravelWorldwide;
