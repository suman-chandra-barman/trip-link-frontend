"use client";
import React from "react";
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
  IconButton,
  Box,
  Stack,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { toast } from "sonner";
import {
  useDeleteTripMutation,
  useGetMyTripPostQuery,
} from "@/redux/features/trips/tripsApi";
import { dateConverter } from "@/utils/dateConverter";

const TravelPostPage = () => {
  const { data: travelPosts, isLoading } = useGetMyTripPostQuery(undefined);
  const [deleteTrip] = useDeleteTripMutation();

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
        <CircularProgress color="success" />
      </Stack>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "50px", paddingTop: "50px" }}>
      <Typography variant="h4">My Travel Posts</Typography>
      {!travelPosts.length && (
        <Typography variant="h6">
          You have not send any travel request
        </Typography>
      )}
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
                Photo
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Destination
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Description
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Travel Dates
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {travelPosts.length > 0 &&
              travelPosts?.map((post: any, index: number) => {
                const startDate = dateConverter(post?.startDate);
                const endDate = dateConverter(post?.endDate);
                return (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(even)": { backgroundColor: "#ffffff" },
                    }}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          width: 200,
                          height: 100,
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: "5px",
                        }}
                      >
                        <Image
                          src={post?.photos[0]}
                          alt={post?.destination}
                          layout="fill"
                        />
                      </Box>
                    </TableCell>
                    <TableCell>{post?.destination}</TableCell>
                    <TableCell sx={{ maxWidth: "300px" }}>
                      {post?.description.slice(0, 100)}...more
                    </TableCell>
                    <TableCell>
                      {startDate} - {endDate}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDelete(post?.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TravelPostPage;
