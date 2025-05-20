import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import TBForm from "../Forms/TBForm";
import TBSelect from "../Forms/TBSelect";
import TBFullWidthModal from "../Modals/TBFullWidthModal";
import TBInput from "../Forms/TBInput";
import TBFileUploader from "../Forms/TBFileUploader";
import {
  useCreateTripMutation,
  useUpdateTripMutation,
} from "@/redux/features/trips/tripsApi";
import { useRouter } from "next/navigation";
import uploadImageToImgBB from "@/utils/uploadImageToImgBB";
import formatDateString from "@/utils/formatDateString";
import { TTrip } from "@/types";

type TTripModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  trip: TTrip;
};
const tripTypes = ["Adventure", "Leisure", "Business"];

const TripModal = ({ open, setOpen, trip }: TTripModalProps) => {
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itineraryDays, setItineraryDays] = useState(1);

  const [updateTrip] = useUpdateTripMutation();

  useEffect(() => {
    if (trip) {
      setStartDate(trip?.startDate), setEndDate(trip?.endDate);
    }
  }, [trip]);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      setItineraryDays(days > 1 ? days : 1);
    }
  }, [startDate, endDate]);

  const handleUpdateTrip = async (data: FieldValues) => {
    const toastId = toast.loading("Trip updating...");
    try {
      const { file, ...values } = data;
      let uploadedPhotos;
      if (file?.length) {
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
      const res = await updateTrip(finalData).unwrap();

      if (res?.id) {
        toast.success("Trip updated successfully", { id: toastId });
        setOpen(false);
      } else {
        toast.error("Something went wrong!", { id: toastId });
      }
    } catch (error: any) {
      console.error(error);
      setError("An error occurred while creating the trip");
      toast.error("Something went wrong2!", { id: toastId });
    }
  };

  return (
    <TBFullWidthModal title="Update Trip Post" open={open} setOpen={setOpen}>
      <Stack>
        <Box>
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

          <TBForm onSubmit={handleUpdateTrip} defaultValues={trip}>
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
            <Button size="large" type="submit" sx={{ my: 2, py: 2 }}>
              Update Trip Post
            </Button>
          </TBForm>
        </Box>
      </Stack>
    </TBFullWidthModal>
  );
};

export default TripModal;
