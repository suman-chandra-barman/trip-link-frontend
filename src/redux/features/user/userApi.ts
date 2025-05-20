import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getMyProfile: builder.query({
      query: () => ({
        url: `/user/me`,
        method: "GET",
      }),
    }),

    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/user/update-user`,
          method: "PUT",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: ["user"],
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
          data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateUserMutation,
  useUpdateMyProfileMutation,
  useChangePasswordMutation,
  useGetAllUsersQuery,
} = userApi;
