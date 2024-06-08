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
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/lsepcjuze0ywhxdndqpd",
    },
    {
      title: "Know all your TripMates before you travel",
      description: "Connect with your future friends before the trip starts.",
      image:
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/wfyyuwumbyykpaptq037",
    },
    {
      title: "Unbeatable prices for smallest group sizes",
      description: "No tour operator offers what you find on JoinMyTrip",
      image:
        "https://res.cloudinary.com/dctipxdo4/image/upload/c_limit,w_2400/q_25,f_auto/agalwthobczh3h884dxb",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        marginBottom: 50,
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        fontWeight="600"
        textAlign="center"
        mb={4}
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
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
