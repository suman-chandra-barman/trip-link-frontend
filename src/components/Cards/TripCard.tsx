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
    <Card sx={{ minHeight: 410 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={trip?.photos[0]}
        title="green iguana"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="justify"
          sx={{ minHeight: 50, maxHeight: 70 }}
        >
          {trip?.description.slice(0, 100)}
          {" ...More"}
        </Typography>
        <Divider component="p" sx={{ margin: "20px 0" }} />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" component="p">
            Destination:
          </Typography>
          <Typography variant="body1" component="p" fontWeight={500}>
            {trip.destination}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography variant="body2" component="p">
            Dates:
          </Typography>
          <Typography variant="body1" component="p" fontWeight={500}>
            {startDate} to {endDate}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="medium" fullWidth href={`/trip/${trip.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
