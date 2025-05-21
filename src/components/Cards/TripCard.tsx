import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TTrip } from "@/types";
import { Divider, Stack } from "@mui/material";
import { dateConverter } from "@/utils/dateConverter";

export default function TripCard({ trip }: { trip: TTrip }) {
  const startDate = dateConverter(trip.startDate);
  const endDate = dateConverter(trip.endDate);

  return (
    <Card sx={{ minHeight: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={trip?.photos[0]}
      />
      <CardContent sx={{padding:"10px"}}>
        <Typography variant="p" component="h2">{trip.user.username}</Typography>
        <Divider component="p" sx={{ margin: "10px 0" }} />
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="justify"
          sx={{ minHeight: 50, maxHeight: 70 }}
        >
          {trip?.description.slice(0, 95)}...
        </Typography>
        <Divider component="p" sx={{ margin: "10px 0" }} />
        <Stack direction="row" justifyContent="space-between" color="text.secondary">
          <Typography variant="body2" component="p">
            Destination:
          </Typography>
          <Typography variant="body1" component="p" fontWeight={600}>
            {trip.destination}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt="5px" color="text.secondary">
          <Typography variant="body2" component="p">
            Dates:
          </Typography>
          <Typography variant="body1" component="p" fontWeight={600}>
            {startDate} to {endDate}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions  color="text.secondary">
        <Button size="medium" fullWidth href={`/trip/${trip.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
