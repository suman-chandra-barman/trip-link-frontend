"use client";
import TripCard from "@/components/Cards/TripCard";
import { useGetAllTripsQuery } from "@/redux/features/trips/tripsApi";
import { useDebounced } from "@/redux/hooks";
import { TQueryParam, TTrip } from "@/types";
import { formatDateToISO } from "@/utils/formatDateToISO";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const TripPage = () => {
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [travelType, setTravelType] = useState("");

  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const { data, isLoading, refetch } = useGetAllTripsQuery([
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

  console.log("trips", trips)

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
        <Grid item xs={12} md={4} lg={3} sx={{ mt: "19px" }}>
          <Stack
            direction="column"
            mt="30px"
            justifyContent="center"
            spacing={2}
          >
            <TextField
              size="small"
              name="searchTerm"
              variant="standard"
              placeholder="Where you want to go?"
              fullWidth
              onChange={(e) => setDestination(e.target.value)}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["Adventure", "Leisure", "Business"]}
              value={travelType}
              defaultValue={travelType}
              onChange={(e, newValue) => setTravelType(newValue as string)}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Travel Type" />
              )}
            />
            <TextField
              type="date"
              label="Date"
              defaultValue={travelDates}
              value={travelDates}
              fullWidth
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
        <Grid item xs={12} md={8} lg={9}>
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
