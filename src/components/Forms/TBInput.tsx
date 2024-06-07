import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TTBInputProps = {
  margin?: "normal" | "dense" | "none";
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  multiline?: boolean;
  rows?: number;
  InputLabelProps?: object;
  InputProps?: object;
  defaultValue?: any;
  rules?: object;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const TBInput = ({
  name,
  label,
  margin = "dense",
  type = "text",
  size = "medium",
  fullWidth = true,
  sx,
  placeholder,
  required,
  autoComplete,
  autoFocus,
  multiline = false,
  rows,
  InputLabelProps,
  onChange,
  InputProps,
  defaultValue,
  rules,
}: TTBInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={sx}
          placeholder={placeholder}
          required={required}
          margin={margin}
          multiline={multiline}
          rows={rows}
          InputLabelProps={InputLabelProps}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          error={!!error?.message}
          helperText={error?.message}
          InputProps={InputProps}
          onChange={(e) => {
            const value =
              type === "number" ? Number(e.target.value) : e.target.value;
            field.onChange(value);
            if (onChange) onChange(e);
          }}
        />
      )}
    />
  );
};

export default TBInput;
