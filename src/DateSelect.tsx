import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import dayjs, { Dayjs } from "dayjs";

export interface DateSelectProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
  className?: string;
}

const DATE_FORMAT = "DD/MM/YYYY";

export function DateSelect({ value, onChange, label, className }: DateSelectProps) {
  const dateValue = value === "" ? null : dayjs(value, DATE_FORMAT);

  function onInternalChange(val: Dayjs | null) {
    const dateStringValue = val?.isValid() ? val.format(DATE_FORMAT) : "";
    onChange(dateStringValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={className}
        onChange={(val) => onInternalChange(val)}
        value={dateValue}
        format={DATE_FORMAT}
        label={label}
      />
    </LocalizationProvider>
  );
}
