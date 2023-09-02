import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { H1, H1Props, theme } from "./index";

export default {
  title: "H1",
  component: H1,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H1Props> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <H1 {...args}>Header 1</H1>
    </ThemeProvider>
  );
};
