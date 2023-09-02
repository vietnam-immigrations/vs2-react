import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { H4, H4Props } from "./index";

export default {
  title: "H4",
  component: H4,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H4Props> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <H4 {...args}>Header 4</H4>
    </ThemeProvider>
  );
};
