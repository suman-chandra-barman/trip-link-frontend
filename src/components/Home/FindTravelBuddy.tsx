"use client";

import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TripCard from "../Cards/TripCard";
import { TTrip } from "@/types";

const FindTravelBuddy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: trips, isLoading } = useGetAllTripsQuery({});

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
    <Box my="100px">
      <Container maxWidth="xl">
        <Typography
          component="h2"
          variant="h3"
          fontWeight="600"
          textAlign="center"
        >
          Find your next Travel Buddy right here!
        </Typography>

        <Stack direction="row" mt="30px" justifyContent="center">
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            sx={{
              maxWidth: "500px",
              borderRight: "0px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              "& fieldset": {
                borderRight: "0px",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{
              height: "56px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderLeft: "0px",
            }}
          >
            Search
          </Button>
        </Stack>

        {/* Show trips */}
        <Grid container spacing={3} mt={3}>
          {trips &&
            trips.map((trip: TTrip, idx: string) => (
              <>
                <Grid item xs={12} md={6} lg={4}>
                  <TripCard key={idx} trip={trip} />
                </Grid>
              </>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FindTravelBuddy;
