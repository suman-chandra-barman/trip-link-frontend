"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  CircularProgress,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import {
  useDeleteTripMutation,
  useGetAllTripsQuery,
} from "@/redux/features/trips/tripsApi";
import { dateConverter, dateFormate } from "@/utils/dateConverter";
import { toast } from "sonner";
import TripModal from "../Dashboard/TripModal";
import { TTrip } from "@/types";

const TripsTable = () => {
  const [openTripModal, setOpenTripModal] = useState(false);
  const [trip, setTrip] = useState<TTrip>();

  const { data, isLoading } = useGetAllTripsQuery(undefined);
  const [deleteTrip] = useDeleteTripMutation();

  const trips = data?.trips;

  const handleEdit = (tripData: TTrip) => {
    const { startDate, endDate, ...existingTripData } = tripData;
    const startDateData = dateFormate(startDate);
    const endDateData = dateFormate(endDate);

    const data = {
      startDate: startDateData,
      endDate: endDateData,
      ...existingTripData,
    };

    setOpenTripModal(true);
    setTrip(data);
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting trip...");
    try {
      const res = await deleteTrip(id).unwrap();
      if (res?.id) {
        toast.success("Trip deleted successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to delete trip", { id: toastId });
    }
  };

  if (isLoading) {
    return (
      <Stack
        sx={{ color: "grey.500", height: "50vh", width: "100%" }}
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
    <Container maxWidth="lg" sx={{ paddingBottom: "50px" }}>
      <Typography variant="h4">All Trips</Typography>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "2rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Trip
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Dates
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Type
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Budget
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trips &&
              trips?.length &&
              trips?.map((trip: TTrip & { user?: any }, index: number) => {
                const startDate = dateConverter(trip?.startDate);
                const endDate = dateConverter(trip?.endDate);
                return (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(even)": { backgroundColor: "#ffffff" },
                    }}
                  >
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Box>
                          <Image
                            src={trip?.photos[0]}
                            width={60}
                            height={50}
                            alt="trip"
                          />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" gutterBottom>
                            Username: {trip?.user?.username}
                          </Typography>
                          <Typography variant="subtitle2" gutterBottom>
                            Destination: {trip?.destination}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" gutterBottom>
                        Start date: {startDate}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        End date: {endDate}
                      </Typography>
                    </TableCell>
                    <TableCell>{trip?.travelType}</TableCell>
                    <TableCell>${trip?.budget}</TableCell>

                    <TableCell>
                      <Tooltip title="Edit" placement="top">
                        <IconButton
                          size="small"
                          sx={{ border: "1px solid", mr: 1 }}
                          onClick={() => handleEdit(trip)}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton
                          size="small"
                          color="error"
                          sx={{ border: "1px solid" }}
                          onClick={() => handleDelete(trip?.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}

            {/* modals  */}
            {trip && (
              <TripModal
                open={openTripModal}
                setOpen={setOpenTripModal}
                trip={trip}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TripsTable;
