"use client";
import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import TripCard from "../Cards/TripCard";
import { TQueryParam, TTrip } from "@/types";
import { FieldValues } from "react-hook-form";
import TBInput from "../Forms/TBInput";
import TBForm from "../Forms/TBForm";
import TBSelect from "../Forms/TBSelect";
import Link from "next/link";

const FindTravelBuddy = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const { data, isLoading } = useGetAllTripsQuery([...params]);
  const trips = data?.trips;

  const handleSearch = (values: FieldValues) => {
    if (values) {
      const value = [
        { name: "searchTerm", value: values?.searchTerm },
        { name: "searchTerm", value: values?.travelType },
        { name: "date", value: values?.date },
      ];
      setParams(value);
    }
  };

  return (
    <Box my="100px">
      <Container maxWidth="xl">
        <Typography
          component="h2"
          variant="h3"
          fontWeight="600"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "3.5rem",
            },
          }}
        >
          Find your next Travel Buddy right here!
        </Typography>

        <Stack direction="row" mt="30px" spacing={1}>
          <TBForm onSubmit={handleSearch}>
            <Grid container spacing={2} justifyContent="start">
              <Grid item xs={12} lg={12}>
                <TBInput
                  fullWidth
                  size="small"
                  name="searchTerm"
                  variant="standard"
                  placeholder="Where you want to go?"
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack direction="row" spacing={2}>
                  <TBSelect
                    name="travelType"
                    label="Type of Travel"
                    size="small"
                    items={["Adventure", "Leisure", "Business"]}
                  />
                  <TBInput
                    name="date"
                    type="date"
                    label="Date"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Button type="submit" size="small">
                    Search
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </TBForm>
        </Stack>

        {/* Show trips */}
        <Grid container spacing={3} mt={3}>
          {trips &&
            trips.map((trip: TTrip, idx: number) => (
              <>
                <Grid key={idx} item xs={12} md={4}>
                  <TripCard key={idx} trip={trip} />
                </Grid>
              </>
            ))}
          <Box textAlign="center" width="100%" mt={6}>
            <Link href="/trip">
              <Button>See More</Button>
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default FindTravelBuddy;
