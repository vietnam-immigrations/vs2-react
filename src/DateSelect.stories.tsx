import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { DateInputProps, theme } from "./index";
import { DateSelect } from "./DateSelect";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default {
  title: "DateSelect",
  component: DateSelect,
  args: {
    label: "A label",
    className: "className",
    required: true
  }
} as Meta;

export const Default: StoryFn<DateInputProps> = (args) => {
  const [val, setVal] = useState("");

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <DateSelect {...args} value={val} onChange={setVal} />
      </ThemeProvider>
      <Typography>Value: {val}</Typography>
    </Box>
  );
};
