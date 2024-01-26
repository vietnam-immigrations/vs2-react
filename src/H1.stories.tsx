import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { H1, H1Props } from "./H1";

export default {
  title: "H1",
  component: H1,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H1Props> = (args) => {
  return <H1 {...args}>Header 1</H1>;
};
