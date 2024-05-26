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
  const endDate = dateConverter(trip.startDate);
  console.log("t", trip);

  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {trip?.description.slice(0, 100)}
          {" ...More"}
        </Typography>
        <Divider component="p" sx={{ margin: "20px 0" }} />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" component="p">
            Destination:
          </Typography>
          <Typography variant="body1" component="p" fontWeight={600}>
            {trip.destination}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography variant="body2" component="p">
            Journey Start:
          </Typography>
          <Typography variant="body1" component="p" fontWeight={600}>
            {startDate}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography variant="body2" component="p">
            Journey End:
          </Typography>
          <Typography variant="body1" component="p" fontWeight={600}>
            {endDate}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ mb: "10px" }}>
        <Button size="medium" fullWidth>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
