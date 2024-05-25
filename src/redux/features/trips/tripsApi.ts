import { baseApi } from "@/redux/api/baseApi";

const tripsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTrip: builder.mutation({
      query: (data) => {
        return {
          url: "/trips/create",
          method: "POST",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: ["trips"],
    }),
    getAllTrips: builder.query({
      query: () => ({
        url: "/trips",
        method: "GET",
      }),
      providesTags: ["trips"],
    }),
    deleteTrip: builder.mutation({
      query: (id) => ({
        url: `/trips/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["trips"],
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetAllTripsQuery,
  useDeleteTripMutation,
} = tripsApi;
