import { authKey } from "@/constants/authKey";
import { TGenericErrorResponse, TSuccessResponse } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = getFromLocalStorage(authKey);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore

  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const resObj: TSuccessResponse = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return resObj;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const resObj: TGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong!",
      errorMessages: error?.response?.data?.message,
    };
    return resObj;
  }
);

export { axiosInstance };
