"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useGetUserTravelRequestsQuery } from "@/redux/features/travelRequest/travelRequestApi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "semibold",
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TravelRequestPage() {
  const { data, isLoading } = useGetUserTravelRequestsQuery({});

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
    <Container
      maxWidth="xl"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      <Box mb={2}>
        <Typography variant="h4">Travel Request History</Typography>
      </Box>
      {!data.length && (
        <Typography variant="h6" mb={2}>
          You have no travel posts
        </Typography>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Designation</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Travel Type</StyledTableCell>
              <StyledTableCell align="right">Request Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length > 0 &&
              data?.map((row: any) => {
                return (
                  <StyledTableRow
                    key={row?.trip?.destination}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row?.trip?.destination}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row?.status}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row?.trip?.travelType}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row?.createdAt}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
