import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { H4, H4Props } from "./H4";

export default {
  title: "H4",
  component: H4,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H4Props> = (args) => {
  return <H4 {...args}>Header 4</H4>;
};
