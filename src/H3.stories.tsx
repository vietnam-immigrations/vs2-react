import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { H3, H3Props } from "./H3";

export default {
  title: "H3",
  component: H3,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H3Props> = (args) => {
  return <H3 {...args}>Header 3</H3>;
};
