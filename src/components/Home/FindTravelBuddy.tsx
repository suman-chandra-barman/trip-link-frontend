"use client";
import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TripCard from "../Cards/TripCard";
import { TQueryParam, TTrip } from "@/types";
import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton";

const FindTravelBuddy = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const { data, isLoading, refetch } = useGetAllTripsQuery(params);

  const trips = data?.trips;

  if (isLoading) {
    return (
      <Stack
        sx={{ color: "grey.500", height: "100vh", width: "100%" }}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="primary" />
      </Stack>
    );
  }

  return (
    <Box my="100px">
      <Container maxWidth="xl">
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
          Find your next Travel Buddy right here!
        </Typography>

        <Grid container spacing={2} mt={3}>
          {trips &&
            trips.slice(0, 8).map((trip: TTrip, idx: number) => (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <TripCard trip={trip} />
              </Grid>
            ))}
          <Box textAlign="center" width="100%" mt={6}>
            <Link href="/trip">
              <PrimaryButton btnName="See More" />
            </Link>
          </Box>
          {/* </>
           : <Box color="text.secondary" sx={{textAlign:"center", width:"100%"}}>Something went wrong, No Travel Buddy Found!</Box> */}
          {/* } */}
        </Grid>
      </Container>
    </Box>
  );
};

export default FindTravelBuddy;
