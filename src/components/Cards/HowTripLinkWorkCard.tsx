import { Box, Typography } from "@mui/material";
import { THowTripLinkWorksData } from "../Home/HowTripLinkWork";

const HowTripLinkWorkCard = ({ data }: { data: THowTripLinkWorksData }) => {
  return (
    <Box
      textAlign="center"
      sx={{
        backgroundColor: "rgba(255, 249, 208, 0.5)",
        padding: "16px",
        height: 220,
        boxShadow: "0px 5px 10px lightgray",
        borderRadius: "4px",
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
