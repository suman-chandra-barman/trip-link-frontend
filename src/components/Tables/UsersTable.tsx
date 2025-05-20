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
  IconButton,
  Stack,
  CircularProgress,
  Button,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import UserRoleModal from "../Dashboard/UserRoleModal";
import UserStatusChangeModal from "../Dashboard/UserStatusModal";

const UsersTable = () => {
  const [openUserRoleModal, setOpenUserRoleModal] = useState(false);
  const [openUserStatusModal, setOpenUserStatusModal] = useState(false);
  const [userId, setUserId] = useState("");

  const { data: users, isLoading } = useGetAllUsersQuery(undefined);

  const handleUserRole = (id: string) => {
    setOpenUserRoleModal(true);
    setUserId(id);
  };

  const handleUserStatus = (id: string) => {
    setOpenUserStatusModal(true);
    setUserId(id);
  };

  const handleDelete = async (id: string) => {
    // const toastId = toast.loading("Deleting trip...");
    // try {
    //   const res = await deleteTrip(id).unwrap();
    //   if (res?.id) {
    //     toast.success("Trip deleted successfully", { id: toastId });
    //   }
    // } catch (error) {
    //   toast.error("Failed to delete trip", { id: toastId });
    // }
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
    <Container maxWidth="lg" sx={{ paddingBottom: "50px" }}>
      <Typography variant="h4">All Users</Typography>
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
            <TableRow sx={{ backgroundColor: "secondary.main" }}>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Username & Email
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Role
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Status
              </TableCell>

              {/* <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
                Actions
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.length > 0 &&
              users?.map((user: any, index: number) => {
                return (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(even)": { backgroundColor: "#ffffff" },
                    }}
                  >
                    <TableCell>
                      <Typography variant="subtitle2" gutterBottom>
                        Username: {user?.username}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        Email: {user?.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Edit" placement="top">
                        <Button
                          variant={
                            user?.role === "ADMIN" ? "contained" : "outlined"
                          }
                          size="small"
                          sx={{
                            px: 1,
                            width: 95,
                          }}
                          startIcon={<EditIcon />}
                          onClick={() => handleUserRole(user?.id)}
                        >
                          {user?.role?.toLowerCase()}
                        </Button>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Edit" placement="top">
                        <Button
                          variant="outlined"
                          size="small"
                          color={
                            user?.status === "ACTIVE" ? "primary" : "error"
                          }
                          sx={{ px: 1, width: 100 }}
                          startIcon={<EditIcon />}
                          onClick={() => handleUserStatus(user?.id)}
                        >
                          {user?.status?.toLowerCase()}
                        </Button>
                      </Tooltip>
                    </TableCell>

                    {/* <TableCell>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDelete(user?.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell> */}
                  </TableRow>
                );
              })}

            {/* modals  */}
            <UserRoleModal
              open={openUserRoleModal}
              setOpen={setOpenUserRoleModal}
              userId={userId}
            />
            <UserStatusChangeModal
              open={openUserStatusModal}
              setOpen={setOpenUserStatusModal}
              userId={userId}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UsersTable;
