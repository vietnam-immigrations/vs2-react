import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { H2, H2Props } from "./H2";

export default {
  title: "H2",
  component: H2,
  args: {
    sx: {}
  }
} as Meta;

export const Default: StoryFn<H2Props> = (args) => {
  return <H2 {...args}>Header 2</H2>;
};
