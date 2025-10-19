import { Button } from "@mui/material";
import React from "react";

function PrimaryButton({ btnName }: { btnName: string }) {
  return <Button sx={{ borderRadius: "50px" }}>{btnName}</Button>;
}

export default PrimaryButton;
