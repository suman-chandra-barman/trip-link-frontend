import { jwtDecode } from "jwt-decode";

export const decodeData = (token: string) => {
  return jwtDecode(token);
};
