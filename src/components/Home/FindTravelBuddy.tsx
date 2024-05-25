"use client";

import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const FindTravelBuddy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetAllTripsQuery({});

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    console.log("Trips data:", data);
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
      </Container>
    </Box>
  );
};

export default FindTravelBuddy;
