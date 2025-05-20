"use client";
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { toast } from "sonner";
import { useUpdateMyProfileMutation } from "@/redux/features/user/userApi";
import { deleteUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const EditProfilePage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const handleEditProfile = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Updating...");

    const data: { username?: string; email?: string } = {};

    if (username && !email) {
      data["username"] = username;
    } else if (email && !username) {
      data["email"] = email;
    } else if (username && email) {
      data["username"] = username;
      data["email"] = email;
    }

    try {
      const res = await updateMyProfile(data).unwrap();
      if (!res?.id) {
        toast.error("Failed to update profile", { id: toastId });
      }
      if (res?.id) {
        toast.success("Profile updated successfully", { id: toastId });
        deleteUser();
        router.push("/login");
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
