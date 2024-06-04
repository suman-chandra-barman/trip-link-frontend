import { z } from "zod";

const itinerarySchema = z.object({
  day: z.number().min(1, { message: "Day must be greater than 0" }),
  description: z.string({ required_error: "Description is required" }),
});

const createTripValidationSchema = z.object({
  destination: z.string({ required_error: "Destination  is required" }),
  startDate: z.string({ required_error: "Start Date  is required" }),
  endDate: z.string({ required_error: "End Date  is required" }),
  description: z.string({ required_error: "Description  is required" }),
  travelType: z.string({ required_error: "Travel Type  is required" }),
  budget: z.number({ required_error: "Budget is required" }),
  photos: z
    .array(z.string())
    .min(1, { message: "At least one photo is required" }),
  itinerary: z
    .array(itinerarySchema)
    .min(1, { message: "At least one itinerary item is required" }),
});

export const TripValidationSchema = {
  createTripValidationSchema,
};
