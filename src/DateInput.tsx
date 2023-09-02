import { isValidDateString } from "./validator";
import TextField from "@mui/material/TextField";
import React from "react";

export interface DateInputProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
  className?: string;
  required?: boolean;
}

export function DateInput({ value, onChange, label, className, required }: DateInputProps) {
  const valid = value === "" || isValidDateString(value);
  const helperText = valid ? null : "Date format DD/MM/YYYY";
  return (
    <TextField
      className={className}
      error={!valid}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      size="small"
      fullWidth
      label={`${label} (DD/MM/YYYY)`}
      value={value}
      helperText={helperText}
    />
  );
}
