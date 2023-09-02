import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { H3, H3Props } from "./index";

export default {
  title: "H3",
  component: H3,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H3Props> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <H3 {...args}>Header 3</H3>
    </ThemeProvider>
  );
};
