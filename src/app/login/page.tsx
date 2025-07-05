"use client";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import userLogin from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import { toast } from "sonner";
import TBModal from "@/components/Modals/TBModal";
import DemoLoginCredentialModal from "@/components/DemoLoginCredential/DemoLoginCredentialModal";

const loginValidationSchema = z.object({
  usernameOrEmail: z.string({
    required_error: "Username or Email is required!",
  }),
  password: z.string({ required_error: "Password is required!" }),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const [openLoginCredentialModal, setLoginCredentialModal] = useState(false);
  const router = useRouter();

  const handleLogin = async (data: FieldValues) => {
    const toastId = toast.loading("Login...");
    try {
      console.log("Login data:", data);
      const res = await userLogin(data);
      if (res.success) {
        toast.success("Login successfully", { id: toastId });
        setError("");
        storeUserInfo(res?.data?.token);
        router.push("/");
        toast.success(res.message);
      } else {
        toast.error("Login failed", { id: toastId });
        setError(res.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

<<<<<<< HEAD
=======
  const handleClickOpen = () => {
    setLoginCredentialModal(true);
  };
>>>>>>> 1f64f29f96b17cb5712727567b46d8453032abb8

  return (
    <Container>
      <Typography
            sx={{
             mt:7,
             fontWeight: 500,
              "& a": {
                color: "primary.main",
              }
            }}
          >
            <Link href="/">BACK TO HOMEPAGE</Link>
          </Typography>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
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
            fontWeight={600}
            textAlign="center"
          >
            Login
          </Typography>
          <Typography
            mb={1}
            textAlign={"center"}
          >
            Access your account
          </Typography>
          {error && (
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              fontWeight={600}
              sx={{
                backgroundColor: "#ffebe8",
                borderRadius: 1,
                mt: 2,
                p: 1,
              }}
            >
              {error}
            </Typography>
          )}
          {/* Demo Credentials */}
          <Box mb={2} mt={3}>
            <Typography fontWeight={700}>Demo Credentials:</Typography>
            <Box sx={{ display: "flex", gap:2, mt: 1}}>
                <Button 
                  onClick={() => handleLogin({password: "123456", usernameOrEmail: "sam_barman"})}
                  sx={{width:"50%" }}
                 >
                  Login as Admin
                </Button>
                <Button 
                  onClick={() => handleLogin({password: "123456", usernameOrEmail: "max"})}
                  sx={{width:"50%" }}
                 >
                  Login as User
                </Button>
            </Box>
          </Box>

          <Divider sx={{ mt: 1 }}>
            <Chip label="OR" size="small" />
          </Divider>
          
          {/* Form Section  */}
          <TBForm
            onSubmit={handleLogin}
            resolver={zodResolver(loginValidationSchema)}
          >
<<<<<<< HEAD
            <Grid container spacing={1} mb={1} mt={0.5}>
              <Grid item xs={12}>
=======
            <Grid container spacing={2} my={2}>
              <Grid item lg={12}>
>>>>>>> 1f64f29f96b17cb5712727567b46d8453032abb8
                <TBInput name="usernameOrEmail" label="Username or Email" />
              </Grid>
              <Grid item xs={12}>
                <TBInput name="password" label="Password" type="password" />
              </Grid>
            </Grid>
            <Button
              fullWidth={true}
              type="submit"
              sx={{
                my: 1,
              }}
            >
              Login
            </Button>
          </TBForm>
          <Divider sx={{ mt: 1 }}>
            <Chip label="OR" size="small" />
          </Divider>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 1}}
            onClick={handleClickOpen}
          >
            Show Demo Credentials
          </Button>
          {
            <DemoLoginCredentialModal
              open={openLoginCredentialModal}
              setOpen={setLoginCredentialModal}
            />
          }
          <Typography
            sx={{
              textAlign: "center",
              color:"black",
              mt: 1,
              "& a": {
                color: "black",
              },
            }}
          >
            Don&apos;t have an account?{" "}
            <Link href="/register">Create an account</Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
