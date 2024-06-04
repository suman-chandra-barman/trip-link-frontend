"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Box, SxProps, Typography } from "@mui/material";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function TBFileUploader({ name, label, sx }: TProps) {
  const { control } = useFormContext();
  const [fileNames, setFileNames] = React.useState<string[]>([]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...fields } }) => (
        <>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
            size="large"
          >
            {label || "Upload files"}
            <input
              type="file"
              multiple
              onChange={(e) => {
                const files = (e.target as HTMLInputElement).files;
                if (files) {
                  const fileArray = Array.from(files);
                  setFileNames(fileArray.map((file) => file.name));
                  onChange(fileArray);
                }
              }}
              style={{ display: "none" }}
            />
          </Button>
          <Box mt={2}>
            {fileNames.map((fileName, index) => (
              <Typography key={index} variant="body2">
                {fileName}
              </Typography>
            ))}
          </Box>
        </>
      )}
    />
  );
}
