"use client";

import { useGetSingleTripQuery } from "@/redux/features/trips/tripsApi";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TTrip } from "@/types";
import { dateConverter } from "@/utils/dateConverter";
import { useRouter } from "next/navigation";

const TripDetailPage = ({ params }: { params: { tripId: string } }) => {
  const router = useRouter();

  const id = params.tripId;
  const { data, isLoading } = useGetSingleTripQuery(id);
  const trip: TTrip = data;
  const startDate = dateConverter(trip?.startDate);
  const endDate = dateConverter(trip?.endDate);
  console.log({ trip });
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
  return (
    <Container maxWidth="xl" style={{ marginTop: 65, marginBottom: 30 }}>
      <Box>
        <Swiper navigation={true} modules={[Navigation]}>
          {trip?.photos?.map((src: string, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Slide ${index}`}
                style={{ width: "100%" }}
                width={500}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box mt={5}>
        <Typography variant="h5"> Location: {trip?.destination}</Typography>
        <Typography mt={2}>Trip Start: {startDate}</Typography>
        <Typography> Trip End: {endDate}</Typography>
        <Typography> Budget: ${trip?.budget}</Typography>
        <Typography> Travel Type: {trip?.travelType}</Typography>
        <Typography mt={2}>{trip?.description}</Typography>
      </Box>
      <Box mt={5}>
        <Typography variant="h5"> Itinerary</Typography>
        {trip?.itinerary.map((item, idx: number) => (
          <Stack
            key={idx}
            direction="row"
            spacing={2}
            p={2}
            mt={1}
            sx={{
              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <Typography> Day: {item.day}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography>{item.description}</Typography>
          </Stack>
        ))}
      </Box>
      <Box mt={4}>
        <Button onClick={() => router.push(`/trip/travel-request/${id}`)}>
          Travel Request
        </Button>
      </Box>
    </Container>
  );
};

export default TripDetailPage;
