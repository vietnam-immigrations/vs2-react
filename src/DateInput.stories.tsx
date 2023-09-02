import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { DateInput, DateInputProps } from "./index";

export default {
  title: "DateInput",
  component: DateInput,
  args: {
    label: "A label",
    className: "className",
    required: true
  }
} as Meta;

export const Default: StoryFn<DateInputProps> = (args) => {
  const [val, setVal] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <DateInput {...args} value={val} onChange={setVal} />
    </ThemeProvider>
  );
};
