import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({
        url: `/user/me`,
        method: "GET",
      }),
    }),
    updateMyProfile: builder.mutation({
      query: (data) => {
        return {
          url: `/user`,
          method: "PUT",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: ["user"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: `/auth/change-password`,
          method: "POST",
          contentType: "application/json",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useChangePasswordMutation,
} = userApi;
