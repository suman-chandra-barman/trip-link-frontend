"use server";

import { FieldValues } from "react-hook-form";

const userRegister = async (data: FieldValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user/create`, {
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

export default userRegister;
