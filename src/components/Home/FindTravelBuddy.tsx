"use client";
import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import TripCard from "../Cards/TripCard";
import { TQueryParam, TTrip } from "@/types";
import Link from "next/link";
import { formatDateToISO } from "@/utils/formatDateToISO";
import { useDebounced } from "@/redux/hooks";

const FindTravelBuddy = () => {
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [travelType, setTravelType] = useState("");

  const [params, setParams] = useState<TQueryParam[]>([]);
  const { data, isLoading, refetch } = useGetAllTripsQuery(params);

  const trips = data?.trips;
  const debouncedTerm = useDebounced({
    searchQuery: destination,
    delay: 600,
  });

  useEffect(() => {
    if (debouncedTerm) {
      setParams((prevParams) => {
        const updatedParams = prevParams.filter(
          (param) => param.name !== "searchTerm"
        );
        return [...updatedParams, { name: "searchTerm", value: debouncedTerm }];
      });
    }
  }, [debouncedTerm]);

  const handleSearch = () => {
    try {
      let formattedDate = "";
      if (travelDates) {
        const date = new Date(travelDates);
        if (!isNaN(date.getTime())) {
          formattedDate = formatDateToISO(travelDates);
        } else {
          throw new RangeError("Invalid date value");
        }
      }

      const newParams = [
        { name: "travelType", value: travelType },
        { name: "travelDate", value: formattedDate },
      ];
      setParams((prevParams) => {
        const filteredParams = prevParams.filter(
          (param) => param.name !== "travelType" && param.name !== "travelDate"
        );
        return [...filteredParams, ...newParams];
      });
      refetch();
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  if (isLoading) {
    return (
      <Stack
        sx={{ color: "grey.500", height: "100vh", width: "100%" }}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="success" />
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

        <Stack direction="row" spacing={1}>
          <Grid container spacing={2} justifyContent="start">
            <Grid item xs={12} lg={12}>
              <TextField
                size="small"
                name="searchTerm"
                variant="standard"
                placeholder="Where you want to go?"
                sx={{ width: 250 }}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack direction="row" spacing={2}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["Adventure", "Leisure", "Business"]}
                  value={travelType}
                  defaultValue={travelType}
                  onChange={(e, newValue) => setTravelType(newValue as string)}
                  sx={{ width: 250 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Travel Type" />
                  )}
                />
                <TextField
                  type="date"
                  label="Date"
                  defaultValue={travelDates}
                  value={travelDates}
                  sx={{ width: 250 }}
                  onChange={(e) => setTravelDates(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button size="small" onClick={handleSearch}>
                  Search
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

<<<<<<< HEAD
        <Grid container spacing={3} mt={3}>
          {trips &&
            trips.slice(0, 10).map((trip: TTrip, idx: number) => (
              <Grid key={idx} item xs={12} md={4}>
=======
        <Grid container spacing={2} mt={3}>
          {trips ?
           <>
            {trips.slice(0, 10).map((trip: TTrip, idx: number) => (
              <Grid key={idx} item xs={12} md={3}>
>>>>>>> 1f64f29f96b17cb5712727567b46d8453032abb8
                <TripCard trip={trip} />
              </Grid>
            ))}
            <Box textAlign="center" width="100%" mt={6}>
              <Link href="/trip">
                <Button>See More</Button>
              </Link>
            </Box>
           </>
           : <Box color="text.secondary" sx={{textAlign:"center", width:"100%"}}>Something went wrong, No Travel Buddy Found!</Box>
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default FindTravelBuddy;
