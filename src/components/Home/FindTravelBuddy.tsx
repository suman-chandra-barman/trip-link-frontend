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

const FindTravelBuddy = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const { data, isLoading } = useGetAllTripsQuery([...params]);
  const trips = data?.trips;
  console.log({ data });

  const handleSearch = (values: FieldValues) => {
    if (values?.destination) {
      const value = [{ name: "searchTerm", value: values?.destination }];
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

        <Stack direction="row" mt="30px" spacing={1} justifyContent="center">
          <TBForm onSubmit={handleSearch}>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <TBInput name="destination" placeholder="Enter destination" />
              <TBInput
                name="date"
                type="date"
                label="Date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TBSelect
                name="travelType"
                label="Type of Travel"
                items={["Adventure", "Leisure", "Business"]}
              />
              <TBInput
                name="description"
                placeholder="Search Keywords in Description"
              />

              <Button type="submit" sx={{ height: "56px" }}>
                Search
              </Button>
            </Stack>
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
            <Button>See More</Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default FindTravelBuddy;
