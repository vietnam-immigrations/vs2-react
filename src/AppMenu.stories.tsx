import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { AppMenu, AppMenuProps, theme } from "./index";
import { MenuButtonProps } from "./MenuButton";

export default {
  title: "AppMenu",
  component: AppMenu,
  args: {
    mobileHeader: "Vietnam Visa",
    logoUrl: "https://d23teyo8yxn0lq.cloudfront.net/media/2020/05/logo_header_black_text_final.png",
    logoAlt: "Alt text",
    logoWidth: "150px",
    navItems: [
      {
        item: { text: "Home", destination: "/" },
        subItems: []
      },
      {
        item: {
          text: "Apply E-Visa Online",
          destination: "/product/vietnam-e-visa/"
        },
        subItems: []
      },
      {
        item: {
          text: "E-Visa Priority Handling",
          destination: "/product/e-visa-priority-handling"
        },
        subItems: []
      },
      {
        item: { text: "Blog", destination: "/blog" },
        subItems: []
      },
      {
        item: { text: "How to apply", destination: "/vietnam-visa-application" },
        subItems: [
          { text: "Visa cost", destination: "/vietnam-visa-cost" },
          { text: "Extra services", destination: "/fast-vietnam-visa" },
          { text: "Visa requirements", destination: "/vietnam-visa-requirements" },
          { text: "Visa forms", destination: "/vietnam-visa-application-form" },
          { text: "Government policies", destination: "/vietnam-visa-policy" },
          { text: "Payment guideline", destination: "/payment-guideline" },
          { text: "Contact us", destination: "/contact-us" },
          { text: "FAQ", destination: "/faq" }
        ]
      }
    ] as MenuButtonProps[]
  }
} as Meta;

export const Default: StoryFn<AppMenuProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <AppMenu {...args} />
    </ThemeProvider>
  );
};
