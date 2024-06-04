"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import TBSelect from "@/components/Forms/TBSelect";
import TBFileUploader from "@/components/Forms/TBFileUploader";
import { toast } from "sonner";
import { TripValidationSchema } from "@/schemas/trip.validation";
import uploadImageToImgBB from "@/utils/uploadImageToImgBB";
import { useCreateTripMutation } from "@/redux/features/trips/tripsApi";
import formatDateString from "@/utils/formatDateString";

const tripTypes = ["Adventure", "Leisure", "Business"];

const TripCreatePage = () => {
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itineraryDays, setItineraryDays] = useState(1);
  const router = useRouter();

  const [createTrip, { isLoading }] = useCreateTripMutation();

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      setItineraryDays(days > 1 ? days : 1);
    }
  }, [startDate, endDate]);

  const handleCreateTrip = async (data: FieldValues) => {
    try {
      const { file, ...values } = data;

      let uploadedPhotos;
      if (file.length) {
        uploadedPhotos = await Promise.all(
          file?.map((file: File) => uploadImageToImgBB(file))
        );
      }
      const finalData = {
        ...values,
        startDate: formatDateString(values.startDate),
        endDate: formatDateString(values.endDate),
        photos: uploadedPhotos,
      };
      const res = await createTrip(finalData).unwrap();

      if (res?.id) {
        toast.success("Trip created successfully");
        router.push("/trip");
      } else {
        setError("Something went wrong");
      }
    } catch (error: any) {
      console.error(error);
      setError("An error occurred while creating the trip");
    }
  };

  return (
    <Container sx={{ marginTop: "100px", marginBottom: "50px" }}>
      <Stack>
        <Box>
          <Typography variant="h4" component="h2" fontWeight={600} my={1}>
            Create a New Trip Post
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

          <TBForm
            onSubmit={handleCreateTrip}
            // resolver={zodResolver(
            //   TripValidationSchema.createTripValidationSchema
            // )}
          >
            <Grid container spacing={2} my={2}>
              <Grid item lg={4}>
                <TBInput name="destination" label="Destination" />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TBInput
                  name="startDate"
                  label="Start Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TBInput
                  name="endDate"
                  label="End Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TBSelect
                  name="travelType"
                  label="Travel Type"
                  items={tripTypes}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TBInput name="budget" label="Budget" type="number" />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TBFileUploader
                  name="file"
                  label="Upload Photos"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "8px",
                    py: "14px",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TBInput
                  name="description"
                  label="Description"
                  multiline
                  fullWidth
                  placeholder="Start writing here..."
                  rows={3}
                />
              </Grid>

              <Grid item xs={12} lg={12}>
                <Typography variant="h5" component="h3" my={1}>
                  Itinerary
                </Typography>
                {Array.from({ length: itineraryDays }, (_, i) => (
                  <Grid container key={i} spacing={2}>
                    <Grid item xs={12} lg={2}>
                      <TBInput
                        name={`itinerary[${i}].day`}
                        label={`Day ${i + 1}`}
                        type="number"
                        defaultValue={i + 1}
                        InputProps={{
                          readOnly: true,
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={10}>
                      <TBInput
                        name={`itinerary[${i}].description`}
                        label="Description"
                        placeholder="Start writing here..."
                        multiline
                        rows={1}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Button type="submit" sx={{ my: 2 }}>
              Create Trip Post
            </Button>
          </TBForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default TripCreatePage;
