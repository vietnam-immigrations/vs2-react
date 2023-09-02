import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { H2, H2Props } from "./index";

export default {
  title: "H2",
  component: H2,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H2Props> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <H2 {...args}>Header 2</H2>
    </ThemeProvider>
  );
};
