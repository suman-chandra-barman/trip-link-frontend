import { Container, Grid, Typography } from "@mui/material";
import WhyTravelWithUsCard from "../Cards/WhyTravelWithUsCard";

export type TWhyWithUsData = {
  title: string;
  description: string;
  image: string;
};

const WhyTravelWithUs = () => {
  const data: TWhyWithUsData[] = [
    {
      title: "Enjoy trips you cannot find anywhere else",
      description: "Explore hidden gems and off-the-beaten-path destinations.",
      image:
        "https://res.cloudinary.com/dlywv3nys/image/upload/v1727069721/why_travel1_uertwm.jpg",
    },
    {
      title: "Know all your TripMates before you travel",
      description: "Connect with your future friends before the trip starts.",
      image:
        "https://res.cloudinary.com/dlywv3nys/image/upload/v1727069726/why_travel2_wt8ous.jpg",
    },
    {
      title: "Unbeatable prices for smallest group sizes",
<<<<<<< HEAD
      description: "No tour operator offers what you find on TripLink",
=======
      description: "No tour operator offers what you find on Trip Link",
>>>>>>> 1f64f29f96b17cb5712727567b46d8453032abb8
      image:
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/agalwthobczh3h884dxb",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "100px",
        marginBottom: "100px",
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
        Why travel with us?
      </Typography>
      <Grid container spacing={2}>
        {data?.map((item, idx) => (
          <Grid key={idx} item xs={12} lg={4}>
            <WhyTravelWithUsCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyTravelWithUs;
