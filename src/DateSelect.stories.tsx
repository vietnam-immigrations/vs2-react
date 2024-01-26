import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateInputProps } from "./index";
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
      <DateSelect {...args} value={val} onChange={setVal} />
      <Typography>Value: {val}</Typography>
    </Box>
  );
};
