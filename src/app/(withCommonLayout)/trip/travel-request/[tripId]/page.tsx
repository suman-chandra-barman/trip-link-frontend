"use client";

import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import { useSendTravelRequestMutation } from "@/redux/features/travelRequest/travelRequestApi";
import { useGetMyProfileQuery } from "@/redux/features/user/userApi";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const TravelRequestPage = ({ params }: { params: { tripId: string } }) => {
  const router = useRouter();
  const tripId = params.tripId;

  const { data, isLoading } = useGetMyProfileQuery({});
  const [sendTravelRequest, { isLoading: loading }] =
    useSendTravelRequestMutation();
  const userId = data?.id;

  if (isLoading) {
    return (
      <Stack
        sx={{ color: "grey.500", height: "100vh", width: "100%" }}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="success" />
      </Stack>
    );
  }

  const defaultValue = {
    name: data?.userProfile.name || "",
    contactNumber: data?.userProfile.contactNumber,
    age: data?.userProfile.age || null,
    address: data?.userProfile.address || "",
  };

  const handleTravelRequest = async (values: FieldValues) => {
    try {
      const data = {
        tripId,
        userId,
      };

      const res = await sendTravelRequest(data);
      if (res?.data) {
        toast.success("Request send successfully");
        router.push("/trip");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      console.error("error.message");
    }
  };

  return (
    <Container sx={{ marginTop: "100px", marginBottom: "50px" }}>
      <Stack>
        <Box>
          <Typography variant="h4" component="h2" fontWeight={600} my={1}>
            Send Travel Buddy Request
          </Typography>

          <TBForm
            onSubmit={handleTravelRequest}
            // resolver={zodResolver(
            //   TripValidationSchema.createTripValidationSchema
            // )}
            defaultValues={defaultValue}
          >
            <Grid container spacing={2} my={2}>
              <Grid item xs={12} lg={6}>
                <TBInput name="name" label="Name" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TBInput
                  name="contactNumber"
                  label="Contact Number"
                  type="tel"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TBInput name="address" label="Address" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TBInput name="age" label="Age" type="number" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Agree term and condition"
                />
              </Grid>
            </Grid>

            <Button type="submit" sx={{ my: 2 }}>
              Send Travel Request
            </Button>
          </TBForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default TravelRequestPage;
