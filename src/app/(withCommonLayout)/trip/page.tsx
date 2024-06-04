"use client";

import TripCard from "@/components/Cards/TripCard";
import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import { TTrip } from "@/types";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const TripPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: trips, isLoading } = useGetAllTripsQuery({});

  console.log({ trips });

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    console.log("Trips data:", trips);
    setSearchTerm("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <Container maxWidth="xl" style={{ marginTop: 100, marginBottom: 30 }}>
      <Box>
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
          Find Trips
        </Typography>
        <Typography
          component="p"
          variant="h3"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "1.5rem",
              md: "2rem",
            },
          }}
        >
          Discover your next big adventure, hosted by experts
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} sx={{ mt: "19px" }}>
          <Stack
            direction="column"
            mt="30px"
            justifyContent="center"
            spacing={2}
          >
            <TextField
              variant="outlined"
              placeholder="Destination"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              size="medium"
            />
            <TextField
              variant="outlined"
              placeholder="Start Date"
              type="date"
              // value={startDate}
              // onChange={(e) => setStartDate(e.target.value)}
              fullWidth
              size="medium"
              InputLabelProps={{ shrink: true }}
            />

            <FormControl fullWidth size="medium">
              <InputLabel>Travel Type</InputLabel>
              <Select
                // value={travelType}
                // onChange={(e) => setTravelType(e.target.value)}
                label="Travel Type"
              >
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="leisure">Leisure</MenuItem>
                <MenuItem value="adventure">Adventure</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              placeholder="Keywords in Description"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              fullWidth
              size="medium"
            />
            <Button onClick={handleSearch} sx={{ height: "56px" }}>
              Search
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Show trips */}
          <Grid container spacing={3} mt={3}>
            {trips &&
              trips.map((trip: TTrip, idx: string) => (
                <>
                  <Grid key={idx} item xs={12} md={6} lg={4}>
                    <TripCard key={idx} trip={trip} />
                  </Grid>
                </>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TripPage;
