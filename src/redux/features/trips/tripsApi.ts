import { baseApi } from "@/redux/api/baseApi";
import { TMeta, TQueryParam } from "@/types";

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
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/trips`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: [], meta: TMeta) => {
        return {
          trips: response,
          meta,
        };
      },
      providesTags: ["trips"],
    }),
    getSingleTrip: builder.query({
      query: (id) => ({
        url: `/trips/${id}`,
        method: "GET",
      }),
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
  useGetSingleTripQuery,
  useDeleteTripMutation,
} = tripsApi;
