import { Container, Grid, Typography } from "@mui/material";
import TopDestinationCard from "../Cards/TopDestinationCard";

export type TTopDestinationData = {
  country: string;
  totalTrips: number;
  image: string;
};

const TopDestination = () => {
  const data: TTopDestinationData[] = [
    {
      country: "France",
      totalTrips: 50,
      image:
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/vfa4jvpimozo2bem9ul3",
    },
    {
      country: "UK",
      totalTrips: 70,
      image:
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/kr2kcyezu9fypqkipyyr",
    },
    {
      country: "USA",
      totalTrips: 65,
      image:
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/lhstxthkixomwqchojwz",
    },
    {
      country: "Canada",
      totalTrips: 49,
      image:
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/x0oxi5huxi5aoy4vx8a0",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: "100px",
        mb: "100px",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        fontWeight="600"
        textAlign="center"
        mb={6}
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
        }}
      >
        Top Destinations
      </Typography>
      <Grid container spacing={2}>
        {data?.map((item, idx) => (
          <Grid key={idx} item xs={12} md={4} lg={3}>
            <TopDestinationCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopDestination;
