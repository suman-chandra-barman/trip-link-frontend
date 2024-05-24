"use server";

import { FieldValues } from "react-hook-form";

const userLogin = async (data: FieldValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};

export default userLogin;
