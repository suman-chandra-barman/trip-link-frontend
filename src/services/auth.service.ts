import { authKey } from "@/constants/authKey";
import { decodeData } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setIntoLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = (token: string) => {
  return setIntoLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  const token = getFromLocalStorage(authKey);
  if (token) {
    const decode: any = decodeData(token);

    return {
      ...decode,
      role: decode?.role.toLowerCase(),
    };
  }
};

export const isUserLoggedIn = () => {
  const token = getFromLocalStorage(authKey);
  return !!token;
};

export const deleteUser = () => {
  removeFromLocalStorage(authKey);
};
