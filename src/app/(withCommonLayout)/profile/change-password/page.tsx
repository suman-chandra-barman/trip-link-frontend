"use client";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useChangePasswordMutation } from "@/redux/features/user/userApi";
import { deleteUser } from "@/services/auth.service";

const changePasswordValidationSchema = z.object({
  currentPassword: z.string({
    required_error: "Current password is required!",
  }),
  newPassword: z
    .string({ required_error: "New password is required!" })
    .min(5, { message: "Must be 5 or more characters long!" }),
  confirmPassword: z
    .string({
      required_error: "Confirm password is required!",
    })
    .min(5, { message: "Must be 5 or more characters long!" }),
});

const ChangePasswordPage = () => {
  const [error, setError] = useState("");
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  const handleChangePassword = async (values: FieldValues) => {
    const toastId = toast.loading("Password Changing...");

    const { currentPassword, newPassword, confirmPassword } = values;

    if (newPassword === confirmPassword) {
      const data = {
        currentPassword,
        newPassword,
      };

      try {
        const res = await changePassword(data).unwrap();
        if (!res?.id) {
          toast.error("Failed to change password", { id: toastId });
        }
        if (res?.id) {
          toast.success("Password change successfully", { id: toastId });
          deleteUser();
          router.push("/login");
        }
      } catch (error) {
        toast.error("Failed to change password", { id: toastId });
      }
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            fontWeight={600}
            my={1}
          >
            Change Password
          </Typography>
          {error && (
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              fontWeight={600}
              sx={{
                backgroundColor: "#ffebe8",
                border: "1px solid #dd3c10",
                mt: 3,
                p: 2,
                borderRadius: 1,
              }}
            >
              {error}
            </Typography>
          )}

          {/* Form Section  */}
          <TBForm
            onSubmit={handleChangePassword}
            resolver={zodResolver(changePasswordValidationSchema)}
          >
            <Grid container spacing={2} my={2}>
              <Grid item lg={12}>
                <TBInput
                  name="currentPassword"
                  label="Current Password"
                  type="password"
                />
              </Grid>
              <Grid item lg={12}>
                <TBInput
                  name="newPassword"
                  label="New Password"
                  type="password"
                />
              </Grid>
              <Grid item lg={12}>
                <TBInput
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth={true}
              type="submit"
              sx={{
                my: 1,
              }}
            >
              Change Password
            </Button>
          </TBForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePasswordPage;
