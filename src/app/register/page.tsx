"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import TBSelect from "@/components/Forms/TBSelect";
import userRegister from "@/services/actions/userRegister";
import { toast } from "sonner";

const profileValidationSchema = z.object({
  contactNumber: z
    .string({ required_error: "Contact number is required" })
    .regex(/^\d{11}$/, { message: "Provide 11 digit valid phone number!" }),
  gender: z.string({ required_error: "Gender is required" }),
});

const registerValidationSchema = z.object({
  username: z
    .string({
      required_error: "Username is required!",
    })
    .regex(/^\S*$/, "Username cannot contain spaces"),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Provide a valid email!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(5, { message: "Must be 5 or more characters long!" }),
  confirmPassword: z
    .string({ required_error: "Confirm password is required!" })
    .min(5, { message: "Must be 5 or more characters long!" }),
  profile: profileValidationSchema,
});

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (data: FieldValues) => {
    const { username, email, password, confirmPassword, profile } = data;

    if (password === confirmPassword) {
      const registerData = {
        username,
        email,
        password,
        profile: {
          contactNumber: profile?.contactNumber,
          gender: profile?.gender.toUpperCase(),
        },
      };

      try {
        const res = await userRegister(registerData);
        if (res.success) {
          toast.success(res.message);
          router.push("/login");
        } else {
          setError(res.message);
        }
      } catch (error: any) {
        console.error(error);
      }
    } else {
      setError("Password and confirm password not match!");
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
            maxWidth: "800px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontWeight={600}
            textAlign="center"
          >
            Create an Account
          </Typography>
          <Typography
            mb={1}
            textAlign={"center"}
          >
            Sign up to get started
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
                p: 1,
              }}
            >
              {error}
            </Typography>
          )}

          {/* form section  */}
          <TBForm
            onSubmit={handleRegister}
            resolver={zodResolver(registerValidationSchema)}
          >
            <Grid container spacing={2} my={2}>
              <Grid item md={6} sm={12} xs={12}>
                <TBInput name="username" label="Username" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TBInput name="email" label="Email" type="email" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TBInput name="password" label="Password" type="password" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TBInput
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TBInput
                  name="profile.contactNumber"
                  label="Contract Number"
                  type="tel"
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TBSelect
                  name="profile.gender"
                  label="Gender"
                  items={["Male", "Female", "Other"]}
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
              Register
            </Button>
          </TBForm>
          <Typography
            textAlign="center"
            sx={{
              "& a": {
                color: "primary.main",
              },
            }}
          >
            Do you have an account? <Link href="/login">Login</Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
