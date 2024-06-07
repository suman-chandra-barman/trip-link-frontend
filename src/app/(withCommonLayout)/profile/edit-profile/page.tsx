"use client";
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

import { toast } from "sonner";
import { useUpdateMyProfileMutation } from "@/redux/features/user/userApi";
const EditProfilePage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const handleEditProfile = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Updating...");
    try {
      const res = await updateMyProfile({ username, email });
      if (!res) {
        toast.error("Failed to update profile", { id: toastId });
      }
      console.log("res", res);
      if (res?.data?.success === true) {
        toast.success("Profile updated successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to update profile", { id: toastId });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleEditProfile}
        sx={{
          padding: "2rem",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            marginBottom: "2rem",
          }}
        >
          Edit My Profile
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Save Profile
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfilePage;
