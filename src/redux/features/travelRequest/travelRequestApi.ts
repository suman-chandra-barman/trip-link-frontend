import { baseApi } from "@/redux/api/baseApi";

const travelRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendTravelRequest: builder.mutation({
      query: (data) => {
        return {
          url: `/travel-buddies/request`,
          method: "POST",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: ["tripRequest"],
    }),
    getUserTravelRequests: builder.query({
      query: () => {
        return {
          url: `/travel-buddies/my/travel-request`,
          method: "GET",
        };
      },
      providesTags: ["tripRequest"],
    }),
  }),
});

export const { useSendTravelRequestMutation, useGetUserTravelRequestsQuery } =
  travelRequestApi;
