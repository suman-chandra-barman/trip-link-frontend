import { Box, Typography } from "@mui/material";
import { THowTripLinkWorksData } from "../Home/HowTripLinkWork";

const HowTripLinkWorkCard = ({ data }: { data: THowTripLinkWorksData }) => {
  return (
    <Box
      textAlign="center"
      sx={{
        backgroundColor: "rgba(229, 229, 229, 0.5)",
        padding: "16px",
        height: 220,
        borderRadius: "10px",
      }}
    >
      {data.icon}
      <Typography variant="h5" mt="8px" mb="6px" fontWeight={600}>
        {data.title}
      </Typography>
      <Typography>{data.description}</Typography>
    </Box>
  );
};

export default HowTripLinkWorkCard;
