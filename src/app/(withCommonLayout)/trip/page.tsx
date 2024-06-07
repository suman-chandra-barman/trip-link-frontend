"use client";

import TripCard from "@/components/Cards/TripCard";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import TBSelect from "@/components/Forms/TBSelect";
import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import { TQueryParam, TTrip } from "@/types";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const TripPage = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const { data, isLoading } = useGetAllTripsQuery([
    { name: "page", value: page },
    { name: "limit", value: limit },
    ...params,
  ]);
  const trips = data?.trips;
  const meta = data?.meta;
  let pageCount: number = 1;

  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  const handleSearch = (values: FieldValues) => {
    if (values?.destination) {
      const value = [{ name: "searchTerm", value: values?.destination }];
      setParams(value);
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
          <TBForm onSubmit={handleSearch}>
            <Stack
              direction="column"
              mt="30px"
              justifyContent="center"
              spacing={2}
            >
              <TBInput
                name="destination"
                placeholder="Enter destination, country or city"
              />
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

              <Button
                type="submit"
                // onClick={handleSearch}
                sx={{ height: "56px" }}
              >
                Search
              </Button>
            </Stack>
          </TBForm>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Show trips */}
          <Grid container spacing={3} mt={3}>
            <Grid item lg={12} textAlign="center">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h5" fontWeight={600} color="primary">
                  Total: {meta?.total} Trips
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography fontWeight={600}>Show</Typography>
                  <Select
                    value={limit}
                    size="small"
                    onChange={(e) => setLimit(e.target.value as number)}
                    sx={{ width: 80 }}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                  </Select>
                </Stack>
              </Stack>
            </Grid>

            {isLoading && (
              <Stack
                sx={{ color: "grey.500", height: "50vh", width: "100%" }}
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress color="success" />
              </Stack>
            )}
            {trips?.length &&
              trips.map((trip: TTrip, idx: number) => (
                <>
                  <Grid key={idx} item xs={12} md={6} lg={4}>
                    <TripCard key={idx} trip={trip} />
                  </Grid>
                </>
              ))}
          </Grid>
          <Stack alignItems="center" mt={5}>
            <Pagination
              count={pageCount}
              page={page}
              shape="rounded"
              size="medium"
              color="primary"
              onChange={(_, page) => setPage(page)}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TripPage;
