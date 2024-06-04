"use client";

import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
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
        {/* 
        <Stack direction="row" mt="30px" justifyContent="center">
          <TextField
            variant="outlined"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            size="medium"
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
        </Stack> */}
        <Stack direction="row" mt="30px" justifyContent="center" spacing={2}>
          <TextField
            variant="outlined"
            placeholder="Destination"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            size="medium"
            sx={{ maxWidth: "200px" }}
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
            sx={{ maxWidth: "200px" }}
          />

          <FormControl fullWidth size="medium" sx={{ maxWidth: "200px" }}>
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
            sx={{ maxWidth: "215px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ height: "56px" }}
          >
            Search
          </Button>
        </Stack>

        {/* Show trips */}
        <Grid container spacing={3} mt={3}>
          {trips &&
            trips.map((trip: TTrip, idx: string) => (
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
